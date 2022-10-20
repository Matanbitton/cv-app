import formatDate from "../../tools/formatDate";
import uniqid from "uniqid";

export default function WorkExpOutput({educationArr}) {
  return (
    <div className="flex flex-col   border-sky-500 px-3 ">
      {educationArr.length >= 1 ? (
        <h1 className="font-medium  text-sky-500 text-lg border-b-2 border-sky-500">
          Education
        </h1>
      ) : (
        ""
      )}
      {educationArr.map((education) => (
        <div className="w-full flex-col pl-3" key={uniqid()}>
          <div className="flex  justify-between">
            <div className="flex gap-2">
              <h1 className="font-medium ">{education.institution}</h1>
              <p>-</p>
              <p className="italic ">{education.degree}</p>
            </div>
            <div className="flex gap-2  items-center">
              <p className="italic text-sm">
                {formatDate(education.startDate)}
              </p>
              <p>-</p>
              <p className="italic text-sm">{formatDate(education.endDate)}</p>
            </div>
          </div>
          <div className="flex flex-col pl-3 ">
            {education.bulletPoint1 ? (
              <p className="text-slate-800">- {education.bulletPoint1}</p>
            ) : (
              ""
            )}
            {education.bulletPoint2 ? (
              <p className="text-slate-800">- {education.bulletPoint2}</p>
            ) : (
              ""
            )}
            {education.bulletPoint3 ? (
              <p className="text-slate-800">- {education.bulletPoint3}</p>
            ) : (
              ""
            )}
            {education.bulletPoint4 ? (
              <p className="text-slate-800">- {education.bulletPoint4}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
