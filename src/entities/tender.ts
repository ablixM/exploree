export interface Tender {
  id: string;
  title: string;
  issuingOrganization: string;
  description: string;
  category: string;
  publishedDate: Date;
  submissionDeadline: Date;
  contactPerson: string;
  contactEmail: string;
  bidDocumentLink?: string;
  budget?: string;
}
