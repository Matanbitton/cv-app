import React from "react";
import PersonalInfoInput from "./PersonalInfoInput";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
import Custom from "./Custom";

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
}) {
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
          <div className=" flex justify-center">
            <button className="bg-sky-500 rounded shadow w-[90%] text-white">
              +Add Section
            </button>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Work Experience
          </h1>

          <WorkExp
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

          <Education handleEducation={handleEducation} education={education} />

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
            Project
          </h1>

          <Project handleProject={handleProject} project={project} />

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
            <button className="bg-sky-500 rounded shadow w-[90%] text-white">
              +Add Section
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
