import WorkDetails from "./WorkDetails";
import { useState, useEffect } from "react";
import uniqid from "uniqid";

export default function Work({
  description,
  startDate,
  endDate,
  position,
  text,
  id,
  company,
}) {
  const [workDetailsArr, setWorkDetailsArr] = useState([
    <WorkDetails
      id={id}
      key={uniqid()}
      description={description}
      company={company}
      position={position}
      startDate={startDate}
      endDate={endDate}
      handleWorkDetailsArr={handleWorkDetailsArr}
    />,
  ]);

  function handleWorkDetailsArr() {
    setWorkDetailsArr((prevWorkDetailsArr) => {
      return [
        ...prevWorkDetailsArr,
        <WorkDetails
          id={id}
          key={uniqid()}
          description={description}
          company={company}
          position={position}
          startDate={startDate}
          endDate={endDate}
          handleWorkDetailsArr={handleWorkDetailsArr}
        />,
      ];
    });
  }

  return (
    <div className=" text-sm flex flex-col justify-between    group">
      <h2 className="font-bold text-lg text-sky-500 p-0 m-0">{text}</h2>
      <div className="flex flex-col gap-2">{workDetailsArr}</div>
    </div>
  );
}
