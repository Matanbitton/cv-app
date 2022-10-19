import React, { useState } from "react";
import uniqid from "uniqid";
import { motion } from "framer-motion";

export default function Custom({ handleCustom, custom }) {
  const [bulletPointInputArr, setBulletPointArr] = useState([]);
  const [showDate, setShowDate] = useState(false);

  function addBulletPointInput() {
    let bulletPointName = `bulletPoint${bulletPointInputArr.length + 1}`;
    console.log(bulletPointName);

    return (
      <motion.input
        whileFocus={{ scale: 1.05 }}
        className=" pl-2 w-full rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
        type="text"
        id="bulletPoints"
        placeholder="Details..."
        name={bulletPointName}
        onChange={handleCustom}
        value={custom.bulletPointName}
        key={uniqid()}
      ></motion.input>
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
    <div className="flex flex-col gap-2">
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label for="company">Section Title:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            placeholder="EXAMPLE: Awards/ Volunteer work .."
            name="sectionTitle"
            onChange={handleCustom}
            value={custom.sectionTitle}
          ></motion.input>
        </div>
        <div className="flex flex-col">
          <label>Header:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            placeholder="EXAPLME: Dog Shelter/ Gold Medalist ..."
            name="header"
            onChange={handleCustom}
            value={custom.header}
          ></motion.input>
        </div>
      </div>

      {showDate && (
        <div className="flex flex-col ">
          <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
            <div className="flex flex-col ">
              <label for="from-date">From Date:</label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                className="w-full md:w-[258px] lg:w-[258px] rounded shadow border text-slate-400  border-slate-400 focus:border-sky-500 focus:outline-none"
                type="date"
                id="from-date"
                name="startDate"
                onChange={handleCustom}
                value={custom.startDate}
              ></motion.input>
            </div>
            <div className="flex flex-col">
              <label for="to-date">To Date:</label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                className=" w-full md:w-[258px] lg:w-[258px] rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
                type="date"
                id="to-date"
                name="endDate"
                onChange={handleCustom}
                value={custom.endDate}
              ></motion.input>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <div className="w-[90%] flex flex-col  ">
          <label>Bullet Points: (4 Max)</label>
          <div className="w-full flex flex-col gap-2">
            {bulletPointInputArr}
            {!showDate && (
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={handleShowDate}
                className="bg-slate-400 text-white rounded"
              >
                Add Date
              </motion.button>
            )}
            {showDate && (
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={handleShowDate}
                className="bg-slate-400 text-white rounded"
              >
                Remove Date
              </motion.button>
            )}
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={handleBulletPointsInput}
              className="bg-slate-400 text-white rounded"
            >
              Add Bullet Point
            </motion.button>
            <div className=" flex justify-evenly gap-2 py-2 ">
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={handleCustom}
                className="bg-sky-500 rounded shadow w-full text-white"
              >
                +Add Section
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
