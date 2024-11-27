export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  eligibilityCriteria: string[];
  type: "Scholarship" | "Grant" | "Internship" | "Fellowship";
  startDate?: Date;
  endDate?: Date;
  applicationDeadline: Date;
  websiteUrl?: string;
}
