import axios, { AxiosResponse } from "axios";

const API = axios.create({
  baseURL: "http://localhost:4444",
  timeout: 5000,
  headers: {
    ContentType: "program/json",
    // Add all custom headers here
  },
});

interface APIResponse<T> {
  data: T;
  status: number;
}

const getStuff = async <T,>(address: string): Promise<T | undefined> => {
  const response: AxiosResponse<T> = await API.get<T>(address);
  const { data } = response;
  if (response.status === 200) {
    return data;
  }
};

export default getStuff;
// ----------------------------
//
// const getStuff = async <T>(address: string): Promise<T | undefined> => {
//   const response: AxiosResponse<T> = await API.get<T>(address);
//   const { data } = response;
//   if (response.status === 200) {
//     return data;
//   }
// };
