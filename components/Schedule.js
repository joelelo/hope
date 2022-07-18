import React from "react";

const Schedule = ({ schedule }) => {
  return (
    <div
      id="schedule"
      className="grid w-full grid-cols-8 pb-20 text-center text-vin4"
    >
      <div className="bg-vin2">Week</div>
      <div className="bg-vin2">Mon</div>
      <div className="bg-vin2">Tue</div>
      <div className="bg-vin2">Wed</div>
      <div className="bg-vin2">Thu</div>
      <div className="bg-vin2">Fri</div>
      <div className="bg-vin2">Sat</div>
      <div className="bg-vin2">Sun</div>
      {schedule.map((row) => {
        return row.schedule.map((block) => {
          return (
            <div
              className={
                block.span === "1"
                  ? "col-span-1 bg-vin2"
                  : block.span === "2"
                  ? "col-span-2 bg-purple-400"
                  : block.span === "3"
                  ? "col-span-3 bg-blue-400"
                  : block.span === "4"
                  ? "col-span-4 bg-green-400"
                  : block.span === "5"
                  ? "col-span-5 bg-yellow-400"
                  : block.span === "6"
                  ? "col-span-6 bg-orange-400"
                  : "col-span-7 bg-red-400"
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
