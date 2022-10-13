import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormProjectsArr({ projectsArr, handleDelete }) {
  return (
    <div className="flex flex-col gap-2">
      {projectsArr.map((project) => {
        return (
          <div key={project.id} className="flex justify-center">
            <div className="bg-slate-800 rounded-lg flex-col w-[90%] justify-center items-center gap-2">
              <div className="flex items-center gap-2 justify-between">
                <div className="flex gap-2 items-center">
                  <h1 className="text-white font-bold text-xl pl-2">
                    {project.projectName}
                  </h1>
                  <p className="text-sky-500">-</p>
                  <h1 className="text-white ">{project.tech}</h1>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete("project", project.id);
                  }}
                  className="bg-red-500 rounded-r-lg text-white py-2 w-8"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
