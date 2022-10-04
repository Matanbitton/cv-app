import { useState } from "react";
import PersonalInfoOutput from "./PersonalInfoOutput";
import WorkExpOutput from "./WorkExpOutput";

export default function FormOutPut({ personalInfo, workExpArr }) {
  console.log(personalInfo);
  return (
    <div className="w-full shadow-lg   rounded-md   max-h-[1080px] sm:hidden md:hidden  lg:min-w-[750px] md:min-w-[550px] sm:min-w-[340px]    min-h-[950px] sm:max-w-[50%]  bg-gray-100 text-gray-800">
      {personalInfo.firstName && personalInfo.lastName ? (
        <PersonalInfoOutput personalInfo={personalInfo} />
      ) : (
        ""
      )}
      {}
      <WorkExpOutput workExpArr={workExpArr} />
    </div>
  );
}
