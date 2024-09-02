import React, { FC, ReactElement } from "react";
import Image from "next/image";
import fontStyles from "../styles/utils/fonts.module.scss";
import img1 from "../../public/Images/Hero/hero-cropped.jpg";
import styles from "./hero-component.module.scss";

const { heroWrapper, heroLeft, heroRight, heroLeftContent, heroLeftGradient } =
  styles;
const { cormorant, headingSizeBig } = fontStyles;

const Hero: FC = (): ReactElement => {
  return (
    <div className={`${heroWrapper} mt-8`}>
      <aside id="hero-left" className={`${heroLeft}`}>
        <div
          className={`${heroLeftContent} ${heroLeftGradient} shadow-xl rounded-lg`}
        >
          <div
            id="hero-heading-container"
            className={`flex flex-col gap-1 my-12 w-4/5 mx-auto text-center font-bold drop-shadow`}
          >
            <h2 className={`${cormorant} ${headingSizeBig}`}>We've</h2>
            <h2 className={`${cormorant} ${headingSizeBig}`}>got</h2>
            <h2 className={`${cormorant} ${headingSizeBig}`}>books</h2>
            <h2 className={`${cormorant} ${headingSizeBig}`}>for days...</h2>
          </div>
          <button className="btn btn-primary">Discount</button>
        </div>
      </aside>
      <aside id="hero-right" className={`${heroRight}`}>
        <div>
          <Image src={img1} alt="Hero Image" className="rounded-lg shadow-lg" />
        </div>
      </aside>
    </div>
  );
};

export default Hero;
