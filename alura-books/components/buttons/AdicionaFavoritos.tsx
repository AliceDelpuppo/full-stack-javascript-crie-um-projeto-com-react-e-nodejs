import { insertNewFavorito } from "$root/services/favoritos.ts";

interface Props {
  id: string;
}

export default function AdicionaFavoritos({ id }: Props) {
  const handleFavorito = async () => {
    const value = await insertNewFavorito(id);
    console.log("Status:", value);
  };

  return (
    <button
      class="bg-verde-200 text-verde-800 duration-100 rounded-md w-full h-10 hover:bg-verde-500"
      onClick={() => {
        handleFavorito();
      }}
    >
      Adicionar aos Favoritos
    </button>
  );
}
