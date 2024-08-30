import React, { FC } from "react";
// import { IGenres } from "@/utils/interfaces";
import useFetch from "@/utils/useFetch";

interface IGenres {
  genres: string[];
}

const url = "http://localhost:4444/genre/all";

const Genres: FC = () => {
  const { loading, error, data } = useFetch<IGenres>(url);

  if (data) {
    return (
      <div>
        {data.genres.map((x: string, i): any => {
          return (
            <p key={i} className="text-red text-3xl">
              {x}
            </p>
          );
        })}
      </div>
    );
  }
  return <div>Genres</div>;
};

export default Genres;
