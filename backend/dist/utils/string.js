export const searchQuery = function (str) {
    return str.split(" ").join("%20");
};
