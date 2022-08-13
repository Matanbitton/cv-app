import React, { useEffect, useState } from "react";
import Input from "./Input";
import uniqid from "uniqid";

export default function Section({
  title,
  description,
  startDate,
  endDate,
  name,
  type,
  gitHub,
  email,
  phone,
  position,
  skills,
}) {
  const [isInput, setInput] = useState(false);
  const [text, setText] = useState(title);
  const [nameCV, setName] = useState(name);
  const [buttonPress, setButtonPress] = useState(false);

  const [skillsCV, setSkillsCV] = useState(
    skills ? skillsToElements(skills) : ""
  );
  const [skill, setSkill] = useState("");

  function getUniqID() {
    return uniqid();
  }

  function skillsToElements(skills) {
    return skills.map((skill) => (
      <p
        id={getUniqID()}
        onClick={handleRemoveSkill}
        className="bg-slate-400 text-white rounded-md px-2 text-md"
      >
        {skill}
      </p>
    ));
  }
  function handleClick(e) {
    e.preventDefault();
    setInput((prev) => !prev);
  }
  function handleText(event) {
    setText(() => event.target.value);
  }
  function handleRemoveSkill(e) {
    setSkillsCV((prevSkills) =>
      prevSkills.filter((skill) => {
        return skill.props.id !== e.target.id;
      })
    );
  }
  function handleSkill(e) {
    e.preventDefault();
    setSkill(() => e.target.value);
  }
  useEffect(() => {
    if (buttonPress === true) {
      setSkillsCV((prev) => [
        ...prev,
        <p
          onClick={handleRemoveSkill}
          id={getUniqID()}
          className="bg-slate-400 text-white rounded-md px-2 text-md"
        >
          {skill}
        </p>,
      ]);
      setButtonPress((prevButton) => !prevButton);
    }
  }, [buttonPress]);

  function handleName(e) {
    e.preventDefault();
    setInput((prev) => !prev);
  }
  function handleNameText(event) {
    setName(() => event.target.value);
  }

  function handleAddButton() {
    console.log({ skillsCV });
    const newSkill = (
      <Input
        handleInput={handleSkill}
        handleClick={(e) => {
          e.preventDefault();
          setButtonPress((prev) => !prev);

          setSkillsCV((prev) => [...prev.slice(0, -1)]);
        }}
      ></Input>
    );
    setSkillsCV((prevSkills) => [...prevSkills, newSkill]);
  }

  return (
    <div className="p-2 hover:bg-slate-200 cursor-pointer">
      {type === "Info" && (
        <div className=" border-sky-500 border-b-2 ">
          {!isInput && (
            <p
              onClick={handleName}
              className="font-bold text-sky-500 text-center flex justify-center text-3xl border-sky-500  hover:bg-slate-300"
            >
              {nameCV}
            </p>
          )}
          {isInput && (
            <div className="flex justify-center">
              <Input
                handleInput={handleNameText}
                handleClick={handleName}
                placeholder={text}
              />
            </div>
          )}
          <div className="flex gap-2 text-sm justify-center">
            <p className="hover:bg-slate-300">{email}</p>
            <p className="hover:bg-slate-300">{phone}</p>
            <p className="hover:bg-slate-300">{gitHub}</p>
          </div>
        </div>
      )}
      {(type === "Education" || type === "Work") && (
        <div className="text-sm flex  justify-between">
          <div>
            <h2 className="font-bold text-lg text-sky-500 ">{text}</h2>
            <p className="hover:bg-slate-300">{position}</p>
          </div>
          <div className="flex gap-2">
            <p className="hover:bg-slate-300">{startDate} -</p>
            <p className="hover:bg-slate-300"> {endDate}</p>
          </div>
        </div>
      )}
      {type === "Projects" && (
        <div className="text-sm">
          <h2 className="font-bold text-lg text-sky-500 ">{text}</h2>
          <p className="hover:bg-slate-300"></p>
        </div>
      )}
      {type === "Skills" ? (
        <div>
          <h2 className="font-bold text-lg text-sky-500 ">{text}</h2>
          <div className="flex gap-2 flex-wrap ">
            {skillsCV}
            <button
              onClick={handleAddButton}
              className="bg-sky-500 text-white px-2 rounded-md text-md"
            >
              +
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <p className="text-sm hover:bg-slate-300">{description}</p>
    </div>
  );
}
