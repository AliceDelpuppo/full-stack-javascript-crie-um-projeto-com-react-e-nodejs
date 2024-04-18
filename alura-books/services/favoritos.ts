import { ProductDetails } from "$root/components/common/regular-shelf/RegularShelf.tsx";

export async function getFavoritos() {
  const url = "http://localhost:9000/favoritos";

  const rawResult = await fetch(url, { method: "GET" });

  const result: ProductDetails[] = await rawResult.json();

  return result;
}

export async function deleteFavorito(id: string) {
  const url = `http://localhost:9000/favoritos/${id}`;

  const rawResult = await fetch(url, { method: "DELETE" });

  const result = await rawResult.text();

  return result;
}

export async function insertNewFavorito(id: string) {
  const url = `http://localhost:9000/favoritos/${id}`;

  const rawResult = await fetch(url, { method: "POST" });

  const result = await rawResult.text();

  return result;
}
