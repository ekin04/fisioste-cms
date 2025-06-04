import { reader } from "@/app/reader";
export const blog = (await reader.collections.blog.all())
  .filter((p) => p.entry?.publishDate !== undefined)
  .sort((a, b) => new Date(b.entry.publishDate).getTime() - new Date(a.entry.publishDate).getTime());

export const servizi = (await reader.collections.servizi.all())
  .filter((p) => p.entry?.id !== undefined)
  .sort((a, b) => a.entry.id - b.entry.id);