export type SvgSource = {
  name: string;
  path: string;
  content: string;
};

export type SvgIssue = {
  file: string;
  message: string;
};

export type SvgValidation = {
  valid: boolean;
  issues: SvgIssue[];
  figures: SvgSource[];
};

const MAX_SVG_BYTES = 500_000;

export function canonicalizeFigurePath(name: string, relativePath = "") {
  const candidate = (relativePath || name).replaceAll("\\", "/");
  const figuresIndex = candidate.indexOf("figures/");
  return figuresIndex >= 0 ? candidate.slice(figuresIndex) : candidate;
}

export function validateSvgBatch(sources: SvgSource[]): SvgValidation {
  const issues: SvgIssue[] = [];
  const paths = new Set<string>();
  const validFigures: SvgSource[] = [];

  if (sources.length === 0) {
    issues.push({ file: "", message: "Sélectionnez au moins une figure SVG." });
  }

  for (const source of sources) {
    const path = canonicalizeFigurePath(source.name, source.path);
    const content = source.content.trim();
    const byteSize = new TextEncoder().encode(source.content).byteLength;
    const fileIssues: string[] = [];

    if (!/\.svg$/i.test(source.name) || !/\.svg$/i.test(path)) {
      fileIssues.push("Le fichier et son chemin doivent se terminer par .svg.");
    }
    if (
      !path ||
      path.startsWith("/") ||
      path.split("/").includes("..") ||
      /^(?:[a-z]+:|\\)/i.test(path)
    ) {
      fileIssues.push(
        "Le chemin SVG doit être relatif et ne peut pas contenir « .. ».",
      );
    }
    if (byteSize === 0 || byteSize > MAX_SVG_BYTES) {
      fileIssues.push("La figure doit peser entre 1 octet et 500 Ko.");
    }
    if (!/^(?:<\?xml[\s\S]*?\?>\s*)?<svg\b/i.test(content)) {
      fileIssues.push("Le contenu ne commence pas par une balise SVG valide.");
    }
    if (
      /<!doctype/i.test(content) ||
      /<script\b/i.test(content) ||
      /<foreignObject\b/i.test(content) ||
      /\son[a-z]+\s*=/i.test(content) ||
      /javascript\s*:/i.test(content) ||
      /(?:href|xlink:href)\s*=\s*["']\s*(?:https?:|\/\/)/i.test(content)
    ) {
      fileIssues.push(
        "Le SVG contient un élément actif ou une ressource externe interdite.",
      );
    }
    if (paths.has(path)) {
      fileIssues.push("Ce chemin apparaît plusieurs fois dans le lot.");
    }
    paths.add(path);

    fileIssues.forEach((message) =>
      issues.push({ file: source.name, message }),
    );
    if (fileIssues.length === 0) {
      validFigures.push({ ...source, path });
    }
  }

  return {
    valid: sources.length > 0 && issues.length === 0,
    issues,
    figures: validFigures,
  };
}
