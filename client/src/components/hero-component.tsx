import React, { FC } from "react";
import heroStyles from "../styles/components/hero.module.scss";
import fontStyles from "../styles/utils/fonts.module.scss";

const { image, left } = heroStyles;
const { logoFont, flexLetter, nerdSymbol, nerdHeavy, italicBrick } = fontStyles;

const Hero: FC = () => {
  return (
    <div className={`${image} w-3/5 h-72 flex absolute top-0 my-4`}>
      <aside
        className={`${left} self-start w-2/5 h-full bg-rose-200 opacity-80 flex flex-col justify-center text-orange-900 relative`}
      >
        <span
          className={`${logoFont} ${nerdSymbol} ${flexLetter} text-black absolute top-4 left-6 drop-shadow`}
        >
          󱄟
        </span>
        <div className="relative">
          <h5 className={`${italicBrick} absolute text-black`}>BUY A BIKE</h5>
          <h5 className={`${italicBrick} absolute text-red-800 left-1`}>
            BUY A BIKE
          </h5>
          <h5 className={`${italicBrick} absolute`}>BUY A BIKE</h5>
        </div>
      </aside>
    </div>
  );
};

export default Hero;
