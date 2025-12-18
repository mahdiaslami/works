import type { Work } from "./work";

export class WorkTreeBuilder {
  resolve(works: Work[]): Work[] {
    const byUrl = new Map<string, Work>();
    works.forEach(w => byUrl.set(w.webUrl, w));

    for (const work of works) {
      const childLinks = this._extractUrlsBetweenTaskTag(work.description);

      for (const link of childLinks) {
        const child = byUrl.get(this._normalizeUrl(link));
        if (child) {
          work.children.add(child);
          child.parents.add(work);
        }
      }

      const parentLinks = this._extractUrlsFromParentTag(work.description);
      for (const link of parentLinks) {
        const parent = byUrl.get(this._normalizeUrl(link));
        if (parent) {
          parent.children.add(work);
          work.parents.add(parent);
        }
      }
    }

    return works.filter((work) => work.parents.length === 0);
  }

  _extractUrlsBetweenTaskTag(description: string): string[] {
    const blockPattern = /\[task\]([\s\S]*?)\[\/task\]/g;
    const urlPattern = /(https?:\/\/[^\s]+)/g;

    const links: string[] = [];
    let blockMatch;

    while ((blockMatch = blockPattern.exec(description)) !== null) {
      const block = blockMatch[1] ?? '';
      let urlMatch;
      while ((urlMatch = urlPattern.exec(block)) !== null) {
        const url = urlMatch[1]
        url && links.push(url);
      }
    }

    return links;
  }

  _extractUrlsFromParentTag(description: string): string[] {
    const patterns = [
      /\[parent\s+([^\]\s]+)\]/g
    ];
    const links: string[] = [];
    for (const pat of patterns) {
      let match;
      while ((match = pat.exec(description)) !== null) {
        const url = match[1]?.trim();
        url && links.push(url);
      }
    }
    return links;
  }

  private _normalizeUrl(url: string): string {
    if (url.endsWith("+s")) {
      return url.slice(0, -2);
    }
    if (url.endsWith("+")) {
      return url.slice(0, -1);
    }

    return url;
  }
}