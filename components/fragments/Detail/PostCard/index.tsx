"use client";

import Button from "@/components/elements/global/Button";
import Image from "next/image";
import React, { useState } from "react";
import FormComment from "../FormComment";
import Modal from "../../global/Modal";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CommentCard from "../CommentCard.tsx";
import { Post } from "@/types";

const PostCard = ({
  avatar,
  username,
  email,
  content,
  category,
  likes,
  unlikes,
  comments,
  created_at,
  post_id,
}: Post) => {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useUser();
  const route = useRouter();

  const closeModal = () => setOpen(false);

  const openModal = () => setOpen(true);

  const handleCreatePost = () => {
    if (!isSignedIn) {
      route.push("/sign-in");
    } else {
      openModal();
    }
  };

  console.log(comments);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-2 max-h-[520px] ">
        <div className="col-span-2 flex flex-col gap-4 p-2 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-12 rounded-md">
                <Image
                  src={
                    avatar ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                  alt="profile image"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-black text-lg">
                  @{username}
                </span>
                <p className="text-gray-500 text-sm">{email}</p>
              </div>
            </div>
            <span className="px-3 py-1 hidden sm:block border-[#1D9BF0] border-2 text-[#1D9BF0] font-medium text-sm rounded-2xl">
              {category}
            </span>
          </div>
          <p className="text-black text-lg  min-h-96 max-h-[400px] overflow-y-auto">
            {content}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-[2px]">
                <span className="text-md text-gray-500">{likes}</span>
                <Image
                  src={"../images/handthumbup.svg"}
                  alt="icon handthumbup"
                  width={20}
                  height={20}
                />
              </span>
              <span className="flex items-center gap-[2px]">
                <span className="text-md text-gray-500">{unlikes}</span>
                <Image
                  src={"../images/handthumbdown.svg"}
                  alt="icon handthumbdown"
                  width={20}
                  height={20}
                />
              </span>
              <span className="flex items-center gap-[2px]">
                {/* <span className="text-md text-gray-500">{comments}</span> */}
                <Image
                  src={"../images/chatbubbleleftellipsis.svg"}
                  alt="icon chatbubbleleftellipsis"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <span className="text-gray-500 hidden sm:block text-sm font-normal">
              {created_at}
            </span>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4 p-2 border border-gray-200 rounded-lg ">
          <div className="rounded-lg bg-[#1D9BF0] px-2 py-3 text-white flex items-center justify-between font-bold">
            All Comments
            <Button
              onClick={handleCreatePost}
              className="font-semibold bg-white text-[#1D9BF0] text-sm px-2 rounded-lg"
            >
              Add New
            </Button>
          </div>
          <div className="flex flex-col items-center gap-px max-h-[400px] overflow-y-auto">
            {comments ? (
              comments?.map((comment) => {
                const usernameComment =
                  comment?.username || comment?.email?.split("@")[0];
                return (
                  <CommentCard
                    key={comment.comment_id}
                    avatar={comment.avatar as string}
                    username={usernameComment as string}
                    email={comment.email as string}
                    content={comment.content}
                  />
                );
              })
            ) : (
              <p>No comments yet</p>
            )}
          </div>
        </div>
      </div>
      <Modal onClose={() => setOpen(false)} open={open} title="Add Post">
        <FormComment post_id={post_id as number} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default PostCard;
