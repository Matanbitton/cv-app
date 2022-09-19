import React from "react";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import uniqid from "uniqid";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
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

  const [workExperience, SetWorkExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    bulletPoint1: "",
    bulletPoint2: "",
    bulletPoint3: "",
    bulletPoint4: "",
  });

  const [workArr, setWorkArr] = useState([]);

  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    bulletPoint1: "",
    bulletPoint2: "",
    bulletPoint3: "",
    bulletPoint4: "",
  });

  const [educationArr, setEducationArr] = useState([]);

  const [project, setProject] = useState({
    projectName: "",
    tech: "",
    bulletPoint1: "",
    bulletPoint2: "",
    bulletPoint3: "",
    bulletPoint4: "",
  });

  const [projectsArr, setProjectsArr] = useState([]);

  const [skills, setSkill] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    skill7: "",
    skill8: "",
    skill9: "",
    skill10: "",
  });

  const [skillsArr, setSkillsArr] = useState([]);

  function handlePersonalInfoChange(event) {
    setPersonalInfo((prevInfo) => {
      return { ...prevInfo, [event.target.name]: event.target.value };
    });
  }
  function handleSummary() {
    setShowSummary((prevShow) => !prevShow);
  }

  function handleWorkExperience(event) {
    SetWorkExperience((prevWork) => {
      return { ...prevWork, [event.target.name]: event.target.value };
    });
  }
  function handleWorkArr(event) {
    event.preventDefault();
    setWorkArr((prevArr) => [...prevArr, { ...workExperience, id: uniqid() }]);
  }
  function handleEducation(event) {
    setEducation((prevEducation) => {
      return { ...prevEducation, [event.target.name]: event.target.value };
    });
  }
  function handleEducationArr(event) {
    event.preventDefault();
    setEducationArr((prevArr) => [...prevArr, { ...education, id: uniqid() }]);
  }
  function handleProject(event) {
    setProject((prevProject) => {
      return { ...prevProject, [event.target.name]: event.target.value };
    });
  }
  function handleProjectsArr(event) {
    event.preventDefault();
    setProjectsArr((prevArr) => [...prevArr, { ...education, id: uniqid() }]);
  }
  function handleSkill(event) {
    setSkill((prevSkill) => {
      return { ...prevSkill, [event.target.name]: event.target.value };
    });
    console.log(skills);
  }

  return (
    <div className="w-full h-full">
      <form className="">
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Personal Information
          </h1>

          <PersonalInfo
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
            <button className="bg-sky-500 rounded shadow w-[90%] text-white">
              +Add Section
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
