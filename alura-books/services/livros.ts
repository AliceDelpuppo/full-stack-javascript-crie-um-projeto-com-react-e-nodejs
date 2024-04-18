import { ProductDetails } from "$root/components/common/regular-shelf/RegularShelf.tsx";

export async function getBooks() {
  const url = "http://localhost:9000/livros";

  const rawResult = await fetch(url, { method: "GET" });

  const result: ProductDetails[] = await rawResult.json();

  return result;
}
