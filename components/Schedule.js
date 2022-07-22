import React from "react";

const Schedule = ({ schedule }) => {
  return (
    <div className="grid w-full grid-cols-8 rounded-md bg-vin2 p-3 text-center text-vin4">
      <div className="break-words bg-vin2 p-3 leading-none">Week</div>
      <div className="break-words bg-vin2 p-3 leading-none">Mon</div>
      <div className="break-words bg-vin2 p-3 leading-none">Tue</div>
      <div className="break-words bg-vin2 p-3 leading-none">Wed</div>
      <div className="break-words bg-vin2 p-3 leading-none">Thu</div>
      <div className="break-words bg-vin2 p-3 leading-none">Fri</div>
      <div className="break-words bg-vin2 p-3 leading-none">Sat</div>
      <div className="break-words bg-vin2 p-3 leading-none">Sun</div>
      {schedule.map((row) => {
        return row.schedule.map((block) => {
          return (
            <div
              key={block._id}
              className={
                block.span === "1"
                  ? "col-span-1 break-words  bg-vin2 p-1 align-middle"
                  : block.span === "2"
                  ? "col-span-2 break-words rounded-md bg-purple-400 p-1"
                  : block.span === "3"
                  ? "col-span-3 break-words rounded-md bg-blue-400 p-1"
                  : block.span === "4"
                  ? "col-span-4 break-words rounded-md bg-green-400 p-1"
                  : block.span === "5"
                  ? "col-span-5 break-words rounded-md bg-yellow-400 p-1"
                  : block.span === "6"
                  ? "col-span-6 break-words rounded-md bg-orange-400 p-1"
                  : "col-span-7 break-words rounded-md bg-red-400 p-1"
              }
            >
              {block.content}
            </div>
          );
        });
      })}
    </div>
  );
};

export default Schedule;
