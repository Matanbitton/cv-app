import React from "react";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";

export default function Form() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    linkedinLink: "",
    websiteLink: "",
    summarySection: "",
  });
  const [showSummay, setShowSummary] = useState(false);

  function handlePersonalInfoChange(event) {
    setPersonalInfo((prevForm) => {
      return { ...prevForm, [event.target.name]: event.target.value };
    });
    console.log(personalInfo);
  }
  function handleSummary() {
    setShowSummary((prevShow) => !prevShow);
  }

  return (
    <div className="w-full h-full">
      <form className="">
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 py-2">
            Personal Information
          </h1>

          <PersonalInfo
            handlePersonalInfoChange={handlePersonalInfoChange}
            personalInfo={personalInfo}
          />
          <div className="flex gap-2 justify-center">
            <label for="summary">Add Summary Section?</label>
            <input
              id="summary"
              type="checkbox"
              value="summary"
              onChange={handleSummary}
            ></input>
          </div>
          {showSummay && (
            <div className="flex justify-center">
              <textarea
                value={personalInfo.summarySection}
                name="summarySection"
                onChange={handlePersonalInfoChange}
                className=" h-24 w-[80%] p-2 border focus:border-sky-500 focus:outline-none"
              ></textarea>
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
}
