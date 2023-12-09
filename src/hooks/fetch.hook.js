import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http:3001/";

export default function useFetch(query) {
  const [getData, setData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log("fff ")
      try {
        setData((prev) => ({ ...prev, isLoading: true }));


        const { data, status } = await axios.get(`/api/${query}`);

        if (status === 201) {
          setData((prev) => ({ ...prev, isLoading: false }));
          setData((prev) => ({ ...prev, apiData: data, status: status }));
        }

        setData((prev) => ({ ...prev, isLoading: false }));
      } catch (error) {
        setData((prev) => ({ ...prev, isLoading: false, serverError: error }));
      }
    };
    fetchData();


  }, [query]);

  return [getData, setData];
}