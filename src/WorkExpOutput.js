import formatDate from "./formatDate";
import uniqid from "uniqid";

export default function WorkExpOutput({ workExpArr }) {
  return (
    <div className="flex flex-col   border-sky-500 p-4 pl-3 ">
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
              <p className="italic text-sm">{formatDate(work.startDate)}</p>
              <p>-</p>
              <p className="italic text-sm">{formatDate(work.endDate)}</p>
            </div>
          </div>
          <div className="flex flex-col pl-3 ">
            {work.bulletPoint1 ? (
              <p className="text-slate-800">- {work.bulletPoint1}</p>
            ) : (
              ""
            )}
            {work.bulletPoint2 ? (
              <p className="text-slate-800">- {work.bulletPoint2}</p>
            ) : (
              ""
            )}
            {work.bulletPoint3 ? (
              <p className="text-slate-800">- {work.bulletPoint3}</p>
            ) : (
              ""
            )}
            {work.bulletPoint4 ? (
              <p className="text-slate-800">- {work.bulletPoint4}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
