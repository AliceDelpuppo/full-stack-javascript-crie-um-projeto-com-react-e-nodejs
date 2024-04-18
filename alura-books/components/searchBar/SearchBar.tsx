import Icon from "$root/components/common/icon/Icon.tsx";
import { useSignal } from "@preact/signals";
import { asset } from "$fresh/runtime.ts";
import Logger from "$root/islands/Logger.tsx";

interface Props {
  placeholder?: string;
}

const livroImg = "images/livro.png";

interface Livros {
  name: string;
  id: number;
  srcImg: string;
  url: string;
}

const LIVROS: Livros[] = [
  { name: "Liderança em Design", id: 1, srcImg: asset(livroImg), url: "#" },
  { name: "JavaScript Assertivo", id: 2, srcImg: asset(livroImg), url: "#" },
  {
    name: "Cangaceiro em JavaScript",
    id: 3,
    srcImg: asset(livroImg),
    url: "#",
  },
  { name: "Aventureiros do Java", id: 4, srcImg: asset(livroImg), url: "#" },
];

export default function SearchBar(
  { placeholder = "O que você procura?" }: Props,
) {
  const inputValue = useSignal("");
  const livrosResult = useSignal<Array<Livros>>([]);

  return (
    <div class="relative">
      <div>
        <input
          type="text"
          placeholder={placeholder}
          class="h-10 border border-cinza-300 px-4 pr-10"
          value={inputValue.value}
          onInput={(event) => {
            const target = event.target as HTMLInputElement;
            if (!target) return;

            inputValue.value = target.value;

            livrosResult.value = LIVROS.filter((livro) => {
              return livro.name.toLowerCase().includes(
                inputValue.value.toLowerCase(),
              );
            });

            // console.log("target", target.value);
            // console.log("livrosResult.value", livrosResult.value);
          }}
        />
        <button
          class="absolute right-2 top-2"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <Icon id="lupa" class="text-preto" />
        </button>
      </div>

      <div class="absolute left-0 top-10 bg-white shadow-sm w-full">
        {inputValue.value !== "" && livrosResult.value.map((livro) => {
          const { id, name, srcImg, url } = livro;
          return (
            <a href={url} class="flex gap-2 text-sm p-3 hover:bg-cinza-100">
              <img src={srcImg} alt="livro" class="w-12" />
              <div class="flex flex-col gap-1">
                <p class="font-semibold">{name}</p>
                <p>
                  <strong>Id:</strong> <span>{id}</span>
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
