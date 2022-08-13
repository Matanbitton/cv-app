import React, { useEffect, useState } from "react";
import Input from "./Input";
import uniqid from "uniqid";
import Education from "./Education";
import Work from "./Work";
import Projects from "./Projects";
import Skills from "./Skills";
import Info from "./Info";

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
  handleRemove,
  id,
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
        onDoubleClick={handleRemoveSkill}
        key={getUniqID()}
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
    if (buttonPress) {
      setSkillsCV((prev) => [
        ...prev,
        <p
          onDoubleClick={handleRemoveSkill}
          id={getUniqID()}
          key={getUniqID()}
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
    const newSkill = (
      <Input
        key={getUniqID()}
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

  function toggleInput(type) {
    if (type === "Info" && !isInput) {
      return (
        <Info
          key={1}
          handleName={handleName}
          nameCV={
            <p
              onClick={handleName}
              className="font-bold text-sky-500 text-center flex justify-center text-3xl border-sky-500  hover:bg-slate-300"
            >
              {nameCV}
            </p>
          }
          handleNameText={handleNameText}
          email={email}
          phone={phone}
          gitHub={gitHub}
        />
      );
    }
    if (type === "Info" && isInput) {
      return (
        <div className="flex justify-center">
          <Info
            key={1}
            handleName={handleName}
            nameCV={
              <Input
                handleInput={handleNameText}
                handleClick={handleName}
                placeholder={text}
              />
            }
            handleNameText={handleNameText}
            email={email}
            phone={phone}
            gitHub={gitHub}
          />
        </div>
      );
    }
  }

  return (
    <div className="p-2 hover:bg-slate-200 cursor-pointer">
      {toggleInput(type)}

      {type === "Education" && (
        <Education
          key={3}
          description={description}
          startDate={startDate}
          endDate={endDate}
          position={position}
          handleRemove={handleRemove}
          text={title}
          id={id}
        />
      )}
      {type === "Work" && (
        <Work
          key={2}
          id={id}
          handleRemove={handleRemove}
          text={title}
          description={description}
          startDate={startDate}
          endDate={endDate}
          position={position}
        />
      )}

      {type === "Projects" && (
        <Projects
          key={4}
          text={title}
          hanleRemove={handleRemove}
          id={id}
          description={description}
        />
      )}
      {type === "Skills" && (
        <Skills
          key={5}
          id={id}
          handleAddButton={handleAddButton}
          handleRemove={handleRemove}
          text={title}
          skillsCV={skillsCV}
        />
      )}
    </div>
  );
}
