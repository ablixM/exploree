import { create } from "zustand";
import { Job } from "../entities/job.ts";

// Define the filter state interface for jobs
interface JobFilterState {
  jobs: Job[];
  filteredJobs: Job[];
  searchText: string;
  location: string;
  employmentType: string;
  minSalary: number | null;
  maxSalary: number | null;
  setJobs: (jobs: Job[]) => void;
  setSearchText: (searchText: string) => void;
  setLocation: (location: string) => void;
  setEmploymentType: (employmentType: string) => void;
  setMinSalary: (minSalary: number | null) => void;
  setMaxSalary: (maxSalary: number | null) => void;
  applyFilters: () => void;
}

// Create the Zustand store
const useJobFilterStore = create<JobFilterState>((set, get) => ({
  jobs: [],
  filteredJobs: [],
  searchText: "",
  location: "",
  employmentType: "",
  minSalary: null,
  maxSalary: null,

  setJobs: (jobs) => set({ jobs, filteredJobs: jobs }),
  setSearchText: (searchText) => set({ searchText }),
  setLocation: (location) => set({ location }),
  setEmploymentType: (employmentType) => set({ employmentType }),
  setMinSalary: (minSalary) => set({ minSalary }),
  setMaxSalary: (maxSalary) => set({ maxSalary }),

  applyFilters: () => {
    const { jobs, searchText, location, employmentType, minSalary, maxSalary } =
      get();

    const filteredJobs = jobs.filter((job) => {
      const matchesSearchText =
        job.title.toLowerCase().includes(searchText.toLowerCase()) ||
        job.company.toLowerCase().includes(searchText.toLowerCase());
      const matchesLocation = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesEmploymentType = employmentType
        ? job.employmentType === employmentType
        : true;
      const matchesSalary =
        (minSalary !== null
          ? parseInt(
              job.salaryRange.split("-")[0].replace(/[^0-9]/g, ""),
              10,
            ) >= minSalary
          : true) &&
        (maxSalary !== null
          ? parseInt(
              job.salaryRange.split("-")[1].replace(/[^0-9]/g, ""),
              10,
            ) <= maxSalary
          : true);

      return (
        matchesSearchText &&
        matchesLocation &&
        matchesEmploymentType &&
        matchesSalary
      );
    });

    set({ filteredJobs });
  },
}));

export default useJobFilterStore;
