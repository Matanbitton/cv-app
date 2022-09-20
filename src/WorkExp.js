import React, { useState } from "react";
import uniqid from "uniqid";
export default function WorkExp({ handleWorkExperience, workExperience }) {
  const [bulletPointInputArr, setBulletPointArr] = useState([]);

  function addBulletPointInput() {
    let bulletPointName = `bulletPoint${bulletPointInputArr.length + 1}`;
    console.log(bulletPointName);

    return (
      <input
        className=" pl-2 w-full rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
        type="text"
        id="bulletPoints"
        placeholder="EXAMPLE: Increased company's revenue by..."
        name={bulletPointName}
        onChange={handleWorkExperience}
        value={workExperience.bulletPointName}
        key={uniqid()}
      ></input>
    );
  }
  function handleBulletPointsInput(e) {
    e.preventDefault();
    if (bulletPointInputArr.length <= 3) {
      setBulletPointArr((prevArr) => [...prevArr, addBulletPointInput()]);
    }
  }

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label for="company">Company:</label>
          <input
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            id="company"
            placeholder="Company"
            name="company"
            onChange={handleWorkExperience}
            value={workExperience.company}
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="position">Position:</label>
          <input
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            id="position"
            placeholder="Position"
            name="position"
            onChange={handleWorkExperience}
            value={workExperience.position}
          ></input>
        </div>
      </div>
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label for="from-date">From Date:</label>
          <input
            className="w-full md:w-[258px] lg:w-[258px] rounded shadow border text-slate-400  border-slate-400 focus:border-sky-500 focus:outline-none"
            type="date"
            id="from-date"
            name="startDate"
            onChange={handleWorkExperience}
            value={workExperience.startDate}
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="to-date">To Date:</label>
          <input
            className=" w-full md:w-[258px] lg:w-[258px] rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
            type="date"
            id="to-date"
            name="endDate"
            onChange={handleWorkExperience}
            value={workExperience.endDate}
          ></input>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-[89%] gap-2">
          <label>Bullet Points: (4 Max)</label>
          <div className="flex flex-col gap-2">{bulletPointInputArr}</div>
          <button
            onClick={handleBulletPointsInput}
            className="bg-slate-400 text-white rounded"
          >
            Add Bullet Point
          </button>
        </div>
      </div>
    </div>
  );
}
