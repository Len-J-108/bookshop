"use client";
import React, { FC, useEffect } from "react";
import { fetcher } from "@/utils/fetcher";

const url: string = "http://localhost:4444/genre/all";

const Genres = () => {
  const { loading, error, data, fetchData } = fetcher();

  useEffect(() => {
    fetchData();
  }, []);

  if (data) {
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
  }
  return <div>Genres</div>;
};

export default Genres;
