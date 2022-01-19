import { useState, useEffect, useCallback } from "react";

// TODO: add typings for search result
export const useSearch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetch = useCallback(async (query: string) => {
    setLoading(true);
    // Mock call for now...
    const call = { data: [] };

    const { data } = call;

    setData(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch("");
  }, [fetch]);

  return { data, fetch, isLoading };
};
