import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import { motion } from "framer-motion";

export default function Project({
  handleProject,
  project,
  projectsArr,
  handleProjectsArr,
}) {
  const [bulletPointInputArr, setBulletPointArr] = useState([]);

  function addBulletPointInput() {
    let bulletPointName = `bulletPoint${bulletPointInputArr.length + 1}`;

    return (
      <motion.input
        whileFocus={{ scale: 1.05 }}
        className=" pl-2 w-full rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
        type="text"
        id="bulletPoints"
        placeholder="EXAMPLE: Utilized React to..."
        name={bulletPointName}
        onChange={handleProject}
        value={project.bulletPointName}
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
  useEffect(() => clearBulletPoints(), [projectsArr]);

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label for="company">Project Name:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            placeholder="Project Name..."
            name="projectName"
            onChange={handleProject}
            value={project.projectName}
          ></motion.input>
        </div>
        <div className="flex flex-col">
          <label for="position">Tech Used:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            id="position"
            placeholder="EXAMPLE: React, Redux, NodeJS ..."
            name="tech"
            onChange={handleProject}
            value={project.tech}
          ></motion.input>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex flex-col w-[90%] gap-2">
          <label>Bullet Points: (4 Max)</label>
          <div className="flex flex-col gap-2">{bulletPointInputArr}</div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handleBulletPointsInput}
            className="bg-slate-400 text-white rounded"
          >
            Add Bullet Point
          </motion.button>
        </div>
      </div>

      <div className=" flex justify-evenly gap-2 py-2 ">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={handleProjectsArr}
          className="bg-sky-500 rounded shadow w-[90%] text-white"
        >
          +Add Section
        </motion.button>
      </div>
    </div>
  );
}
