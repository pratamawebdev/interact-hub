import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({
  avatar,
  username,
  email,
  content,
  created_at,
  category,
  unlikes,
  likes,
  comments,
  post_id,
}: Post) => {
  const isHashtagPresent = (text: string) => {
    return /\B#\w*[a-zA-Z]+\w*/.test(text);
  };

  const renderContent = (text: string) => {
    return (
      <span>
        {text.split(/(\B#\w*[a-zA-Z]+\w*)/).map((part, index) => {
          if (isHashtagPresent(part)) {
            return (
              <span key={index} className="text-[#1D9BF0]">
                {part}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </span>
    );
  };

  return (
    <Link
      href={`/post/${post_id}`}
      className="bg-white shadow-md p-8 md:p-4 rounded-md hover:shadow-2xl transition hover:scale-105"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="relative min-w-10 w-10 h-10">
            <Image
              src={
                avatar ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }
              alt="profile image"
              fill
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="text-sm font-semibold text-black flex items-center justify-between w-full ">
              @{username}
              <span className="text-gray-500 hidden sm:block text-xs font-normal">
                {created_at}
              </span>
            </div>
            <span className="text-xs text-gray-500">{email}</span>
          </div>
        </div>
        <div className="w-full h-[1.5px] bg-gray-300" />
        <p className="text-black text-xs h-24">{renderContent(content)}</p>
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
              <span className="text-md text-gray-500">{comments?.length}</span>
              <Image
                src={"../images/chatbubbleleftellipsis.svg"}
                alt="icon chatbubbleleftellipsis"
                width={20}
                height={20}
              />
            </span>
          </div>
          <span className="px-3 py-1 hidden sm:block border-[#1D9BF0] border-2 text-[#1D9BF0] font-medium text-sm rounded-2xl">
            {category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
