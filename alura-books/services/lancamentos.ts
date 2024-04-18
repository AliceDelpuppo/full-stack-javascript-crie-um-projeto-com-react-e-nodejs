import { ProductDetails } from "$root/components/common/regular-shelf/RegularShelf.tsx";

export async function getLancamentos() {
  const url = "http://localhost:9000/lancamentos";

  const rawResult = await fetch(url, { method: "GET" });

  const result: ProductDetails[] = await rawResult.json();

  return result;
}
