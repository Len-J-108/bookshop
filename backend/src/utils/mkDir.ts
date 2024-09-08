import fs from "fs";

export const mkDir = (dirName: string, path: string): string => {
  fs.mkdir(`${path}${dirName}`, (err) => {
    if (err) throw err;
  });
  return dirName;
};
