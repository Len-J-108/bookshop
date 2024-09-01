import React, { FC } from "react";
import styles from "./logo.module.scss";
import fontStyles from "../styles/utils/fonts.module.scss";

const LogoComponent: FC = () => {
  const { logoFont, nerdSymbol } = styles;
  const { cormorant } = fontStyles;
  const flexLetter = "flex flex-row items-center";
  return (
    <div className="w-48 flex flex-row justify-center items-center gap-3">
      <span className={`${logoFont} ${nerdSymbol} ${flexLetter} text-cyan-300`}>
        
      </span>
      <span className={`${cormorant}`}>Bookstore</span>
    </div>
  );
};
export default LogoComponent;
