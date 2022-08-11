export default function Input(props) {
  return (
    <form className="flex gap-1 ">
      <input
        className="rounded-md  focus:outline-sky-500"
        onChange={props.handleInput}
        placeholder={props.placeholder}
      ></input>
      <button
        onClick={props.handleClick}
        className="text-white bg-sky-500 w-6 rounded-md "
        type="Submit"
      >
        +
      </button>
    </form>
  );
}
