import { Handlers, PageProps } from "$fresh/server.ts";
import { getFavoritos } from "$root/services/favoritos.ts";
import { ProductDetails } from "$root/components/common/regular-shelf/RegularShelf.tsx";
import { asset } from "$fresh/runtime.ts";
import RemoveFavoritos from "$root/islands/RemoveFavoritos.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const books = await getFavoritos();
    return ctx.render(books);
  },
};

export default function Favoritos({ data }: PageProps) {
  return (
    <main class="flex items-center flex-col flex-grow my-10">
      <div class="flex mx-auto max-w-7xl flex-col">
        <h1 class="text-3xl  mb-4 uppercase text-center font-bold">
          Favoritos
        </h1>
        <div class="grid grid-cols-5 gap-4  bg-white py-5">
          {data.map((livro: ProductDetails) => {
            const { url, name, srcImg, id } = livro;
            const img = asset(srcImg);

            return (
              <a
                href={url}
                class="flex flex-col items-center gap-4 border border-cinza-100 p-2"
              >
                <img src={img} alt={name} class="w-full h-auto" />
                <p class="flex justify-start w-full">{name}</p>

                <RemoveFavoritos id={id} />
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
