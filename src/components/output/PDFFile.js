import React from "react";
import {forwardRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faLink,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import uniqid from "uniqid";
import ThemeContext from "../../store/theme-context";
import {useContext} from "react";
import {formatDate, formatDateOrBlank} from "../../tools/formatDate";

//this file length is sub optimal to say the least and it can be broken down to multiple componenets
//Altough due to npm react-to-print issue related to printing multiple components
//I wasn't able to do it without using one big componenet.

const PDFFile = forwardRef(
  (
    {personalInfo, workExpArr, educationArr, projectsArr, custom, skills},
    ref
  ) => {
    const ctx = useContext(ThemeContext);

    return (
      <div ref={ref} className="bg-gray-100 h-screen ">
        <div className="flex flex-col justify-center items-center  border-sky-500">
          {personalInfo.firstName && personalInfo.lastName ? (
            <div
              className={`flex gap-2 text-3xl ${ctx.theme.text} font-bold ${ctx.theme.bg} px-2 pt-2 text-center justify-center w-full`}
            >
              <h1>{personalInfo.firstName}</h1>
              <h1>{personalInfo.lastName}</h1>
            </div>
          ) : (
            ""
          )}

          <div
            className={`flex gap-2 text-white w-full ${ctx.theme.bg} items-center justify-center px-2 pb-1 text-center`}
          >
            <div className="flex justify-center items-center gap-1 ">
              {personalInfo.phoneNumber && (
                <>
                  <div className={`text-sm ${ctx.theme.icons}`}>
                    {" "}
                    <FontAwesomeIcon icon={faPhone} />
                  </div>

                  <p className="break-all text-left">
                    {personalInfo.phoneNumber}
                  </p>
                </>
              )}
            </div>
            <div className="flex gap-2 ">
              <div className="flex justify-center items-center gap-1 ">
                {personalInfo.email && (
                  <>
                    <div className={`text-sm ${ctx.theme.icons}`}>
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
                    <div className={`text-sm ${ctx.theme.icons}`}>
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
                    <div className={`text-sm ${ctx.theme.icons}`}>
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
            <div className=" w-full px-8  pt-2  ">
              <h1
                className={` font-medium  ${ctx.theme.text} text-xl border-b-2 ${ctx.theme.border}`}
              >
                Summary
              </h1>
              <p className="text-slate-800 pl-2 py-1 break  text-left">
                {personalInfo.summarySection}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col  gap-2 border-sky-500 px-8 ">
          {projectsArr.length >= 1 ? (
            <h1
              className={`font-medium  ${ctx.theme.text} text-lg border-b-2 ${ctx.theme.border}`}
            >
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
        <div className="flex flex-col gap-2 border-sky-500 px-8  ">
          {workExpArr.length >= 1 ? (
            <h1
              className={`font-medium  ${ctx.theme.text} text-lg border-b-2 ${ctx.theme.border}`}
            >
              Work Experience
            </h1>
          ) : (
            ""
          )}
          {workExpArr.map((work) => (
            <div className="w-full flex-col pl-3 text-slate-800" key={uniqid()}>
              <div className="flex  justify-between">
                <div className="flex gap-2">
                  <h1 className="font-medium ">{work.company}</h1>
                  <p>-</p>
                  <p className="italic ">{work.position}</p>
                </div>
                <div className="flex gap-2  items-center">
                  <p className="italic text-sm">
                    {formatDateOrBlank(work.startDate)}
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

        <div className="flex flex-col   border-sky-500 px-8 ">
          {custom.sectionTitle ? (
            <h1
              className={`font-medium  ${ctx.theme.text} text-lg border-b-2 ${ctx.theme.border}`}
            >
              {custom.sectionTitle}
            </h1>
          ) : (
            ""
          )}

          <div className="w-full flex-col pl-3" key={uniqid()}>
            <div className="flex  justify-between">
              <div className="flex gap-2">
                <h1 className="font-medium ">{custom.header}</h1>
              </div>
              {custom.startDate && custom.endDate ? (
                <div className="flex gap-2  items-center">
                  <p className="italic text-sm">
                    {formatDate(custom.startDate)}
                  </p>
                  <p>-</p>
                  <p className="italic text-sm">{formatDate(custom.endDate)}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col pl-3 ">
              {custom.bulletPoint1 ? (
                <div className="flex gap-1">
                  <p>•</p>
                  <p className="text-slate-800">{custom.bulletPoint1}</p>
                </div>
              ) : (
                ""
              )}
              {custom.bulletPoint2 ? (
                <div className="flex gap-1">
                  <p>•</p>
                  <p className="text-slate-800">{custom.bulletPoint2}</p>
                </div>
              ) : (
                ""
              )}
              {custom.bulletPoint3 ? (
                <div className="flex gap-1">
                  <p>•</p>
                  <p className="text-slate-800">{custom.bulletPoint3}</p>
                </div>
              ) : (
                ""
              )}
              {custom.bulletPoint4 ? (
                <div className="flex gap-1">
                  <p>•</p>
                  <p className="text-slate-800">{custom.bulletPoint4}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-sky-500 px-8  ">
          {educationArr.length >= 1 ? (
            <h1
              className={`font-medium  ${ctx.theme.text} text-lg border-b-2 ${ctx.theme.border}`}
            >
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
                    {formatDateOrBlank(education.startDate) /*() => {
                      return formatDate(education.startDate) === "present"
                        ? ""
                        : formatDate(education.startDate);
                    }*/}
                  </p>
                  <p>-</p>
                  <p className="italic text-sm">
                    {formatDate(education.endDate)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col pl-3 ">
                {education.bulletPoint1 ? (
                  <div className="flex gap-1">
                    <p>•</p>
                    <p className="text-slate-800">{education.bulletPoint1}</p>
                  </div>
                ) : (
                  ""
                )}
                {education.bulletPoint2 ? (
                  <div className="flex gap-1">
                    <p>•</p>
                    <p className="text-slate-800">{education.bulletPoint2}</p>
                  </div>
                ) : (
                  ""
                )}
                {education.bulletPoint3 ? (
                  <div className="flex gap-1">
                    <p>•</p>
                    <p className="text-slate-800">{education.bulletPoint3}</p>
                  </div>
                ) : (
                  ""
                )}
                {education.bulletPoint4 ? (
                  <div className="flex gap-1">
                    <p>•</p>
                    <p className="text-slate-800">{education.bulletPoint4}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col   border-sky-500 px-8  ">
          {skills.skill1 !== "" ? (
            <h1
              className={`font-medium  ${ctx.theme.text} text-lg border-b-2 ${ctx.theme.border}`}
            >
              Skills
            </h1>
          ) : (
            ""
          )}

          <div className="w-full flex-col py-2" key={uniqid()}>
            <div className="flex pl-2 gap-2 flex-wrap">
              {skills.skill1 ? (
                <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>
                  {skills.skill1}
                </p>
              ) : (
                ""
              )}
              {skills.skill2 ? (
                <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>
                  {skills.skill2}
                </p>
              ) : (
                ""
              )}
              {skills.skill3 ? (
                <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>
                  {skills.skill3}
                </p>
              ) : (
                ""
              )}

              {skills.skill4 ? (
                <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>
                  {skills.skill4}
                </p>
              ) : (
                ""
              )}
              {skills.skill5 ? (
                <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>
                  {skills.skill5}
                </p>
              ) : (
                ""
              )}
              {skills.skill6 ? (
                <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>
                  {skills.skill6}
                </p>
              ) : (
                ""
              )}
              {skills.skill7 ? (
                <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>
                  {skills.skill7}
                </p>
              ) : (
                ""
              )}
              {skills.skill8 ? (
                <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>
                  {skills.skill8}
                </p>
              ) : (
                ""
              )}
              {skills.skill9 ? (
                <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>
                  {skills.skill9}
                </p>
              ) : (
                ""
              )}
              {skills.skill10 ? (
                <p className={`text-white ${ctx.theme.bg} rounded-md px-2`}>
                  {skills.skill10}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PDFFile;