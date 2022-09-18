import React, { useState } from "react";
import uniqid from "uniqid";
export default function Project({ handleProject, project }) {
  const [bulletPointInputArr, setBulletPointArr] = useState([]);

  function addBulletPointInput() {
    let bulletPointName = `bulletPoint${bulletPointInputArr.length + 1}`;
    console.log(bulletPointName);

    return (
      <input
        className=" pl-2 w-full rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
        type="text"
        id="bulletPoints"
        placeholder="EXAMPLE: Utilized React to..."
        name={bulletPointName}
        onChange={handleProject}
        value={project.bulletPointName}
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
          <label for="company">Project Name:</label>
          <input
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            placeholder="Project Name..."
            name="projectName"
            onChange={handleProject}
            value={project.company}
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="position">Tech Used:</label>
          <input
            type="text"
            className="rounded   pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            id="position"
            placeholder="EXAMPLE: React, Redux, NodeJS ..."
            name="tech"
            onChange={handleProject}
            value={project.position}
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
