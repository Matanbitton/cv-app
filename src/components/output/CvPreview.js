import PersonalInfoOutput from "./PersonalInfoOutput";
import WorkExpOutput from "./WorkExpOutput";
import EducationOutput from "./EducationOutput";
import ProjectOutput from "./ProjectOutput";
import SkillsOutput from "./SkillsOutput";
import CustomOutput from "./CustomOutput";
import {motion} from "framer-motion";
import {forwardRef} from "react";

const CvPreview = forwardRef(
  (
    {personalInfo, workExpArr, educationArr, projectsArr, skills, custom},
    ref
  ) => {
    return (
      <div>
        <motion.div
          id="export"
          animate={{y: 0}}
          initial={{y: 100}}
          transition={{ease: "easeIn", duration: 0.4}}
          className="w-[210mm] shadow-lg sm:hidden md:hidden   rounded-md lg:min-w-[750px] h-[297mm]   bg-gray-100 text-gray-800"
        >
          {personalInfo.firstName && personalInfo.lastName ? (
            <PersonalInfoOutput personalInfo={personalInfo} ref={ref} />
          ) : (
            ""
          )}

          <WorkExpOutput workExpArr={workExpArr} />
          <EducationOutput educationArr={educationArr} />
          <ProjectOutput projectsArr={projectsArr} />
          <SkillsOutput skills={skills} />
          <CustomOutput custom={custom} />
        </motion.div>
      </div>
    );
  }
);

export default CvPreview;
