import React, { useState, useEffect } from "react";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    updateMyData(index, id, value);
  };
  return (
    <textarea
      className="h-24 w-full"
      rows="4"
      cols="20"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default EditableCell;
