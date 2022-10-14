import PersonalInfoInput from "./PersonalInfoInput";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
import Custom from "./Custom";
import uniqid from "uniqid";
import FormWorkArr from "./FormWorkArr";
import FormEducationArr from "./FormEducationArr";
import FormProjectsArr from "./FormProjectsArr";
import { motion } from "framer-motion";

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
  handleDelete,
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
            handleSummary={handleSummary}
            showSummay={showSummay}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Work Experience
          </h1>
          <WorkExp
            key={uniqid}
            handleWorkExperience={handleWorkExperience}
            workExperience={workExperience}
            workArr={workArr}
            handleWorkArr={handleWorkArr}
          />
          <FormWorkArr handleDelete={handleDelete} workArr={workArr} />
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Education
          </h1>
          <Education
            handleEducation={handleEducation}
            education={education}
            educationArr={educationArr}
            handleEducationArr={handleEducationArr}
          />
          <FormEducationArr
            educationArr={educationArr}
            handleDelete={handleDelete}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Projects
          </h1>

          <Project
            handleProject={handleProject}
            project={project}
            projectsArr={projectsArr}
            handleProjectsArr={handleProjectsArr}
          />
          <FormProjectsArr
            projectsArr={projectsArr}
            handleDelete={handleDelete}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Skills
          </h1>

          <Skills handleSkill={handleSkill} skills={skills} />
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Custom
          </h1>

          <Custom handleCustom={handleCustom} custom={custom} />
        </fieldset>
      </form>
    </div>
  );
}
