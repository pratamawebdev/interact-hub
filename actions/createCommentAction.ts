"use server";

import { Comment } from "@/types";
import { getUserData } from "@/utils/clerk";
import { supabase } from "@/utils/supabase";
import { randomUUID } from "crypto";

export const createCommentAction = async (formData: FormData) => {
  const content = formData.get("content") as string;
  const post_id = formData.get("post_id");
  const comment_id = randomUUID();

  const { avatar, email, username } = await getUserData();
  const getCategory = await supabase
    .from("post")
    .select("category")
    .eq("id", post_id)
    .single();

  const data: Comment = {
    comment_id,
    avatar,
    email,
    username,
    content,
    category: getCategory?.data?.category,
    created_at: new Date().toISOString(),
  };

  const getComment = await supabase
    .from("post")
    .select("comments")
    .eq("id", post_id)
    .single();

  const existingComments: Array<Comment> = getComment?.data?.comments || [];

  const newComments = [...existingComments, data];

  await supabase
    .from("post")
    .update({ comments: newComments })
    .eq("id", post_id);
};
