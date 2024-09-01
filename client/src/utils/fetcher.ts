"use client";
import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

export function fetcher() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const response: AxiosResponse = await axios.get<any>(
        "http://localhost:4444/genre/all",
      );
      if (response.status === 200) setData(response.data);
      console.log({ data });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}
