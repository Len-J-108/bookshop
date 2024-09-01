"use client";
import { useState, useEffect } from "react";
// import axios from 'axios';
import axios, { AxiosResponse, AxiosError } from "axios";

// export const url: string = "http://localhost:4444";

//   baseURL: url,
//   timeout: 5000,
//   headers: {
//     ContentType: "program/json",
//     // Add all custom headers here
//   },
// });

interface Response<T> {
  data: T;
}

function useFetch<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response: AxiosResponse = await axios.get<Response<T>>(endpoint);
        setData(response.data.data);
        console.log({ data });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

export default useFetch;
