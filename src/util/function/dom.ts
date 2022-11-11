export function childOf(child: any, parent: Node) { while ((child = child.parentNode) && child !== parent); return !!child }
