export default function Work({
  description,
  startDate,
  endDate,
  position,
  handleRemove,
  text,
  id,
  company,
}) {
  return (
    <div
      id={id}
      onDoubleClick={handleRemove}
      className="text-sm flex  justify-between"
    >
      <div>
        <h2 className="font-bold text-lg text-sky-500 ">{text}</h2>
        <p className="hover:bg-slate-300 text-md underline font-medium p-0 m-0">
          {company}
        </p>

        <div className="flex  gap-2  max-h-4 ">
          <p className="hover:bg-slate-300 max-h-fit  p-0">{position}</p>
          <p className="hover:bg-slate-300  p-0 m-0">{startDate}</p>-
          <p className="hover:bg-slate-300  p-0 m-0">{endDate}</p>
        </div>
        <p className="hover:bg-slate-300 max-h-fit max-w-fit p-0 m-0">
          {" "}
          {description}
        </p>
      </div>
    </div>
  );
}
