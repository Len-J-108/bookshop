import React, { FC, ReactElement } from "react";
import getStuff from "@/utils/fetchFromBE";
import GenreSingle from "./genre-single-component";

const url: string = "/genre/all";

interface EE {
  allGenres: string[];
}

const Genres: FC = async (): Promise<ReactElement> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await getStuff<EE>(url);

  return (
    <ul className="absolute top-1 flex gap-1">
      {data.allGenres.map((genre: string, i: number) => {
        return <GenreSingle genre={genre} />;
      })}
    </ul>
  );
};

export default Genres;
