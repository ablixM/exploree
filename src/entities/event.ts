export interface Event {
  id: string;
  name: string;
  organizer: string;
  location: string;
  date: Date;
  time: string;
  description: string;
  speakers?: string[];
  registrationLink?: string;
  capacity?: number;
}
