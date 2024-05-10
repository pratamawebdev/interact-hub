import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-4 relative py-8 sm:px-8 max-w-[1440px] w-full mx-auto">
      {children}
    </section>
  );
};

export default Container;
