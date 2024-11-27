export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[]; // List of job requirements
  employmentType: "Full-Time" | "Part-Time" | "Contract" | "Temporary";
  postedDate: Date;
  applicationDeadline: Date;
  salaryRange: string;
  contactEmail: string;
}
