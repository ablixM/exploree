import listings from "../data/lists.ts";
import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import ms from "ms";
import type { ListResponse } from "../entities/list";

const apiClient = new APIClient<ListResponse>("/lists");

const useListings = () => {
  return useQuery<ListResponse>({
    queryKey: ["lists"] as const,
    queryFn: () => apiClient.getAll,
    staleTime: ms("24h"),
    initialData: listings,
  });
};

export default useListings;
