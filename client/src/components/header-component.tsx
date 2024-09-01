import React, { FC, ReactElement } from "react";
import Link from "next/link";
import Logo from "./logo-component";
import Navigation from "./navigation-component";
import SearchInputComponent from "./search-component";

const HeaderComponent: FC = (): ReactElement => {
  return (
    <div
      id="header-wrapper"
      className="flex direction-row h-12 justify-between"
    >
      <Link href="/">
        <Logo />
      </Link>
      <SearchInputComponent />
      <Navigation />
    </div>
  );
};
export default HeaderComponent;
