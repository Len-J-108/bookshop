import React, { FC, ReactElement } from "react";
import smiley from "../../public/Images/Hero/icons8-lol-100.png";
import Image from "next/image";

const SmileyBlur: FC = (): ReactElement => {
  return (
    <div className="w-96 relative flex items-center justify-center">
      <Image
        src={smiley}
        alt="smiley png"
        className="text-orange-500 blur-lg skew-x-12 absolute top-0 left-0 border-2 h-full w-full z-30"
      />
    </div>
  );
};

export default SmileyBlur;
