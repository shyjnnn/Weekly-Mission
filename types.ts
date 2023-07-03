export interface User {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
}

export interface Link {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source: string | null;
  folder_id: number | null;
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
}

export interface Children {
  children: React.ReactNode;
}
