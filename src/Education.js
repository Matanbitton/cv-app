import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
export default function Education({
  handleEducation,
  education,
  educationArr,
  handleEducationArr,
}) {
  const [bulletPointInputArr, setBulletPointArr] = useState([]);

  function addBulletPointInput() {
    let bulletPointName = `bulletPoint${bulletPointInputArr.length + 1}`;
    console.log(bulletPointName);

    return (
      <input
        className=" pl-2 w-full rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
        type="text"
        id="bulletPoints"
        placeholder="EXAMPLE: Cumulative GPA: 3.8/4.0; Dean's List 4 semesters in a row... "
        name={bulletPointName}
        onChange={handleEducation}
        value={education.bulletPointName}
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
  function clearBulletPoints() {
    setBulletPointArr(() => []);
  }
  useEffect(() => clearBulletPoints(), [educationArr]);

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label for="company">Institution:</label>
          <input
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            placeholder="Institution"
            name="institution"
            onChange={handleEducation}
            value={education.institution}
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="position">Degree/Course:</label>
          <input
            type="text"
            className="rounded pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            id="position"
            placeholder="Degree/Course/Seminar"
            name="degree"
            onChange={handleEducation}
            value={education.degree}
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
            onChange={handleEducation}
            value={education.startDate}
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="to-date">To Date:</label>
          <input
            className=" w-full md:w-[258px] lg:w-[258px] rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
            type="date"
            id="to-date"
            name="endDate"
            onChange={handleEducation}
            value={education.endDate}
          ></input>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-[90%] gap-2">
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
      <div className=" flex justify-evenly gap-2 py-2 ">
        <button
          onClick={handleEducationArr}
          className="bg-sky-500 rounded shadow w-[90%] text-white"
        >
          +Add Section
        </button>
      </div>
    </div>
  );
}
