import { useState } from "react";

export default function WorkDetails({
  company,
  position,
  startDate,
  endDate,
  description,
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
    <div>
      {jobTitleArr.map((jobTitle) => (
        <div className="flex  align-start gap-2 l w-full">
          <p
            className="hover:bg-slate-300 text-md  font-medium p-0 m-0"
            key={Math.random()}
          >
            {jobTitle.company} -
          </p>
          <p
            className="hover:bg-slate-300 max-h-fit italic"
            key={Math.random()}
          >
            {jobTitle.position}
          </p>
          <p className="hover:bg-slate-300 italic p-0 m-0" key={Math.random()}>
            {jobTitle.startDate} -
          </p>
          <p className="hover:bg-slate-300 italic p-0 m-0" key={Math.random()}>
            {jobTitle.endDate}
          </p>
        </div>
      ))}
      <div className="flex flex-col max-h-full ">
        {jobDescriptionArr.map((description) => (
          <div>
            <p
              onClick={handleClick}
              className="hover:bg-slate-300 max-h-fit  p-0 m-0"
              key={Math.random()}
            >
              {description}
            </p>
          </div>
        ))}
        <button
          onClick={handleDescription}
          className="rounded bg-sky-500 px-2 text-white max-w-fit"
        >
          + Description
        </button>
      </div>
    </div>
  );
}
