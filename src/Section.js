import React, { useState } from "react";
import Input from "./Input";

export default function Section(props) {
  const [isInput, setInput] = useState(false);
  const [text, setText] = useState(props.title);

  function handleClick(e) {
    e.preventDefault();
    setInput((prev) => !prev);
  }
  function handleText(event) {
    setText(() => event.target.value);
  }

  return (
    <div>
      {!isInput && (
        <h2 onClick={handleClick} className="font-bold text-lg text-sky-500">
          {text}
        </h2>
      )}
      {isInput && (
        <Input
          handleInput={handleText}
          handleClick={handleClick}
          placeholder={text}
        />
      )}
      {props.type === "Info" && (
        <div>
          <p className="font-bold text-sky-500 text-center text-2xl">
            {props.name}
          </p>
          <div className="flex gap-2 text-sm justify-center">
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.gitHub}</p>
          </div>
        </div>
      )}
      {(props.type === "Education" || props.type === "Work") && (
        <div className="text-sm flex  justify-between">
          <p>{props.position}</p>
          <div className="flex gap-2">
            <p>{props.startDate} -</p>
            <p> {props.endDate}</p>
          </div>
        </div>
      )}
      {props.type === "Projects" && (
        <div className="text-sm">
          <p></p>
        </div>
      )}
      {props.type === "Skills" && (
        <div className="text-sm bottom-1">
          <p></p>
        </div>
      )}

      <p className="text-sm">{props.description}</p>
    </div>
  );
}
