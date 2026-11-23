import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const detailsPattern =
  /<details><summary>([^<]+)<\/summary>\s*([\s\S]*?)\s*<\/details>/g;

function prepareMarkdown(markdown: string, assetBasePath?: string) {
  return markdown
    .replace(/<!--[^]*?-->/g, "")
    .replace(/\]\(assets\/([0-9]{2}-[a-z-]+\.svg)\)/g, (_, fileName: string) =>
      assetBasePath
        ? `](${assetBasePath}/${fileName})`
        : `](assets/${fileName})`,
    )
    .replace(
      /\\\[([\s\S]*?)\\\]/g,
      (_, expression: string) => `$$${expression}$$`,
    )
    .replace(
      /\\\(([\s\S]*?)\\\)/g,
      (_, expression: string) => `$${expression}$`,
    );
}

function MarkdownBlock({
  markdown,
  assetBasePath,
}: {
  markdown: string;
  assetBasePath?: string;
}) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {prepareMarkdown(markdown, assetBasePath)}
    </ReactMarkdown>
  );
}

export function LessonMarkdown({
  markdown,
  assetBasePath,
}: {
  markdown: string;
  assetBasePath?: string;
}) {
  const blocks: React.ReactNode[] = [];
  let position = 0;

  for (const match of markdown.matchAll(detailsPattern)) {
    const index = match.index ?? 0;
    if (index > position) {
      blocks.push(
        <MarkdownBlock
          key={`body-${index}`}
          markdown={markdown.slice(position, index)}
          assetBasePath={assetBasePath}
        />,
      );
    }
    blocks.push(
      <details className="lesson-reveal" key={`details-${index}`}>
        <summary>{match[1]}</summary>
        <div className="lesson-reveal__body">
          <MarkdownBlock markdown={match[2]} assetBasePath={assetBasePath} />
        </div>
      </details>,
    );
    position = index + match[0].length;
  }

  if (position < markdown.length) {
    blocks.push(
      <MarkdownBlock
        key="body-end"
        markdown={markdown.slice(position)}
        assetBasePath={assetBasePath}
      />,
    );
  }

  return <div className="lesson-prose">{blocks}</div>;
}
