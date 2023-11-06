import { useEffect, useState } from "react";

export const useFetch = (endpoint, shouldMakeRequest = true) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (shouldMakeRequest) {
      fetch(endpoint)
        .then((response) => response.json())
        .then((response) => setData(response))

        .catch((err) => console.log(err));
    }
  }, [shouldMakeRequest, endpoint]);

  return { data };
};