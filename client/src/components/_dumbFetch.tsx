"use client";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";

const Dumb: FC = () => {
  const [data, setData] = useState<any | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:4444/genre/all")
      .then((response) => {
        const { data } = response;
        setData(data.allGenres);
      })
      .catch(() => {
        console.log("could not fetch");
      });
  }, []);
  if (data)
    return (
      <div>
        {data.map((x: string, i: any) => {
          return <p key={i}>{x}</p>;
        })}
      </div>
    );
  else return <div>coult not fetch</div>;
};

export default Dumb;
