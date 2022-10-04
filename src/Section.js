import React, { useEffect, useState } from "react";
import "./index.css";
import Input from "./Input";
import uniqid from "uniqid";
import Work from "./Work";
import Info from "./Info";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";

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
  company,
}) {
  const [isInput, setInput] = useState(false);
  const [text, setText] = useState(title);
  const [nameCV, setName] = useState(name);
  const [buttonPress, setButtonPress] = useState(false);
  const [descriptionCV, setDescription] = useState(description);

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
  function handleDescription(e) {
    setDescription(() => e.target.value);
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

  function toggleInput() {
    if (type === "Info" && !isInput) {
      return (
        <Info
          key={id}
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
            key={id}
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
      {toggleInput()}

      {type === "Education" && (
        <div className="group flex gap-8 justify-between" id={id}>
          <button
            onClick={() => handleRemove(id)}
            className="round-animation bg-red-500 text-white border h-full m-0 content-end px-1 py-0 hidden group-hover:block"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
      {type === "Work" && (
        <div className="group flex gap-8 justify-between " id={id}>
          <Work
            key={id}
            handleDescription={handleDescription}
            handleClick={handleClick}
            handleRemove={handleRemove}
            text={title}
            description={descriptionCV}
            startDate={startDate}
            endDate={endDate}
            position={position}
            company={company}
          />

          <button
            onClick={() => handleRemove(id)}
            className="round-animation bg-red-500 text-white border h-full m-0 content-end px-1 py-0 hidden group-hover:block"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}

      {type === "Projects" && (
        <div className="group flex gap-8 justify-between " id={id}>
          <button
            onClick={() => handleRemove(id)}
            className="round-animation bg-red-500 text-white border h-full m-0 content-end px-1 py-0 hidden group-hover:block"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
      {type === "Skills" && (
        <div className="group flex gap-8 justify-between " id={id}>
          <button
            onClick={() => handleRemove(id)}
            className="round-animation bg-red-500 text-white border h-full m-0 content-end px-1 py-0 hidden group-hover:block"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>
  );
}
