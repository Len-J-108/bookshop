export const searchQuery = function (str: string): string {
  return str.split(" ").join("%20");
};
