import { createCommentAction } from "@/actions/createCommentAction";
import Button from "@/components/elements/global/Button";
import { useRouter } from "next/navigation";
import React from "react";

const FormComment = ({
  post_id,
  closeModal,
}: {
  post_id: number;
  closeModal: () => void;
}) => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      await createCommentAction(formData);
      router.refresh();
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-sm w-full max-w-full h-32"
          name="content"
        ></textarea>
        <input type="hidden" name="post_id" value={post_id} className="" />
        <div className="flex gap-2 justify-end items-center">
          <Button className="bg-red-500 px-2 rounded-lg text-white py-1 font-semibold">
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-[#1D9BF0] px-2 rounded-lg text-white py-1 font-semibold"
          >
            Create Now
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormComment;
