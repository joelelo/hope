import React from "react";

const Content = ({ head, con }) => {
  return (
    <div className="basis-1/2  text-vin2  sm:px-10">
      <div className="mx-10 mb-10 mt-20 w-auto rounded-md border-b-4  border-vin2 bg-white p-2 font-serif  text-5xl lg:mx-0">
        {head}
      </div>
      <div className="lg: mb-10 flex flex-col px-10 text-2xl">{con}</div>
    </div>
  );
};

export default Content;
