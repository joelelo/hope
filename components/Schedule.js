import React from "react";

const Schedule = () => {
  const schedule = [
    [
      { content: "06:00", span: "1" },
      { content: "prayer", span: "7" },
    ],
    [
      { content: "07:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "08:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "09:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "10:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "11:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "12:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "14:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "16:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "18:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "20:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "22:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
    [
      { content: "24:00", span: "1" },
      { content: "2", span: "1" },
      { content: "3", span: "1" },
      { content: "4", span: "1" },
      { content: "5", span: "1" },
      { content: "6", span: "1" },
      { content: "7", span: "1" },
      { content: "8", span: "1" },
    ],
  ];
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
        return row.map((block) => {
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
