import StoreLogo from "$root/components/common/logo/StoreLogo.tsx";
import Menu from "$root/components/common/header/Menu.tsx";
import Account from "$root/components/common/header/Account.tsx";
import { asset } from "$fresh/runtime.ts";
import SearchBar from "$root/islands/SearchBar.tsx";

export default function Header() {
  return (
    <header class="w-full h-32 relative z-[1]">
      <div
        class="py-4 shadow-md w-full h-32 fixed left-0 top-0"
        style="background-image: linear-gradient(90deg, #002F52 35%, #326589);"
      >
        <div class="max-w-7xl flex justify-center flex-col gap-4 mx-auto">
          <div class="flex justify-between">
            <StoreLogo />

            <div class="flex items-center gap-5">
              <SearchBar />
              <Account />
              {/* Carrinho */}
              <div>
                <img src={asset("/images/sacola.svg")} alt="sacola" />
              </div>
            </div>
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
}
