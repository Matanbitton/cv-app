export default function Education({
  handleRemove,
  text,
  position,
  startDate,
  endDate,
  id,
  description,
}) {
  return (
    <div
      id={id}
      onDoubleClick={handleRemove}
      className="text-sm flex justify-between w-9/12"
    >
      <div>
        <h2 className="font-bold text-lg text-sky-500 ">{text}</h2>
        <div className="flex gap-2  max-h-4 justify-space">
          <p className="hover:bg-slate-300">{position}</p>
          <p className="hover:bg-slate-300">{startDate} -</p>
          <p className="hover:bg-slate-300"> {endDate}</p>
        </div>

        <p className="hover:bg-slate-300">{description}</p>
      </div>
    </div>
  );
}
