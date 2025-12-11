import type { Work } from "./work";


export class WorkParentResolver {
  resolve(works: Work[]): Work[] {
    const byUrl = new Map<string, Work>();
    works.forEach(w => byUrl.set(w.webUrl, w));

    for (const work of works) {
      const links = this._extractLinks(work.description);

      for (const link of links) {
        const child = byUrl.get(link);
        if (child) {
          child.addParentId(work.id);
        }
      }
    }

    return works;
  }

  _extractLinks(description: string): string[] {
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
