import React, { useState } from "react";
import uniqid from "uniqid";
export default function Skills({ handleSkill, skill }) {
  const [skillsInputArr, setSkillsInputArr] = useState([]);

  function addSkillInput() {
    let bulletPointName = `bulletPoint${skillsInputArr.length + 1}`;

    return (
      <input
        className=" pl-2 w-full rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
        type="text"
        placeholder="EXAMPLE: React"
        onChange={handleSkill}
        key={uniqid()}
      ></input>
    );
  }
  function handleSkillsInput(e) {
    e.preventDefault();
    if (skillsInputArr.length <= 3) {
      setSkillsInputArr((prevArr) => [...prevArr, addSkillInput()]);
    }
  }

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-center sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col w-[60%]">
          <label for="company">Skill:</label>
          <input
            type="text"
            className="rounded w-full  pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            placeholder="Java/React/Leadership/Communication..."
            onChange={handleSkill}
          ></input>
          {skillsInputArr}
          <button onClick={handleSkillsInput} className="bg-slate-400">
            Add Skill
          </button>
        </div>
      </div>
    </div>
  );
}
