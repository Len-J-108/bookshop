import React, { FC } from "react";
import cl from "../styles/components/logo.module.scss";

const SearchInputComponent: FC = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <input
        type="text"
        placeholder="Search"
        className="rounded-lg bg-neutral-200 text-neutral-800 placeholder:text-sm placeholder:ps-4 ps-4 pe-8"
      />
      <span className={`${cl.nerdSymbol} text-neutral-800 relative right-6`}>
        
      </span>
    </div>
  );
};

export default SearchInputComponent;
