"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormPost from "@/components/fragments/home/FormPost";
import ButtonFloating from "@/components/elements/AuthenticatedHome/ButtonFloating";
import Modal from "@/components/fragments/global/Modal";
const NewPostLayout = () => {
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
  return (
    <>
      <Modal onClose={() => setOpen(false)} open={open} title="Add Post">
        <FormPost closeModal={closeModal} />
      </Modal>
      <ButtonFloating onClick={handleCreatePost} />
    </>
  );
};

export default NewPostLayout;
