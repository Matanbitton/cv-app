import React, {useState, useEffect} from "react";
import uniqid from "uniqid";
import {motion} from "framer-motion";

export default function WorkExp({
  handleWorkExperience,
  workExperience,
  workArr,
  handleWorkArr,
  handleSuccessModal,
  handleSuccessModalMessage,
}) {
  const [bulletPointInputArr, setBulletPointArr] = useState([]);

  function addBulletPointInput() {
    let bulletPointName = `bulletPoint${bulletPointInputArr.length + 1}`;

    return (
      <motion.input
        whileFocus={{scale: 1.05}}
        className=" pl-2 w-full rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
        type="text"
        id="bulletPoints"
        placeholder="EXAMPLE: Increased company's revenue by..."
        name={bulletPointName}
        onChange={handleWorkExperience}
        value={workExperience.bulletPointName}
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
  function clearBulletPoints() {
    setBulletPointArr(() => []);
  }
  useEffect(() => clearBulletPoints(), [workArr]);

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label for="company">Company:</label>
          <motion.input
            whileFocus={{scale: 1.05}}
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            id="company"
            placeholder="Company"
            name="company"
            onChange={handleWorkExperience}
            value={workExperience.company}
          ></motion.input>
        </div>
        <div className="flex flex-col">
          <label for="position">Position:</label>
          <motion.input
            whileFocus={{scale: 1.05}}
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            id="position"
            placeholder="Position"
            name="position"
            onChange={handleWorkExperience}
            value={workExperience.position}
          ></motion.input>
        </div>
      </div>
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label for="from-date">From Date:</label>
          <motion.input
            whileFocus={{scale: 1.05}}
            className="w-full md:w-[258px] lg:w-[258px] rounded shadow border text-slate-400  border-slate-400 focus:border-sky-500 focus:outline-none"
            type="date"
            id="from-date"
            name="startDate"
            onChange={handleWorkExperience}
            value={workExperience.startDate}
          ></motion.input>
        </div>
        <div className="flex flex-col">
          <label for="to-date" className="flex items-center gap-2">
            To Date<p className="text-sm">(leave blank to mark present)</p>
          </label>
          <motion.input
            whileFocus={{scale: 1.05}}
            className=" w-full md:w-[258px] lg:w-[258px] rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
            type="date"
            id="to-date"
            name="endDate"
            onChange={handleWorkExperience}
            value={workExperience.endDate}
          ></motion.input>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-[90%] gap-2">
          <label>Bullet Points: (4 Max)</label>
          <div className="flex flex-col gap-2">{bulletPointInputArr}</div>
          <motion.button
            whileTap={{scale: 0.8}}
            onClick={handleBulletPointsInput}
            className=" w-full bg-slate-400 text-white rounded"
          >
            Add Bullet Point
          </motion.button>
        </div>
      </div>
      <div className=" flex justify-evenly gap-2 py-2 ">
        <motion.button
          whileTap={{scale: 0.8}}
          type={"button"}
          onClick={() => {
            handleWorkArr();
            handleSuccessModal();
            handleSuccessModalMessage("Work Section Added");
          }}
          className="bg-sky-500 rounded shadow w-[90%] text-white"
        >
          +Add Section
        </motion.button>
      </div>
    </div>
  );
}
