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
import SuccessModal from "../UI/SuccessModal";
import {useContext, useState} from "react";
import ThemeContext from "../../store/theme-context";

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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successModalMessage, setSuccessModalMessage] = useState("");
  const ctx = useContext(ThemeContext);

  const handleSuccessModal = () => {
    setShowSuccessModal((prev) => !prev);
    setTimeout(() => {
      setShowSuccessModal((prev) => !prev);
    }, 2000);
  };

  const handleSuccessModalMessage = (message) => {
    setSuccessModalMessage(message);
  };
  return (
    <div className="w-full h-full">
      {showSuccessModal && <SuccessModal message={successModalMessage} />}

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
            handleSuccessModal={handleSuccessModal}
            handleSuccessModalMessage={handleSuccessModalMessage}
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
            handleSuccessModal={handleSuccessModal}
            handleSuccessModalMessage={handleSuccessModalMessage}
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
            handleSuccessModal={handleSuccessModal}
            handleSuccessModalMessage={handleSuccessModalMessage}
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

          <Skills
            handleSkill={handleSkill}
            skills={skills}
            handleSuccessModal={handleSuccessModal}
            handleSuccessModalMessage={handleSuccessModalMessage}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2 ">
          <h1 className="text-sky-500 text-2xl font-bold text-left pl-6 sm:pl-0 py-2">
            Custom
          </h1>

          <Custom
            handleCustom={handleCustom}
            custom={custom}
            handleSuccessModal={handleSuccessModal}
            handleSuccessModalMessage={handleSuccessModalMessage}
          />
        </fieldset>
      </form>
    </div>
  );
}
