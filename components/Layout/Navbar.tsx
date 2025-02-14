import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[50px] sm:h-[60px] border-neutral-300 py-2 px-2 sm:px-8 items-center justify-between navbar-top">
      <div className="font-bold text-3xl flex items-center site-branding">
        <a
          className="ml-2 hover:opacity-50"
          href="https://code-scaffold.vercel.app"
        >
          ChatTHC.ai
        </a>
      </div>
    </div>
  );
};
