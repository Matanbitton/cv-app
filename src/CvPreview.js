import PersonalInfoOutput from "./PersonalInfoOutput";
import WorkExpOutput from "./WorkExpOutput";
import EducationOutput from "./EducationOutput";
import ProjectOutput from "./ProjectOutput";
import SkillsOutput from "./SkillsOutput";
import CustomOutput from "./CustomOutput";
import { motion } from "framer-motion";

export default function CvPreview({
  personalInfo,
  workExpArr,
  educationArr,
  projectsArr,
  skills,
  custom,
}) {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: 100 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
      className="w-[210mm] shadow-lg   rounded-md sm:hidden md:hidden  lg:min-w-[750px] h-[297mm] sm:max-w-[50%]  bg-gray-100 text-gray-800"
    >
      {personalInfo.firstName && personalInfo.lastName ? (
        <PersonalInfoOutput personalInfo={personalInfo} />
      ) : (
        ""
      )}
      <WorkExpOutput workExpArr={workExpArr} />
      <EducationOutput educationArr={educationArr} />
      <ProjectOutput projectsArr={projectsArr} />
      <SkillsOutput skills={skills} />
      <CustomOutput custom={custom} />
    </motion.div>
  );
}
