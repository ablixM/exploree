import ms from "ms";
import useListQueryStore from "../store/useJobQueryStore.ts";
import { APIClient, FetchResponse } from "../services/api-client.ts";
import { Job } from "../entities/job.ts";
import { useQuery } from "@tanstack/react-query";
import jobs from "../data/jobs.ts";

const apiClient = new APIClient<Job>("/jobs");

const useListing = () => {
  const jobQuery = useListQueryStore((s) => s.jobQuery);

  return useQuery<FetchResponse<Job>, Error>({
    queryKey: ["jobs", jobQuery],
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
    initialData: jobs as FetchResponse<Job>,
  });
};

export default useListing;
