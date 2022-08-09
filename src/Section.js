export default function Section(props) {
  return (
    <div>
      <h2 className="font-bold text-sky-500">{props.title}</h2>
      {props.type === "Info" && (
        <div>
          <p>{props.name}</p>
          <p>{props.email}</p>
          <p>{props.phone}</p>
          <p>{props.gitHub}</p>
        </div>
      )}
      {(props.type === "Education" || props.type === "Work") && (
        <div>
          <p>{props.position}</p>
          <p>{props.startDate}</p>
          <p>{props.endDate}</p>
        </div>
      )}
      {props.type === "Projects" && (
        <div>
          <p></p>
        </div>
      )}
      <p>{props.description}</p>
    </div>
  );
}
