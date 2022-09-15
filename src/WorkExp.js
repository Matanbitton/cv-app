import React from "react";

export default function WorkExp() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <label for="company">Company:</label>
          <input
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            id="company"
            placeholder="Company"
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="position">Position:</label>
          <input
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            id="position"
            placeholder="Position"
          ></input>
        </div>
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
