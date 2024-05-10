import React from "react";

const Select = ({ optionDisabledText, dataOptions, classname, name }) => {
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
