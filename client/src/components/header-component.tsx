import React, { FC, ReactElement } from "react";
import Link from "next/link";
import Logo from "./logo-component";
import Navigation from "./navigation-component";
import SearchInputComponent from "./search-component";

const HeaderComponent: FC = (): ReactElement => {
  return (
    <div className="flex flex-row justify-center">
      <div
        id="header-wrapper"
        className="flex direction-row h-12 justify-between w-4/5"
      >
        <Link href="/">
          <Logo />
        </Link>
        <SearchInputComponent />
        <Navigation />
      </div>
    </div>
  );
};
export default HeaderComponent;
