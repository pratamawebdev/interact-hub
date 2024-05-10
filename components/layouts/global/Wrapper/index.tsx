import React from "react";
import Container from "../Container";
import Title from "@/components/elements/global/Title";

const Wrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Wrapper;
