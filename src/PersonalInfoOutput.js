import {
  fa3,
  faEnvelope,
  faExternalLink,
  faGlobe,
  faLink,
  faLinkSlash,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

const personalInfoOutput = forwardRef(({ personalInfo }, ref) => {
  return (
    <div
      className="flex flex-col justify-center items-center  border-sky-500   "
      ref={ref}
    >
      {personalInfo.firstName && personalInfo.lastName ? (
        <div className="flex gap-2 text-3xl text-sky-400 font-bold bg-slate-800 px-2 pt-2 text-center justify-center w-full">
          <h1>{personalInfo.firstName}</h1>
          <h1>{personalInfo.lastName}</h1>
        </div>
      ) : (
        ""
      )}

      <div className="flex gap-2 text-white w-full bg-slate-800 items-center justify-center px-2 pb-1 text-center">
        <div className="flex justify-center items-center gap-1 ">
          {personalInfo.phoneNumber && (
            <>
              <div className="text-sm text-sky-600">
                {" "}
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <p className="break-all text-left">{personalInfo.phoneNumber}</p>
            </>
          )}
        </div>
        <div className="flex gap-2 ">
          <div className="flex justify-center items-center gap-1 ">
            {personalInfo.email && (
              <>
                <div className="text-sm text-sky-600">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <p className="break-all text-left">{personalInfo.email}</p>
              </>
            )}
          </div>
          <div className="flex justify-center items-center gap-1  ">
            {personalInfo.linkedinLink && (
              <>
                <div className="text-sm text-sky-600">
                  {" "}
                  <FontAwesomeIcon icon={faLink} />
                </div>

                <a
                  className=" text-left"
                  href={personalInfo.linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </>
            )}
          </div>
          <div className="flex justify-center items-center gap-1 ">
            {personalInfo.websiteLink && (
              <>
                <div className="text-sm text-sky-600">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <a
                  className=" text-left"
                  href={personalInfo.websiteLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      {personalInfo.summarySection && (
        <div className=" w-full  bg-gray-100 px-3 pt-2  ">
          <h1 className=" font-medium  text-sky-500 text-xl border-b-2 border-sky-500">
            Summary
          </h1>
          <p className="text-slate-800 pl-2 py-1 break  text-left">
            {personalInfo.summarySection}
          </p>
        </div>
      )}
    </div>
  );
});

export default personalInfoOutput;
