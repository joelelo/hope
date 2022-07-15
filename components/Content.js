import React from "react";

const Content = ({ head, con }) => {
  return (
    <div className="  text-vin2 sm:px-10 lg:px-60">
      <div className="mx-10 mb-10 w-auto border-b-4 border-vin2 pt-20  font-serif text-5xl font-normal lg:mx-0">
        {head}
      </div>
      <div className="flex flex-col px-10 text-2xl lg:flex-row ">{con}</div>
    </div>
  );
};

export default Content;
