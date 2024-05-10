import React from "react";
import Wrapper from "../global/Wrapper";
import PostCard from "@/components/fragments/Detail/PostCard";
import { supabase } from "@/utils/supabase";
import { timeDiff } from "@/utils/timeDiff";
import { Comment } from "../../../types/index";

const PostDetail = async ({ params }: { params: { post_id: number } }) => {
  const { data, error } = await supabase
    .from("post")
    .select()
    .eq("id", params.post_id)
    .single();

  console.log(data);

  const likesCount = data.likes === null ? 0 : data.likes;
  const unlikesCount = data.unlikes === null ? 0 : data.unlikes;

  const commentsCount =
    data?.comments?.length === null ? 0 : data?.comments?.length;
  const timeAgo = timeDiff(data.created_at);

  const username = data.username || data.email.split("@")[0];
  return (
    <Wrapper title={`Post with id "${params.post_id}"`}>
      <PostCard
        avatar={data.avatar}
        username={username}
        email={data.email}
        content={data.content}
        category={data.category}
        likes={likesCount}
        unlikes={unlikesCount}
        comments={data.comments}
        created_at={timeAgo}
        post_id={data.id}
      />
    </Wrapper>
  );
};

export default PostDetail;
