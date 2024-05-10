import { UUID } from "crypto";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface MenuItem {
  name: string;
  href: string;
  isPublic: boolean;
}

export interface Comment extends Post {
  comment_id: UUID;
}

export interface Post {
  post_id?: number;
  content: string;
  email: string | undefined;
  username?: string | null;
  avatar?: string | undefined | StaticImport;
  comments?: Array<Comment>;
  likes?: number;
  unlikes?: number;
  category: string | null;
  created_at?: any;
}

export interface User {
  email: string | undefined;
  username: string | undefined | null;
  avatar: string | undefined;
}
