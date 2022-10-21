import {faFileInvoice} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState, createRef} from "react";
import {useReactToPrint} from "react-to-print";
import uniqid from "uniqid";
import Form from "./input/Form";
import CvPreview from "./output/CvPreview";
import {motion} from "framer-motion";
import PDFFile from "./output/PDFFile";

export default function Controller() {
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
      return {...prevInfo, [event.target.name]: event.target.value};
    });
  }
  function handleSummary() {
    setShowSummary((prevShow) => !prevShow);
  }

  function handleWorkExperience(event) {
    setWorkExperience((prevWork) => {
      return {...prevWork, [event.target.name]: event.target.value};
    });
  }
  function handleWorkArr(event) {
    event.preventDefault();
    setWorkArr((prevArr) => [...prevArr, {...workExperience, id: uniqid()}]);
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
      return {...prevEducation, [event.target.name]: event.target.value};
    });
  }
  function handleEducationArr(event) {
    event.preventDefault();
    setEducationArr((prevArr) => [...prevArr, {...education, id: uniqid()}]);
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
      return {...prevProject, [event.target.name]: event.target.value};
    });
  }
  function handleProjectsArr(event) {
    event.preventDefault();
    setProjectsArr((prevArr) => [...prevArr, {...project, id: uniqid()}]);
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
      return {...prevSkill, [event.target.name]: event.target.value};
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
      return {...prevCustom, [event.target.name]: event.target.value};
    });
  }
  const componentRef = createRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className=" flex flex-col relative ">
      <motion.div
        animate={{y: 0}}
        initial={{y: -100}}
        transition={{ease: "easeIn", duration: 0.4}}
        className="header  flex gap-5 sm:gap-0 sm:flex-col box-border bg-sky-500 text-white text-xxl  p-3 pb-24 justify-between items-center font-bold w-full "
      >
        <p className="text-4xl text-center pl-4 sm:pl-0 sm:text-2xl ">
          Easy CV
        </p>
        <div className="flex">
          <p className="text-xl text-center  pr-4 sm:pr-0 sm:text-lg">
            The easier way to build a resume
          </p>
        </div>
      </motion.div>

      <div className="flex  justify-center items-center ">
        <div className="  absolute top-20 flex gap-5 justify-evenly sm:items-center sm:flex-col md:flex-col lg:flex-row ">
          <motion.div
            animate={{y: 0}}
            initial={{y: 100}}
            transition={{ease: "easeIn", duration: 0.4}}
            className="  shadow-lg p-4 rounded-md lg:min-w-[750px]  md:min-w-[550px] min-h-[850px] sm:min-w-[340px] sm:max-w-[50%]  bg-gray-100 text-gray-800"
          >
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
              handleDelete={handleDelete}
              handleWorkExperience={handleWorkExperience}
            />
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
              whileTap={{scale: 0.8}}
              className="bg-sky-500 rounded mt-5 px-2 py-1 sm:hidden md:hidden text-white font-bold"
              onClick={handlePrint}
            >
              Export Resume
            </motion.button>
          </div>
        </div>
        <motion.button
          onClick={handlePrint}
          animate={{opacity: 1, scale: 1}}
          initial={{opacity: 0.2, scale: 0}}
          transition={{ease: "easeInOut", duration: 0.4}}
          className=" lg:hidden md:block sm:block fixed bg-sky-500 border-2 border-sky-500 text-white rounded-md px-2 w-full text-2xl bottom-[0px] font-bold "
        >
          <FontAwesomeIcon icon={faFileInvoice} /> Preview/Export
        </motion.button>
      </div>
    </div>
  );
}
