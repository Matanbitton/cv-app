import formatDate from "./formatDate";
import uniqid from "uniqid";

export default function WorkExpOutput({ skills }) {
  return (
    <div className="flex flex-col   border-sky-500 p-4 pl-3 ">
      {skills.skill1 !== "" ? (
        <h1 className="font-medium  text-sky-500 text-lg border-b-2 border-sky-500">
          Skills
        </h1>
      ) : (
        ""
      )}

      <div className="w-full flex-col py-2" key={uniqid()}>
        <div className="flex pl-2 gap-2 flex-wrap">
          {skills.skill1 ? (
            <p className="text-white bg-slate-800 rounded-md px-2">
              {skills.skill1}
            </p>
          ) : (
            ""
          )}
          {skills.skill2 ? (
            <p className="text-white bg-slate-800 rounded-md px-2">
              {skills.skill2}
            </p>
          ) : (
            ""
          )}
          {skills.skill3 ? (
            <p className="text-white bg-slate-800 rounded-md px-2">
              {skills.skill3}
            </p>
          ) : (
            ""
          )}

          {skills.skill4 ? (
            <p className="text-white bg-slate-800 rounded-md px-2">
              {skills.skill4}
            </p>
          ) : (
            ""
          )}
          {skills.skill5 ? (
            <p className="text-white bg-slate-800 rounded-md px-2">
              {skills.skill5}
            </p>
          ) : (
            ""
          )}
          {skills.skill6 ? (
            <p className="text-white bg-slate-800 rounded-md px-2">
              {skills.skill6}
            </p>
          ) : (
            ""
          )}
          {skills.skill7 ? (
            <p className="text-white bg-slate-800 rounded-md px-2">
              {skills.skill7}
            </p>
          ) : (
            ""
          )}
          {skills.skill8 ? (
            <p className="text-white bg-slate-800 rounded-md px-2">
              {skills.skill8}
            </p>
          ) : (
            ""
          )}
          {skills.skill9 ? (
            <p className="text-white bg-slate-800 rounded-md px-2">
              {skills.skill9}
            </p>
          ) : (
            ""
          )}
          {skills.skill10 ? (
            <p className="text-white bg-slate-800 rounded-md px-2">
              {skills.skill10}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
