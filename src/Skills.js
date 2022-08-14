export default function Skills({
  text,
  skillsCV,
  handleAddButton,
  handleRemove,
  id,
}) {
  return (
    <div onDoubleClick={handleRemove} id={id}>
      <h2 className="font-bold text-lg text-sky-500 max-w-fit">{text}</h2>
      <div className="flex gap-2 flex-wrap max-w-fit">
        {skillsCV}
        <button
          onClick={handleAddButton}
          className="bg-sky-500 text-white px-2 rounded-md text-md"
        >
          +
        </button>
      </div>
    </div>
  );
}
