import React, { FC } from "react";
import cl from "../styles/components/logo.module.scss";
const LogoComponent: FC = () => {
  const { logoFont, nerdHeavy, nerdSymbol } = cl;
  const flexLetter = "flex flex-row items-center";
  return (
    <div className="w-48 flex flex-row justify-center items-center gap-3">
      <span className={`${logoFont} ${nerdSymbol} ${flexLetter} text-cyan-300`}>
        󱄟
      </span>
    </div>
  );
};
export default LogoComponent;
