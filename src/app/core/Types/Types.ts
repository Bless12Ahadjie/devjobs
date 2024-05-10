export interface Job {
  id?: number;
  company?: string;
  logo?: string;
  logoBackground?: string;
  position?: string;
  postedAt?: string;
  contract?: string;
  location?: string;
  website?: string;
  apply?: string;
  description?: string;
  requirements?: {
    content: string;
    items: Array<string>;
  };
  role?: {
    content: string;
    items: Array<string>;
  };
}
