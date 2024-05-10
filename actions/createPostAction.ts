"use server";

import { Post } from "@/types";
import { getUserData } from "@/utils/clerk";
import { supabase } from "@/utils/supabase";

export const createPostAction = async (formData: FormData): Promise<void> => {
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const { email, username, avatar } = await getUserData();

  const data: Post = { content, email, username, avatar, category };

  await supabase.from("post").insert(data);
};
