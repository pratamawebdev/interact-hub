import React from "react";
import Wrapper from "../global/Wrapper";
import FormFilter from "@/components/fragments/home/FormFilter";
import Image from "next/image";
import PostLayout from "./PostLayout";
import NewPostLayout from "../global/NewPostLayout";

const HomeLayout = () => {
  return (
    <Wrapper title={"All user posts"}>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center justify-between gap-4 md:justify-center">
          <div className="hover:bg-blue-300 p-2 rounded-lg md:hidden">
            <Image
              src="./images/filter.svg"
              alt="filter icon"
              width={25}
              height={25}
              className="md:hidden"
            />
          </div>
          <FormFilter />
        </div>
      </div>
      <PostLayout />
      <NewPostLayout />
    </Wrapper>
  );
};

export default HomeLayout;
