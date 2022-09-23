export interface UserProps {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<IUserData>;
}

export type IUserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
