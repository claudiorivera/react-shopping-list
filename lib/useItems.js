import useSWR from "swr";
import fetcher from "./fetcher";

const useItems = () => {
  const { data, error } = useSWR("/api/items", fetcher);
  return {
    items: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useItems;
