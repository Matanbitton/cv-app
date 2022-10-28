import formatDate from "../../tools/formatDate";
import uniqid from "uniqid";

const WorkExpOutput = ({workExpArr}) => {
  return (
    <div className="flex flex-col gap-2  border-sky-500  px-3 ">
      {workExpArr.length >= 1 ? (
        <h1 className="font-medium  text-sky-500 text-lg border-b-2 border-sky-500">
          Work Experience
        </h1>
      ) : (
        ""
      )}
      {workExpArr.map((work) => (
        <div className="w-full flex-col pl-3" key={uniqid()}>
          <div className="flex  justify-between">
            <div className="flex gap-2">
              <h1 className="font-medium ">{work.company}</h1>
              <p>-</p>
              <p className="italic ">{work.position}</p>
            </div>
            <div className="flex gap-2  items-center">
              <p className="italic text-sm">
                {() => {
                  return formatDate(work.startDate) === "present"
                    ? ""
                    : formatDate(work.startDate);
                }}
              </p>
              <p>-</p>
              <p className="italic text-sm">{formatDate(work.endDate)}</p>
            </div>
          </div>
          <div className="flex flex-col pl-3 ">
            {work.bulletPoint1 ? (
              <div className="flex gap-1">
                <p>•</p>
                <p className="text-slate-800">{work.bulletPoint1}</p>
              </div>
            ) : (
              ""
            )}
            {work.bulletPoint2 ? (
              <div className="flex gap-1">
                <p>•</p>
                <p className="text-slate-800">{work.bulletPoint2}</p>
              </div>
            ) : (
              ""
            )}
            {work.bulletPoint3 ? (
              <div className="flex gap-1">
                <p>•</p>
                <p className="text-slate-800">{work.bulletPoint3}</p>
              </div>
            ) : (
              ""
            )}
            {work.bulletPoint4 ? (
              <div className="flex gap-1">
                <p>•</p>
                <p className="text-slate-800">{work.bulletPoint4}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExpOutput;
