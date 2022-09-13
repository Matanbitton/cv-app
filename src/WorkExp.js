import React from "react";

export default function WorkExp() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center w-[80%]">
        <label for="company">Company:</label>
        <input type="text" id="company"></input>

        <label for="position">Position:</label>
        <input type="text" id="position"></input>
      </div>
      <label for="from-date">From Date:</label>
      <input type="date" id="from-date"></input>
      <div className="flex">
        <label for="to-date">To:</label>
        <input type="date" id="to-date"></input>
      </div>
    </div>
  );
}
