import React, { FC } from "react";
import styles from "./logo.module.scss";
const LogoComponent: FC = () => {
  const { logoFont, nerdSymbol } = styles;
  const flexLetter = "flex flex-row items-center";
  return (
    <div className="w-48 flex flex-row justify-center items-center gap-3">
      <span className={`${logoFont} ${nerdSymbol} ${flexLetter} text-cyan-300`}>
        
      </span>
    </div>
  );
};
export default LogoComponent;
