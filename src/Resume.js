import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import uniqid from "uniqid";
import Form from "./Form";
import FormOutPut from "./FormOutPut";

export default function Resume() {
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

  const [workExperience, setWorkExperience] = useState({
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

  const [custom, setCustom] = useState({
    sectionTitle: "",
    header: "",
    startDate: "",
    endDate: "",
    bulletPoint1: "",
    bulletPoint2: "",
    bulletPoint3: "",
    bulletPoint4: "",
  });

  function handlePersonalInfoChange(event) {
    setPersonalInfo((prevInfo) => {
      return { ...prevInfo, [event.target.name]: event.target.value };
    });
  }
  function handleSummary() {
    setShowSummary((prevShow) => !prevShow);
  }

  function handleWorkExperience(event) {
    setWorkExperience((prevWork) => {
      return { ...prevWork, [event.target.name]: event.target.value };
    });
  }
  function handleWorkArr(event) {
    event.preventDefault();
    setWorkArr((prevArr) => [...prevArr, { ...workExperience, id: uniqid() }]);
    setWorkExperience((prevWork) => {
      return {
        ...prevWork,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        bulletPoint1: "",
        bulletPoint2: "",
        bulletPoint3: "",
        bulletPoint4: "",
      };
    });
  }
  function handleDeleteWorkArr(id) {
    setWorkArr((prevArr) => {
      return prevArr.filter((work) => work.id !== id);
    });
  }
  function handleEditWorkArr(id) {
    setWorkArr((prevArr) => {
      return prevArr.filter((work) => work.id === id);
    });
  }

  function handleEducation(event) {
    setEducation((prevEducation) => {
      return { ...prevEducation, [event.target.name]: event.target.value };
    });
  }
  function handleEducationArr(event) {
    event.preventDefault();
    setEducationArr((prevArr) => [...prevArr, { ...education, id: uniqid() }]);
    setEducation(() => {
      return {
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        bulletPoint1: "",
        bulletPoint2: "",
        bulletPoint3: "",
        bulletPoint4: "",
      };
    });
  }
  function handleProject(event) {
    setProject((prevProject) => {
      return { ...prevProject, [event.target.name]: event.target.value };
    });
  }
  function handleProjectsArr(event) {
    event.preventDefault();
    setProjectsArr((prevArr) => [...prevArr, { ...project, id: uniqid() }]);
    setProject(() => {
      return {
        projectName: "",
        tech: "",
        bulletPoint1: "",
        bulletPoint2: "",
        bulletPoint3: "",
        bulletPoint4: "",
      };
    });
  }
  function handleSkill(event) {
    event.preventDefault();
    setSkill((prevSkill) => {
      return { ...prevSkill, [event.target.name]: event.target.value };
    });
  }
  function resetSkill(event) {
    event.preventDefault();
    setSkill(() => {
      return {
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
      };
    });
  }
  function handleCustom(event) {
    event.preventDefault();
    setCustom((prevCustom) => {
      return { ...prevCustom, [event.target.name]: event.target.value };
    });
  }

  return (
    <div className=" flex flex-col justify-center items-center relative">
      <div className="header flex gap-5 sm:gap-0 sm:flex-col box-border bg-sky-500  p-3 pb-24 justify-between items-center font-bold w-full sm:w-[380px]">
        <p className="text-4xl text-center pl-4 sm:pl-0 sm:text-2xl ">
          Easy CV
        </p>
        <div className="flex">
          <p className="text-xl text-center  pr-4 sm:pr-0 sm:text-lg">
            The easier way to build a resume
          </p>
        </div>
      </div>

      <div className="flex  justify-center items-center">
        <div className=" absolute top-20 flex gap-5 justify-evenly sm:items-center sm:flex-col md:flex-col lg:flex-row ">
          <div className="  shadow-lg p-4 rounded-md max-h-full lg:min-w-[750px] md:min-w-[550px] min-h-[850px] sm:min-w-[340px] sm:max-w-[50%]  bg-gray-100 text-gray-800">
            <Form
              personalInfo={personalInfo}
              custom={custom}
              showSummay={showSummay}
              workExperience={workExperience}
              education={education}
              project={project}
              skills={skills}
              workArr={workArr}
              educationArr={educationArr}
              projectsArr={projectsArr}
              handleCustom={handleCustom}
              handleEducation={handleEducation}
              handleEducationArr={handleEducationArr}
              handlePersonalInfoChange={handlePersonalInfoChange}
              handleProject={handleProject}
              handleProjectsArr={handleProjectsArr}
              handleSkill={handleSkill}
              resetSkill={resetSkill}
              handleSummary={handleSummary}
              handleWorkArr={handleWorkArr}
              handleDeleteWorkArr={handleDeleteWorkArr}
              handleWorkExperience={handleWorkExperience}
            />
          </div>
          <div className="w-[210mm]">
            <FormOutPut
              personalInfo={personalInfo}
              workExpArr={workArr}
              educationArr={educationArr}
              projectsArr={projectsArr}
              skills={skills}
              custom={custom}
            />
          </div>

          <button className=" lg:hidden md:block sm:block rounded-full sticky bg-sky-500 p-4 text-2xl  font-bold bottom-[2%] border-white border-2">
            CV
          </button>
        </div>
      </div>
    </div>
  );
}
