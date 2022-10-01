import {
  faEnvelope,
  faGlobe,
  faLink,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function personalInfoOutput({ personalInfo }) {
  return (
    <div className="flex flex-col p-2 justify-center items-center border-sky-500  bg-slate-800 ">
      {personalInfo.firstName && personalInfo.lastName ? (
        <div className="flex gap-2 text-3xl text-sky-400 font-bold">
          <h1>{personalInfo.firstName}</h1>
          <h1>{personalInfo.lastName}</h1>
        </div>
      ) : (
        ""
      )}

      <div className="flex gap-2 text-white">
        <div className="flex justify-center items-center gap-1">
          {personalInfo.phoneNumber && (
            <>
              {" "}
              <div className="text-sm text-sky-600">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              {personalInfo.phoneNumber}{" "}
            </>
          )}
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="text-sm text-sky-600">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          {personalInfo.email}
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="text-sm text-sky-600">
            <FontAwesomeIcon icon={faLink} />
          </div>
          {personalInfo.linkedinLink}
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="text-sm text-sky-600">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          {personalInfo.websiteLink}
        </div>
      </div>
      <div>{personalInfo.summarySection}</div>
    </div>
  );
}
