import { asset } from "$fresh/runtime.ts";
import Icon from "$root/components/common/icon/Icon.tsx";

export default function Account() {
  return (
    <div>
      <a href="#" class="w-10">
        {/* <Icon id={"user"} /> */}
        <img src={asset("/images/perfil.svg")} alt="login" />
      </a>
    </div>
  );
}
