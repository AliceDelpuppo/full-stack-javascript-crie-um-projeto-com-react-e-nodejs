import { deleteFavorito } from "$root/services/favoritos.ts";

interface Props {
  id: string;
}

export default function RemoveFavoritos({ id }: Props) {
  const handleFavorito = async () => {
    const value = await deleteFavorito(id);
    console.log("Status:", value);
  };

  return (
    <button
      class="bg-vermelho-200 text-vermelho-500 duration-100 rounded-md w-full h-10 hover:bg-vermelho-300 hover:text-vermelho-800"
      onClick={() => {
        handleFavorito();
      }}
    >
      Remover de favoritos
    </button>
  );
}
