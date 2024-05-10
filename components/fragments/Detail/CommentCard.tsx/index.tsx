import Image from "next/image";
import React from "react";

interface CommentCardProps {
  avatar: string;
  username: string;
  email: string;
  content: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  avatar,
  username,
  email,
  content,
}) => {
  return (
    <div className="w-full p-2 bg-white shadow-lg mt-4 border border-gray-300 rounded-lg">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt="profile image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-black text-md">@{username}</span>
            <p className="text-gray-500 text-sm">{email}</p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-300" />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
