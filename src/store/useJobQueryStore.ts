import { create } from "zustand";

// Interface for job query state
export interface JobQuery {
  searchText?: string;
  location?: string;
  employmentType?: "Full-Time" | "Part-Time" | "Contract" | "Internship";
  minSalary?: number;
  maxSalary?: number;
}

interface JobQueryStore {
  jobQuery: JobQuery;
  setSearchText: (searchText: string) => void;
  setLocation: (location: string) => void;
  setEmploymentType: (
    employmentType: "Full-Time" | "Part-Time" | "Contract" | "Internship",
  ) => void;
  setMinSalary: (minSalary: number) => void;
  setMaxSalary: (maxSalary: number) => void;
}

const useJobQueryStore = create<JobQueryStore>((set) => ({
  jobQuery: {},

  setSearchText: (searchText) => set(() => ({ jobQuery: { searchText } })),
  setLocation: (location) =>
    set((store) => ({ jobQuery: { ...store.jobQuery, location } })),
  setEmploymentType: (employmentType) =>
    set((store) => ({ jobQuery: { ...store.jobQuery, employmentType } })),
  setMinSalary: (minSalary) =>
    set((store) => ({ jobQuery: { ...store.jobQuery, minSalary } })),
  setMaxSalary: (maxSalary) =>
    set((store) => ({ jobQuery: { ...store.jobQuery, maxSalary } })),
}));

export default useJobQueryStore;
