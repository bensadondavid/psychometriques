import { SeverityNumber } from "@opentelemetry/api-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

function requireConfiguration(variableName: string) {
  if (process.env.NODE_ENV === "development") {
    throw new Error(
      `${variableName} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${variableName} is configured`,
    );
  }
}

if (!projectToken) requireConfiguration("NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN");
if (!posthogHost) requireConfiguration("NEXT_PUBLIC_POSTHOG_HOST");

export const loggerProvider =
  projectToken && posthogHost
    ? new LoggerProvider({
        resource: resourceFromAttributes({
          "service.name": "psychometriques",
        }),
        processors: [
          new BatchLogRecordProcessor({
            exporter: new OTLPLogExporter({
              url: `${posthogHost.replace(/\/$/, "")}/i/v1/logs`,
              headers: {
                Authorization: `Bearer ${projectToken}`,
                "Content-Type": "application/json",
              },
            }),
          }),
        ],
      })
    : null;

const importLogger = loggerProvider?.getLogger("posthog-import-outcomes");

export function register() {
  // Import outcome logs are emitted explicitly after checking consent.
}

export function emitImportOutcomeLog(
  body: string,
  severityNumber: SeverityNumber,
  attributes: Record<string, string | number | boolean>,
) {
  importLogger?.emit({ body, severityNumber, attributes });
}

export function flushPostHogLogs() {
  return loggerProvider?.forceFlush();
}
