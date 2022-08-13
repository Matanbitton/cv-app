export default function Education({
  handleRemove,
  text,
  position,
  startDate,
  endDate,
  id,
}) {
  return (
    <div
      id={id}
      onDoubleClick={handleRemove}
      className="text-sm flex  justify-between"
    >
      <div>
        <h2 className="font-bold text-lg text-sky-500 ">{text}</h2>
        <p className="hover:bg-slate-300">{position}</p>
      </div>
      <div className="flex gap-2">
        <p className="hover:bg-slate-300">{startDate} -</p>
        <p className="hover:bg-slate-300"> {endDate}</p>
      </div>
    </div>
  );
}
