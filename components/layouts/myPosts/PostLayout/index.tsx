import PostCard from "@/components/fragments/home/PostCard";
import { getUserData } from "@/utils/clerk";
import { supabase } from "@/utils/supabase";
import { timeDiff } from "@/utils/timeDiff";

const PostLayout = async (): Promise<React.ReactElement> => {
  const { email } = await getUserData();

  const { data, error } = await supabase
    .from("post")
    .select()
    .order("created_at", { ascending: false })
    .eq("email", email);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {data?.map((post) => {
        const username = post.username || post.email.split("@")[0];
        const timeAgo = timeDiff(post.created_at);
        const likesCount = post.likes === null ? 0 : post.likes;
        const unlikesCount = post.unlikes === null ? 0 : post.unlikes;
        const commentsCount =
          post?.comments?.length === null ? 0 : post?.comments?.length;

        return (
          <PostCard
            key={post.id}
            post_id={post.id}
            avatar={
              post.avatar ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
            email={post.email}
            username={username}
            content={post.content}
            created_at={timeAgo}
            category={post.category}
            likes={likesCount}
            unlikes={unlikesCount}
            comments={commentsCount}
          />
        );
      })}
    </section>
  );
};

export default PostLayout;
