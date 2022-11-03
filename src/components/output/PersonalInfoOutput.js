import {
  faEnvelope,
  faGlobe,
  faLink,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../store/theme-context";
import {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PersonalInfoOutput = ({personalInfo}) => {
  const ctx = useContext(ThemeContext);

  return (
    <div className="flex flex-col justify-center items-center ">
      {personalInfo.firstName && personalInfo.lastName ? (
        <div
          className={`${ctx.theme.bg} ${ctx.theme.text} flex gap-2 text-3xl text-sky-400 font-bold  px-2 pt-2 text-center justify-center w-full`}
        >
          <h1>{personalInfo.firstName}</h1>
          <h1>{personalInfo.lastName}</h1>
        </div>
      ) : (
        ""
      )}

      <div
        className={`${ctx.theme.bg} flex gap-2 text-white w-full items-center justify-center px-2 pb-1 text-center`}
      >
        <div className="flex justify-center items-center gap-1 ">
          {personalInfo.phoneNumber && (
            <>
              <div className={`${ctx.theme.icons} text-sm`}>
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
                <div className={`${ctx.theme.icons} text-sm `}>
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
                <div className={`${ctx.theme.icons} text-sm `}>
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
                <div className={`${ctx.theme.icons} text-sm `}>
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
          <h1
            className={`font-medium  ${ctx.theme.text} text-xl border-b-2 ${ctx.theme.border} `}
          >
            Summary
          </h1>
          <p className="text-slate-800 pl-2 py-1 break  text-left">
            {personalInfo.summarySection}
          </p>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoOutput;
