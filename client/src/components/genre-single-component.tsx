import React, { FC, ReactElement } from "react";

interface IGenreSingleProps {
  genre: string;
}
const GenreSingle: FC<IGenreSingleProps> = ({ genre }): ReactElement => {
  return (
    <>
      <button className="bg-blue-700 text-white py-1 px-6 rounded-b-md hover:text-orange-300 hover:underline underline-offset-2">
        {genre}
      </button>
    </>
  );
};
export default GenreSingle;
