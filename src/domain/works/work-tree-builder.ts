import type { Work } from "./work";

export class WorkTreeBuilder {
  resolve(works: Work[]): Work[] {
    const byUrl = new Map<string, Work>();
    works.forEach(w => byUrl.set(w.webUrl, w));

    for (const work of works) {
      const links = this._extractUrlsBetweenTaskTag(work.description);

      for (const link of links) {
        const child = byUrl.get(link);
        if (child) {
          work.children.add(child);
          child.parents.add(work);
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

}