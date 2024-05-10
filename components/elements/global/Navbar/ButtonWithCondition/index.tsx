import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

type ParamsProps = {
  isLoaded: boolean;
  isSignedIn: boolean;
  user: any;
};

const ButtonWithCondition: React.FC<ParamsProps> = ({
  isLoaded,
  isSignedIn,
  user,
}) => {
  if (!isLoaded) {
    return <div className="skeleton w-9 h-9 rounded-full shrink-0" />;
  }

  if (isSignedIn) {
    return user ? (
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: { userButtonAvatarBox: "w-9 h-9" },
        }}
      />
    ) : (
      <p>User</p>
    );
  } else {
    return <Link href="/sign-in">Sign In</Link>;
  }
};

export default ButtonWithCondition;
