// Minimal markdown renderer for article bodies.
// Supports: ## headings, paragraphs, - bullet lists, **bold**, *italic*.
import { Fragment, type ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Tokenize **bold** and *italic*
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const tok = match[0];
    if (tok.startsWith("**")) {
      nodes.push(<strong key={key++} className="font-semibold text-foreground">{tok.slice(2, -2)}</strong>);
    } else {
      nodes.push(<em key={key++}>{tok.slice(1, -1)}</em>);
    }
    last = match.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function Markdown({ source }: { source: string }) {
  const lines = source.split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="mt-12 mb-4 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          {renderInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push(
        <h1 key={key++} className="mb-6 text-3xl md:text-4xl font-bold tracking-tight">
          {renderInline(line.slice(2))}
        </h1>
      );
      i++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={key++} className="my-4 space-y-2 list-disc pl-6 text-muted-foreground">
          {items.map((it, idx) => (
            <li key={idx} className="leading-relaxed">{renderInline(it)}</li>
          ))}
        </ul>
      );
      continue;
    }
    // paragraph — consume lines until blank
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith("## ") && !lines[i].startsWith("# ") && !lines[i].startsWith("- ")) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={key++} className="my-4 leading-relaxed text-muted-foreground">
        {paraLines.map((pl, idx) => (
          <Fragment key={idx}>
            {renderInline(pl)}
            {idx < paraLines.length - 1 ? <br /> : null}
          </Fragment>
        ))}
      </p>
    );
  }
  return <>{blocks}</>;
}
