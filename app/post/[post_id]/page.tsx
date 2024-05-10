import PostDetail from "@/components/layouts/Detail/PostDetail";
import React from "react";

const page = ({ params }: { params: { post_id: number } }) => {
  return (
    <main>
      <PostDetail params={{ post_id: params.post_id }} />
    </main>
  );
};

export default page;
