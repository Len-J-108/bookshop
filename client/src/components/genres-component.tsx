import React, { FC } from "react";
import getStuff from "@/utils/fetchFromBE";

const url: string = "/genre/all";

interface EE {
  allGenres: string[];
}

const Genres: FC = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await getStuff<EE>(url);

  return (
    <div>
      {data.allGenres.map((x: string, i: number) => {
        return (
          <span key={i} className="px-2">
            {x}
          </span>
        );
      })}
    </div>
  );
};

export default Genres;
