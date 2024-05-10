import Search from "@/components/elements/global/Search";
import Select from "@/components/elements/global/Select";
import { categoriesItems } from "@/data";
import React from "react";

const FormFilter = () => {
  return (
    <form className="w-full md:w-fit flex items-center gap-4">
      <Select
        classname={"hidden md:select md:select-sm select-bordered  w-fit"}
        optionDisabledText={"Sort by"}
        dataOptions={categoriesItems}
      />
      <Select
        classname={"hidden md:select md:select-sm select-bordered w-fit"}
        optionDisabledText={"Sort by"}
        dataOptions={categoriesItems}
      />
      <Search />
    </form>
  );
};

export default FormFilter;
