import {
  faCheck,
  faClone,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tools({ toggleToolsShown }) {
  return (
    <div className="">
      <div className="flex gap-2 bg-white rounded-md border-2 px-2 py-2  text-lg text-sky-500 shadow-md">
        <button className="hover:bg-slate-200 px-1 ">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="hover:bg-slate-200 px-1">
          <FontAwesomeIcon icon={faClone} />
        </button>
        <button className="hover:bg-slate-200 px-1">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button onClick={toggleToolsShown} className="hover:bg-slate-200 px-1">
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    </div>
  );
}
