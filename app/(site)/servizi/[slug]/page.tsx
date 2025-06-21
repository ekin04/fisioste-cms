import React from "react";
import Markdoc from "@markdoc/markdoc";
import Image from "next/image";
import { reader } from "../../../reader";
import { markdocConfig } from "../../../../keystatic.config";
import { servizi, serviziTitles } from "@/app/api/keystatic/Collection";
import ReadBar from "@components/articoli/ReadBar";
import Link from "next/link";
import { Carosello } from "../../components/shared/Carosello";
import ContactFormModal from "../../components/shared/ContactFormModal";


export default async function Servizi(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const post = await reader.collections.servizi.read(slug);
  if (!post) return <div>Post not found!</div>;
  const { node } = await post.content();
  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid content");
  }

  const renderable = Markdoc.transform(node, markdocConfig);
  const currentId = post.id;
  
  const currentIndex = servizi.findIndex((p) => p.entry.id === currentId);
  const previousPost = servizi[currentIndex - 1] ?? null;
  const nextPost = servizi[currentIndex + 1] ?? null;

  const otherPosts = servizi.filter((p) => p.entry.id !== currentId);

  return (
    <>
      <ReadBar />

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section with Square Image */}
        <div className="relative py-16 overflow-hidden md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#264193]/10 to-[#5a73b5]/5 z-0"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#264193]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#5a73b5]/10 rounded-full blur-3xl"></div>

          <div className="container relative z-10 px-4 mx-auto">
            <div className="flex flex-col items-center gap-8 mx-auto md:flex-row md:gap-12">
              <div className="flex justify-center w-full md:w-3/5">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#264193] to-[#5a73b5] rounded-lg blur opacity-30"></div>
                  <div className="relative">
                    <Image
                      src={post.image_internal ? post.image_internal : post.image}
                      alt={post.title}
                      width={800}
                      height={800}
                      className="object-cover rounded-lg shadow-xl"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="w-full text-center md:w-3/5 md:text-left">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                  <span className="bg-gradient-to-r from-[#264193] to-[#5a73b5] bg-clip-text text-transparent">
                    {post.title}
                  </span>
                </h1>

                <p className="px-3 mb-8 text-lg text-gray-600 md:px-0 text-pretty">
                  {post.description}
                </p>

                <div className="h-1 mx-auto mb-16 md:mx-0 w-32 bg-gradient-to-r from-[#264193] to-[#5a73b5] rounded-full"></div>
                <ContactFormModal serviziData={serviziTitles} />
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
            {/* Main Content */}
            <main className="lg:col-span-3">
              <article className="overflow-hidden bg-white shadow-sm rounded-xl">
                <div className="p-8 md:p-10">
                  {/* Article Content with Prose */}
                  <div
                    className="prose prose-lg max-w-none text-gray-800 leading-relaxed
  prose-headings:font-semibold prose-headings:text-secondary prose-headings:leading-tight prose-headings:tracking-tight
  prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-10 prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-4
  prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-8
  prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-6
  prose-h4:text-lg prose-h4:mb-3 prose-h4:mt-5 prose-h4:font-medium
  prose-h5:text-base prose-h5:mb-2 prose-h5:mt-4 prose-h5:font-medium
  prose-h6:text-sm prose-h6:mb-2 prose-h6:mt-3 prose-h6:font-medium prose-h6:uppercase prose-h6:tracking-wide prose-h6:text-gray-600
  
  // Paragrafi e testo base
  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-p:mt-0
  
  // Links
  prose-a:text-[#264193] hover:prose-a:text-[#5a73b5] prose-a:font-medium prose-a:no-underline prose-a:transition-all prose-a:duration-200 hover:prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2
  
  // Enfasi e grassetto
  prose-strong:text-[#264193] prose-strong:font-semibold
  prose-em:text-gray-600 prose-em:italic
  
  // Codice inline e blocchi
  prose-code:text-[#5a73b5] prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:font-medium prose-code:border prose-code:border-slate-200
  prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:shadow-lg prose-pre:rounded-lg prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:border prose-pre:border-slate-700 prose-pre:my-6
  prose-pre:code:bg-transparent prose-pre:code:p-0 prose-pre:code:text-slate-100 prose-pre:code:border-0
  
  // Blockquotes
  prose-blockquote:border-l-4 prose-blockquote:border-[#5a73b5] prose-blockquote:bg-slate-50 prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:rounded-r prose-blockquote:my-6 prose-blockquote:shadow-sm
  prose-blockquote:p:last-child:mb-0 prose-blockquote:p:first-child:mt-0
  
  // Liste
  prose-ul:my-6 prose-ul:space-y-2 prose-ul:pl-5
  prose-ol:my-6 prose-ol:space-y-2 prose-ol:pl-0
  prose-li:text-gray-700 prose-li:leading-relaxed prose-li:my-1 prose-li:marker:text-[#5a73b5] prose-li:marker:font-semibold
  prose-ul:prose-ul:my-3 prose-ol:prose-ol:my-3 prose-li:prose-li:my-0.5
  
  // Tabelle
  prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:shadow-sm prose-table:border prose-table:border-gray-300 prose-table:rounded-lg prose-table:overflow-hidden
  prose-thead:bg-gray-100
  prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-th:text-sm prose-th:uppercase prose-th:tracking-wide
  prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-3 prose-td:text-gray-700
  prose-tbody:prose-tr:hover:bg-gray-50 prose-tbody:prose-tr:transition-colors
  
  // Separatori e media
  prose-hr:border-0 prose-hr:h-px prose-hr:bg-gradient-to-r prose-hr:from-transparent prose-hr:via-gray-300 prose-hr:to-transparent prose-hr:my-12
  prose-img:rounded-lg prose-img:shadow-md prose-img:my-8 prose-img:border prose-img:border-gray-200
  prose-video:rounded-lg prose-video:shadow-md prose-video:my-8
  prose-figure:my-8
  prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-600 prose-figcaption:mt-2 prose-figcaption:italic
  
  // Altri elementi
  prose-kbd:bg-gray-100 prose-kbd:border prose-kbd:border-gray-300 prose-kbd:rounded prose-kbd:px-2 prose-kbd:py-1 prose-kbd:text-xs prose-kbd:font-mono prose-kbd:shadow-sm
  prose-mark:bg-yellow-200 prose-mark:px-1 prose-mark:rounded
  prose-del:text-gray-500 prose-del:line-through
  prose-ins:text-green-700 prose-ins:underline prose-ins:decoration-green-500
  prose-sub:text-xs prose-sup:text-xs
  prose-abbr:border-b prose-abbr:border-dotted prose-abbr:border-gray-400 prose-abbr:cursor-help"
                  >
                    {Markdoc.renderers.react(renderable, React)}
                  </div>
                  <Link
                    href="/servizi"
                    className="bg-[#264193] hover:bg-[#5a73b5] ml-auto text-white font-semibold py-2 px-4 rounded transition"
                  >
                    Torna alla pagina dei servizi
                  </Link>
                </div>
              </article>
            </main>
          </div>
        </div>
        <Carosello
          data={otherPosts.map(({ slug, entry }) => ({
            id: entry.id,
            title: entry.title,
            description: entry.description,
            image: entry.image,
            slug: slug,
          }))}
        />
      </div>
    </>
  );
}
