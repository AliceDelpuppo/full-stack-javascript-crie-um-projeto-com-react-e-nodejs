import RegularShelf from "$root/components/common/regular-shelf/RegularShelf.tsx";
import { asset } from "$fresh/runtime.ts";
import { getLancamentos } from "$root/services/lancamentos.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Logger from "$root/islands/Logger.tsx";

const livroImg = "images/livro.png";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const books = await getLancamentos();
    return ctx.render(books);
  },
};

export default function Home({ data }: PageProps) {
  return (
    <main class="flex items-center flex-col flex-grow">
      <RegularShelf productDetail={data} />
    </main>
  );
}
