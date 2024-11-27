import listings from "../data/lists.ts";
import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import ms from "ms";
import list from "../entities/list";

const apiClient = new APIClient<list>("/lists");
const useListings = () => {
  return useQuery({
    queryKey: ["lists"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: listings,
  });
};

export default useListings;
