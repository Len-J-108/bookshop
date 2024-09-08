import fs from "fs";
export const mkDir = (dirName, path) => {
    fs.mkdir(`${path}${dirName}`, (err) => {
        if (err)
            throw err;
    });
    return dirName;
};
