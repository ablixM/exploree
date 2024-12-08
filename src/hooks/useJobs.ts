import ms from "ms";
import useListQueryStore from "../store/useJobQueryStore.ts";
import { APIClient } from "../services/api-client.ts";
import { Job } from "../entities/job";
import { useQuery } from "@tanstack/react-query";
import { jobs } from "../data/jobs.ts";

interface JobResponse {
  results: Job[];
}

const apiClient = new APIClient<JobResponse>("/jobs");

const useJobs = () => {
  const jobQuery = useListQueryStore((s) => s.jobQuery);

  return useQuery<JobResponse, Error>({
    queryKey: ["jobs", jobQuery] as const,
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
    initialData: { results: jobs },
  });
};

export default useJobs;
