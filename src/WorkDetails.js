import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqid from "uniqid";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Tools from "./Tools";

export default function WorkDetails({
  company,
  position,
  startDate,
  endDate,
  description,
  handleWorkDetailsArr,
}) {
  const [isToolsShown, setIsToolsShown] = useState(false);
  function toggleToolsShown() {
    setIsToolsShown((current) => !current);
  }
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
    <div className=" ">
      {jobTitleArr.map((jobTitle) => (
        <div
          key={uniqid()}
          className="flex hover:outline outline-sky-500 align-start gap-2  "
        >
          <p
            onClick={() => toggleToolsShown()}
            className=" text-md   font-medium p-0 m-0"
          >
            {jobTitle.company} -
          </p>
          <p onClick={() => toggleToolsShown()} className=" max-h-fit italic">
            {jobTitle.position}
          </p>
          <p onClick={() => toggleToolsShown()} className=" italic p-0 m-0">
            {jobTitle.startDate} -
          </p>
          <p onClick={() => toggleToolsShown()} className=" italic p-0 m-0">
            {jobTitle.endDate}
          </p>
          <button
            onClick={handleWorkDetailsArr}
            className=" rounded bg-sky-500 px-2 text-white hidden group-hover:block"
          >
            +
          </button>
        </div>
      ))}

      <div className=" relative flex flex-col max-h-full ">
        {jobDescriptionArr.map((description) => (
          <div className=" flex gap-2 m-0.5 " key={uniqid()}>
            {isToolsShown && <Tools toggleToolsShown={toggleToolsShown} />}
            <p
              onClick={() => toggleToolsShown()}
              className=" hover:outline outline-sky-500 max-w-fit max-h-fit  p-0 m-0"
            >
              {description}
            </p>
            <button className="hidden group-hover:block rounded bg-emerald-500 px-1 text-md  text-white max-w-fit">
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button
              onClick={handleDescription}
              className="hidden group-hover:block rounded bg-sky-500 px-2 text-md  text-white max-w-fit"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
