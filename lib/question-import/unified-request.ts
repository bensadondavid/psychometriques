export const MAX_HTTP_BYTES = 8_000_000;

export async function readBoundedJson(request: Request): Promise<unknown> {
  if (!request.body) throw new Error("Corps absent.");
  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0,
    source = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_HTTP_BYTES) {
        await reader.cancel();
        throw new RangeError("Body limit");
      }
      source += decoder.decode(value, { stream: true });
    }
    source += decoder.decode();
    return JSON.parse(source);
  } finally {
    reader.releaseLock();
  }
}
