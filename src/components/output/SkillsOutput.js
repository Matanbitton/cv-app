import uniqid from "uniqid";
import ThemeContext from "../../store/theme-context";
import {useContext} from "react";

export default function WorkExpOutput({skills}) {
  const ctx = useContext(ThemeContext);

  return (
    <div className={`flex flex-col    px-8`}>
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
  );
}
