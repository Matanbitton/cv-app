import React, {useState} from "react";
import uniqid from "uniqid";
import {motion} from "framer-motion";

export default function Skills({
  handleSkill,
  skills,
  handleSuccessModal,
  handleSuccessModalMessage,
}) {
  const [skillsInputArr, setSkillsInputArr] = useState([]);

  function addSkillInput() {
    const skillNumber = `skill${skillsInputArr.length + 1}`;

    return (
      <motion.input
        whileFocus={{scale: 1.05}}
        className=" pl-2 w-full rounded shadow text-slate-400 border border-slate-400 focus:border-sky-500 focus:outline-none"
        type="text"
        placeholder="EXAMPLE: React"
        onChange={handleSkill}
        name={skillNumber}
        value={skills.skillNumber}
        key={uniqid()}
      ></motion.input>
    );
  }
  function handleSkillsInput(e) {
    e.preventDefault();
    if (skillsInputArr.length <= 9) {
      setSkillsInputArr((prevArr) => [...prevArr, addSkillInput()]);
    }
  }

  return (
    <div className="flex flex-col    gap-2  ">
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[90%]">
          <label htmlFor="company">Skill:</label>

          {skillsInputArr}
          <motion.button
            whileTap={{scale: 0.8}}
            onClick={handleSkillsInput}
            className="bg-slate-400 rounded text-white"
          >
            Add Skill
          </motion.button>

          <div className=" flex justify-evenly gap-2 py-2 ">
            <motion.button
              whileTap={{scale: 0.8}}
              onClick={(event) => {
                handleSkill(event);
                handleSuccessModal();
                handleSuccessModalMessage("Skills Section Added");
              }}
              className="bg-sky-500 rounded shadow w-full text-white"
            >
              +Add Section
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
