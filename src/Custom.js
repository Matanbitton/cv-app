import React, { useState } from "react";
import uniqid from "uniqid";
export default function Custom({ handleCustom, custom }) {
  const [bulletPointInputArr, setBulletPointArr] = useState([]);
  const [showDate, setShowDate] = useState(false);

  function addBulletPointInput() {
    let bulletPointName = `bulletPoint${bulletPointInputArr.length + 1}`;
    console.log(bulletPointName);

    return (
      <input
        className=" pl-2 w-full rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
        type="text"
        id="bulletPoints"
        placeholder="Details..."
        name={bulletPointName}
        onChange={handleCustom}
        value={custom.bulletPointName}
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
  function handleShowDate(e) {
    e.preventDefault();
    setShowDate((prevShowDate) => !prevShowDate);
  }

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label for="company">Section Title:</label>
          <input
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            placeholder="EXAMPLE: Awards/ Volunteer work .."
            name="sectionTitle"
            onChange={handleCustom}
            value={custom.sectionTitle}
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Header:</label>
          <input
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            placeholder="EXAPLME: Dog Shelter/ Gold Medalist ..."
            name="header"
            onChange={handleCustom}
            value={custom.header}
          ></input>
        </div>
      </div>

      {showDate && (
        <div className="flex justify-center w-full">
          <div className="flex flex-col w-[89%] gap-2">
            <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
              <div className="flex flex-col">
                <label for="from-date">From Date:</label>
                <input
                  className="w-[258px] rounded shadow border text-slate-400  border-slate-400 focus:border-sky-500 focus:outline-none"
                  type="date"
                  id="from-date"
                  name="startDate"
                  onChange={handleCustom}
                  value={custom.startDate}
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="to-date">To Date:</label>
                <input
                  className=" w-[258px] rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
                  type="date"
                  id="to-date"
                  name="endDate"
                  onChange={handleCustom}
                  value={custom.endDate}
                ></input>
              </div>
            </div>
          </div>
        </div>
      )}
      <label>Bullet Points: (4 Max)</label>
      <div className="flex flex-col gap-2">
        {bulletPointInputArr}
        <button
          onClick={handleShowDate}
          className="bg-slate-400 text-white rounded"
        >
          Add Date
        </button>
        <button
          onClick={handleBulletPointsInput}
          className="bg-slate-400 text-white rounded"
        >
          Add Bullet Point
        </button>
      </div>
    </div>
  );
}
