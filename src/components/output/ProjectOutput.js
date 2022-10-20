import uniqid from "uniqid";

export default function ProjectOutput({projectsArr}) {
  return (
    <div className="flex flex-col  gap-2 border-sky-500 px-3 ">
      {projectsArr.length >= 1 ? (
        <h1 className="font-medium  text-sky-500 text-lg border-b-2 border-sky-500">
          Projects
        </h1>
      ) : (
        ""
      )}
      {projectsArr.map((project) => (
        <div className="w-full flex-col pl-3" key={uniqid()}>
          <div className="flex  justify-between">
            <div className="flex gap-2 items-center">
              <h1 className="font-medium ">{project.projectName}</h1>
              <p>-</p>
              <p className="italic text-sm">{project.tech}</p>
            </div>
          </div>
          <div className="flex flex-col pl-3 ">
            {project.bulletPoint1 ? (
              <div className="flex gap-1">
                <p>•</p>
                <p className="text-slate-800">{project.bulletPoint1}</p>
              </div>
            ) : (
              ""
            )}
            {project.bulletPoint2 ? (
              <div className="flex gap-1">
                <p>•</p>
                <p className="text-slate-800">{project.bulletPoint2}</p>
              </div>
            ) : (
              ""
            )}
            {project.bulletPoint3 ? (
              <div className="flex gap-1">
                <p>•</p>
                <p className="text-slate-800">{project.bulletPoint3}</p>
              </div>
            ) : (
              ""
            )}
            {project.bulletPoint4 ? (
              <div className="flex gap-1">
                <p>•</p>
                <p className="text-slate-800">{project.bulletPoint4}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
