import React from "react";
import Container from "../Container";
import Title from "@/components/elements/global/Title";

const Wrapper = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Wrapper;
