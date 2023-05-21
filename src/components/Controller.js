import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, createRef } from "react";
import { useReactToPrint } from "react-to-print";
import uniqid from "uniqid";
import Form from "./input/Form";
import CvPreview from "./output/CvPreview";
import { motion } from "framer-motion";
import PDFFile from "./output/PDFFile";
import Styling from "./input/Styling";

export default function Controller({
  handleSuccessModal,
  handleSuccessModalMessage,
}) {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    linkedinLink: "",
    websiteLink: "",
    summarySection: "",
  });
  const [showSummary, setShowSummary] = useState(false);

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
  function handleWorkArr() {
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
  function handleDelete(type, id) {
    if (type === "education") {
      setEducationArr((prevArr) => {
        return prevArr.filter((education) => education.id !== id);
      });
    }
    if (type === "work") {
      setWorkArr((prevArr) => {
        return prevArr.filter((work) => work.id !== id);
      });
    }
    if (type === "project") {
      setProjectsArr((prevArr) => {
        return prevArr.filter((project) => project.id !== id);
      });
    }
  }

  function handleEducation(event) {
    setEducation((prevEducation) => {
      return { ...prevEducation, [event.target.name]: event.target.value };
    });
  }
  function handleEducationArr() {
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
  function handleProjectsArr() {
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
  const [showStyling, setShowStyling] = useState(false);

  const componentRef = createRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="relative flex flex-col">
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ ease: "easeIn", duration: 0.4 }}
        className="header text-xxl box-border flex w-full items-center justify-between gap-5 bg-sky-500 p-3 pb-24 font-bold text-white sm:flex-col sm:gap-0 ">
        <p className="pl-4 text-center text-4xl sm:pl-0 sm:text-2xl ">
          Easy CV
        </p>
        <div className="flex">
          <p className="pr-4 text-center text-xl sm:pr-0 sm:text-lg">
            The easier way to build a resume
          </p>
        </div>
      </motion.div>

      <div className="flex items-center justify-center ">
        <div className="absolute top-20 flex justify-evenly gap-5 sm:flex-col sm:items-center md:flex-col lg:flex-row ">
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 100 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            className="min-h-[850px] rounded-md bg-gray-100 p-4 text-gray-800 shadow-lg sm:min-w-[340px] sm:max-w-[50%] md:min-w-[550px] lg:min-w-[750px]">
            <div className="flex w-full justify-evenly rounded-md border-2  border-sky-500 shadow-md">
              <button
                onClick={() => setShowStyling(() => false)}
                className={"w-[50%] " + 
                  (!showStyling
                    ? "rounded border-sky-500 bg-slate-800  text-lg text-white"
                    : "text-sky-500 hover:rounded hover:bg-sky-500 hover:font-bold hover:text-white")
                }>
                Info
              </button>
              <button
                onClick={() => setShowStyling(() => true)}
                className={"w-[50%] " + 
                  (showStyling
                    ? "rounded border-sky-500 bg-slate-800  text-lg text-white"
                    : "text-sky-500 hover:rounded hover:bg-sky-500 hover:font-bold hover:text-white ")
                }>
                Styling
              </button>
            </div>

            {showStyling && <Styling />}
            {!showStyling && (
              <Form
                personalInfo={personalInfo}
                custom={custom}
                showSummary={showSummary}
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
                handleDelete={handleDelete}
                handleWorkExperience={handleWorkExperience}
                handleSuccessModal={handleSuccessModal}
                handleSuccessModalMessage={handleSuccessModalMessage}
              />
            )}
          </motion.div>
          <div className="">
            <CvPreview
              personalInfo={personalInfo}
              workExpArr={workArr}
              educationArr={educationArr}
              projectsArr={projectsArr}
              skills={skills}
              custom={custom}
            />
            <div className="hidden">
              <PDFFile
                ref={componentRef}
                personalInfo={personalInfo}
                workExpArr={workArr}
                educationArr={educationArr}
                projectsArr={projectsArr}
                skills={skills}
                custom={custom}
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="mt-5 rounded bg-sky-500 px-2 py-1 font-bold text-white sm:hidden md:hidden"
              onClick={handlePrint}>
              Export Resume
            </motion.button>
          </div>
        </div>
        <motion.button
          onClick={handlePrint}
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0.2, scale: 0 }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
          className="fixed bottom-[0px] w-full rounded-md border-2 border-sky-500 bg-sky-500 px-2 text-2xl font-bold text-white sm:block md:block lg:hidden ">
          <FontAwesomeIcon icon={faFileInvoice} /> Preview/Export
        </motion.button>
      </div>
    </div>
  );
}
