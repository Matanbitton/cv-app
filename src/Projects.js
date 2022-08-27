export default function Projects({ text, description, id, handleRemove }) {
  return (
    <div id={id} onDoubleClick={handleRemove} className="text-sm w-9/12">
      <h2 className="font-bold text-lg text-sky-500 max-w-fit">{text}</h2>
      <p className="hover:bg-slate-300 max-w-fit">{description}</p>
    </div>
  );
}
