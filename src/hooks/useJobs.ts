import ms from "ms";
import useListQueryStore from "../store/useJobQueryStore.ts";
import { APIClient, FetchResponse } from "../services/api-client.ts";
import { Job } from "../entities/job.ts";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Job>("/jobs");

const useListing = () => {
  const jobQuery = useListQueryStore((s) => s.jobQuery);

  return useQuery<FetchResponse<Job>, Error>({
    queryKey: ["all", jobQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          search: jobQuery.searchText,
          location: jobQuery.location,
          employmentType: jobQuery.employmentType,
          minSalary: jobQuery.minSalary,
          maxSalary: jobQuery.maxSalary,
        },
      }),
    staleTime: ms("24h"),
  });
};

export default useListing;
