import React, { useState } from "react";
import PersonalInfoInput from "./PersonalInfoInput";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
import Custom from "./Custom";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Form({
  personalInfo,
  custom,
  showSummay,
  education,
  project,
  skills,
  workExperience,
  workArr,
  projectsArr,
  educationArr,
  handleCustom,
  handleEducation,
  handleEducationArr,
  handlePersonalInfoChange,
  handleProject,
  handleProjectsArr,
  handleSkill,
  handleSummary,
  handleWorkExperience,
  handleWorkArr,
  handleDeleteWorkArr,
}) {
  const [workHtml, setWorkHtml] = useState([]);

  function handleWorkHtml(props) {
    setWorkHtml((prev) => [
      ...prev,
      <WorkExp
        handleWorkExperience={props.handleWorkExperience}
        workExperience={props.workExperience}
        workArr={props.workArr}
      />,
    ]);
  }

  return (
    <div className="w-full h-full">
      <form className="">
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Personal Information
          </h1>

          <PersonalInfoInput
            handlePersonalInfoChange={handlePersonalInfoChange}
            personalInfo={personalInfo}
          />
          <span className="flex gap-2 justify-center">
            <label for="summary">Add Summary Section?</label>
            <input
              className="checked:bg-red-500 bg-slate-700"
              id="summary"
              type="checkbox"
              value="summary"
              onChange={handleSummary}
            ></input>
          </span>
          {showSummay && (
            <div className="flex justify-center">
              <textarea
                placeholder="Write a descriptive summary about you here..."
                value={personalInfo.summarySection}
                name="summarySection"
                onChange={handlePersonalInfoChange}
                className=" h-24 w-[80%] p-2 border focus:border-sky-500 focus:outline-none"
              ></textarea>
            </div>
          )}
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Work Experience
          </h1>
          {workArr.map((work) => {
            return (
              <div key={work.id} className="flex justify-center">
                <div className="bg-slate-800 rounded-lg flex-col w-[80%] justify-center items-center gap-2">
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex gap-2 items-center">
                      <h1 className="text-white font-bold text-xl pl-2">
                        {work.company}
                      </h1>
                      <p className="text-sky-500">-</p>
                      <h1 className="text-white ">{work.position}</h1>
                    </div>
                    <div className="flex">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteWorkArr(work.id);
                        }}
                        className="bg-sky-500  text-white py-2 w-8"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteWorkArr(work.id);
                        }}
                        className="bg-red-500 rounded-r-lg text-white py-2 w-8"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <WorkExp
            key={uniqid}
            handleWorkExperience={handleWorkExperience}
            workExperience={workExperience}
            workArr={workArr}
          />

          <div className=" flex justify-evenly gap-2 py-2 ">
            <button
              onClick={handleWorkArr}
              className="bg-sky-500 rounded shadow w-[90%] text-white"
            >
              +Add Section
            </button>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Education
          </h1>

          <Education
            handleEducation={handleEducation}
            education={education}
            educationArr={educationArr}
          />

          <div className=" flex justify-evenly gap-2 py-2 ">
            <button
              onClick={handleEducationArr}
              className="bg-sky-500 rounded shadow w-[90%] text-white"
            >
              +Add Section
            </button>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Projects
          </h1>

          <Project
            handleProject={handleProject}
            project={project}
            projectsArr={projectsArr}
          />

          <div className=" flex justify-evenly gap-2 py-2 ">
            <button
              onClick={handleProjectsArr}
              className="bg-sky-500 rounded shadow w-[90%] text-white"
            >
              +Add Section
            </button>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Skills
          </h1>

          <Skills handleSkill={handleSkill} skills={skills} />

          <div className=" flex justify-evenly gap-2 py-2 ">
            <button
              onClick={handleSkill}
              className="bg-sky-500 rounded shadow w-[90%] text-white"
            >
              +Add Section
            </button>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Custom
          </h1>

          <Custom handleCustom={handleCustom} custom={custom} />

          <div className=" flex justify-evenly gap-2 py-2 ">
            <button
              onClick={handleCustom}
              className="bg-sky-500 rounded shadow w-[90%] text-white"
            >
              +Add Section
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
