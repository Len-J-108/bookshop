import React, { FC, ReactElement } from "react";
import styles from "./logo.module.scss";

const SearchInputComponent: FC = (): ReactElement => {
  return (
    <div className="h-full flex justify-center items-center relative">
      {/* --NOTE: start genre list */}
      <div className="absolute left-0">
        <div tabIndex={0} role="button" className="btn m-1">
          All
        </div>
        <ul tabIndex={0} className="bg-base-100 rounded-box">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      {/* --NOTE: start genre list */}
      <input
        type="text"
        placeholder="Search"
        className="rounded-lg bg-neutral-200 text-neutral-800 placeholder:text-sm placeholder:ps-4 ps-4 pe-8"
      />
      <span
        className={`${styles.nerdSymbol} text-neutral-800 relative right-6`}
      >
        
      </span>
    </div>
  );
};

export default SearchInputComponent;
