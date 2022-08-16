import { useState } from "react";
import uniqid from "uniqid";

export default function WorkDetails({
  company,
  position,
  startDate,
  endDate,
  description,
  handleClick,
  handleRemove,
  id,
}) {
  const [jobTitleArr, setJobTitleArr] = useState([
    {
      company,
      position,
      startDate,
      endDate,
    },
  ]);
  const [jobDescriptionArr, setJobDescriptionArr] = useState([description]);
  function handleJobTitle() {
    setJobTitleArr((prevJobTitle) => {
      return [...prevJobTitle, prevJobTitle[prevJobTitle.length - 1]];
    });
  }
  function handleDescription() {
    setJobDescriptionArr((prevDescriptionArr) => {
      return [
        ...prevDescriptionArr,
        prevDescriptionArr[prevDescriptionArr.length - 1],
      ];
    });
  }

  return (
    <div id={id} onDoubleClick={handleRemove}>
      {jobTitleArr.map((jobTitle) => (
        <div key={uniqid()} className="flex  align-start gap-2 l max-w-full">
          <p className="hover:bg-slate-300 text-md  font-medium p-0 m-0">
            {jobTitle.company} -
          </p>
          <p className="hover:bg-slate-300 max-h-fit italic">
            {jobTitle.position}
          </p>
          <p className="hover:bg-slate-300 italic p-0 m-0">
            {jobTitle.startDate} -
          </p>
          <p className="hover:bg-slate-300 italic p-0 m-0">
            {jobTitle.endDate}
          </p>
        </div>
      ))}
      <div className="flex flex-col max-h-full max-w-full ">
        {jobDescriptionArr.map((description) => (
          <div key={uniqid()}>
            <p
              onClick={handleClick}
              className="hover:bg-slate-300 max-h-fit  p-0 m-0"
            >
              {description}
            </p>
          </div>
        ))}
        <button
          onClick={handleDescription}
          className="rounded bg-sky-500 px-2 mb-2 text-white max-w-fit"
        >
          + Description
        </button>
      </div>
    </div>
  );
}
