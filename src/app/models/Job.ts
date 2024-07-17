export interface Job {
  id: number;
  name: string;
  duration: string; // This should be a string representing the duration in ISO-8601 format
  status: string;
  createdAt: string; // This should be a string representing the creation date
}
  