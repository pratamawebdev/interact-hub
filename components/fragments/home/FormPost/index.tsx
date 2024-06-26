import { createPostAction } from "@/actions/createPostAction";
import Button from "@/components/elements/global/Button";
import Select from "@/components/elements/global/Select";
import { categoriesItems } from "@/data";
import { useRouter } from "next/navigation";
import React from "react";

const FormPost = ({ closeModal }: { closeModal: () => void }) => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await createPostAction(formData);
      router.refresh();
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-sm w-full max-w-full h-32"
          name="content"
        ></textarea>
        <Select
          name="category"
          optionDisabledText={"Select category"}
          dataOptions={categoriesItems as Array<any>}
          classname={"select select-sm select-bordered bordered w-full"}
        />
        <div className="flex gap-2 justify-end items-center">
          <Button
            type="button"
            onClick={handleCancel as any}
            className="bg-red-500 px-2 rounded-lg text-white py-1 font-semibold"
          >
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

export default FormPost;
