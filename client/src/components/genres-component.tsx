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
    <ul className="absolute top-1 menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      {data.allGenres.map((genre: string, i: number) => {
        // return <GenreSingle genre={genre} />;
        return (
          <li>
            <a className="text-neutral-200">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};
{
  {
    /* <li><a>Item 1</a></li> */
  }
}
{
  /* <li><a>Item 2</a></li> */
}
{
  /* <li><a>Item 3</a></li> */
}
export default Genres;
