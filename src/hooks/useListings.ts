import listings from "../data/lists.ts";
import { useQuery } from "@tanstack/react-query";
import { APIClient, FetchResponse } from "../services/api-client";
import ms from "ms";
import type { List } from "../entities/list";

const apiClient = new APIClient<List>("/lists");

const useListings = () => {
  return useQuery<FetchResponse<List>, Error>({
    queryKey: ["lists"],
    queryFn: () => apiClient.getAll({}),
    staleTime: ms("24h"),
    initialData: listings,
  });
};

export default useListings;
