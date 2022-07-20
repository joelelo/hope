import React from "react";

const Schedule = ({ schedule }) => {
  return (
    <div
      id="schedule"
      className="grid w-full grid-cols-8  rounded-md bg-vin1 p-3 text-center text-vin4"
    >
      <div className="bg-vin2 p-3">Week</div>
      <div className="bg-vin2 p-3">Mon</div>
      <div className="bg-vin2 p-3">Tue</div>
      <div className="bg-vin2 p-3">Wed</div>
      <div className="bg-vin2 p-3">Thu</div>
      <div className="bg-vin2 p-3">Fri</div>
      <div className="bg-vin2 p-3">Sat</div>
      <div className="bg-vin2 p-3">Sun</div>
      {schedule.map((row) => {
        return row.schedule.map((block) => {
          return (
            <div
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2 p-1"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400 p-1"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400 p-1"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400 p-1"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400 p-1"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400 p-1"
                  : "col-span-7 bg-red-400 p-1"
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
