export default function Projects({ text, description, id, handleRemove }) {
  return (
    <div id={id} handleRemove={handleRemove} className="text-sm">
      <h2 className="font-bold text-lg text-sky-500 ">{text}</h2>
      <p className="hover:bg-slate-300">{description}</p>
    </div>
  );
}
