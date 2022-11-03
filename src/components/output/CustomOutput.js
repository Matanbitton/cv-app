import formatDate from "../../tools/formatDate";
import uniqid from "uniqid";
import ThemeContext from "../../store/theme-context";
import {useContext} from "react";

export default function WorkExpOutput({custom}) {
  const ctx = useContext(ThemeContext);
  return (
    <div className="flex flex-col   border-sky-500 px-8">
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
              <p className="italic text-sm">{formatDate(custom.startDate)}</p>
              <p>-</p>
              <p className="italic text-sm">{formatDate(custom.endDate)}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col pl-3 ">
          {custom.bulletPoint1 ? (
            <p className="text-slate-800">- {custom.bulletPoint1}</p>
          ) : (
            ""
          )}
          {custom.bulletPoint2 ? (
            <p className="text-slate-800">- {custom.bulletPoint2}</p>
          ) : (
            ""
          )}
          {custom.bulletPoint3 ? (
            <p className="text-slate-800">- {custom.bulletPoint3}</p>
          ) : (
            ""
          )}
          {custom.bulletPoint4 ? (
            <p className="text-slate-800">- {custom.bulletPoint4}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
