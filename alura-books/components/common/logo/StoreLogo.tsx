import { asset } from "$fresh/runtime.ts";
import { JSX } from "preact/jsx-runtime";

type Props = JSX.IntrinsicElements["img"] & {
  storeLogo?: string;
  alt?: string;
  href?: string;
};

const StoreLogo = (
  { storeLogo = "/logo.svg", alt = "logo", href = "/", ...otherProps }: Props,
) => {
  const logo = asset(storeLogo);

  return (
    <a href={href} class="flex items-center gap-5">
      <img src={logo} alt={alt} {...otherProps} />
      <p class="text-3xl text-white">
        <strong>Alura</strong> <span>Books</span>
      </p>
    </a>
  );
};

export default StoreLogo;
