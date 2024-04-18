import { asset } from "$fresh/runtime.ts";
import AdicionaFavoritos from "$root/islands/AdicionaFavoritos.tsx";

interface Props {
  title?: string;
  productDetail: ProductDetails[];
}

export interface ProductDetails {
  url: string;
  srcImg: string;
  name: string;
  id: string;
}

export default function RegularShelf(
  { title = "Lançamentos", productDetail }: Props,
) {
  return (
    <section class="py-8">
      <div class="mx-auto max-w-7xl flex flex-col gap-5 bg-white p-4">
        <h1 class="text-3xl text-center font-bold uppercase">{title}</h1>
        <div class="w-full overflow-x-auto">
          <div class="flex gap-3 mb-3">
            {productDetail.map((product) => {
              const { url, name, srcImg, id } = product;
              const img = asset(srcImg);

              return (
                <div class="flex-none w-[calc(100%/5)] p-4 border border-cinza-100">
                  <a
                    href={url}
                    class="flex flex-col items-center gap-4 "
                  >
                    <img src={img} alt={name} class="w-full h-auto" />
                    <p class="flex justify-start w-full">{name}</p>
                  </a>
                  <AdicionaFavoritos id={id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
