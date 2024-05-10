import { SignIn } from "@clerk/nextjs";

import React from "react";

const page = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn path="/sign-in" />
    </div>
  );
};

export default page;
