import React, { FC, ReactElement } from "react";

interface IGenreSingleProps {
  genre: string;
}
const GenreSingle: FC<IGenreSingleProps> = ({ genre }): ReactElement => {
  return (
    <>
      <li className="hover: text-yellow-600">
        <a className="text-neutral-200 cursor-pointer hover:text-orange-500">
          {genre}
        </a>
      </li>
    </>
  );
};
export default GenreSingle;
