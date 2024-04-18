interface Menu {
  label: string;
  url: string;
  children?: Menu[];
}

const MENU: Menu[] = [
  {
    label: "CATEGORIAS",
    url: "#",
    children: [
      { label: "Livros de terror", url: "#" },
      { label: "Livros de romance", url: "#" },
    ],
  },
  { label: "MINHA ESTANTE", url: "#" },
  { label: "FAVORITOS", url: "/favoritos" },
];

export default function Menu() {
  return (
    <div class="flex items-center justify-center gap-5">
      {MENU.map((item) => {
        const { label, url, children } = item;
        return (
          <div class="group relative">
            <div class="list-none h-10 flex items-center justify-center">
              <a href={url} class="font-bold flex items-center text-white">
                {label}
              </a>
            </div>

            {children && (
              <div class="hidden group-hover:block absolute left-1/2 top-10 -translate-x-1/2 bg-white shadow-sm">
                {children.map((subItem) => {
                  const { label, url } = subItem;

                  return (
                    <a
                      href={url}
                      class="font-normal text-sm p-2 hover:bg-cinza-100 flex items-center whitespace-nowrap"
                    >
                      <p>{label}</p>
                    </a>
                  );
                })}
                <a
                  href={url}
                  class="font-semibold text-sm underline p-2 flex items-center hover:bg-cinza-100"
                >
                  <p>Ver todos</p>
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
