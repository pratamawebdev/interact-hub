import React from "react";

interface Option {
  id: string;
  value: string;
  label: string;
}

interface SelectProps {
  optionDisabledText: string;
  dataOptions: Option[];
  classname?: string;
  name: string;
}

const Select: React.FC<SelectProps> = ({
  optionDisabledText,
  dataOptions,
  classname,
  name,
}) => {
  return (
    <select name={name} defaultValue={""} className={` ${classname}`}>
      <option value="" disabled>
        {optionDisabledText}
      </option>
      {dataOptions.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
