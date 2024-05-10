import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-center font-bold text-black text-xl">{children}</h1>
  );
};

export default Title;
