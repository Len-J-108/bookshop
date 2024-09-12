"use server";
import React, { FC, ReactElement } from "react";
import getStuff from "@/utils/fetchFromBE";
import GenreSingle from "./genre-single-component";

const url: string = "/genre/all";

interface EE {
  allGenres: string[];
}

const Genres: FC = async (): Promise<ReactElement> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await getStuff<EE>(url);

  return (
    <ul className="w-full absolute top-0 menu-sm menu-vertical lg:menu-horizontal bg-base-100 flex justify-center">
      {data.allGenres.map((genre: string, i: number) => {
        return <GenreSingle genre={genre} />;
      })}
    </ul>
  );
};

export default Genres;
