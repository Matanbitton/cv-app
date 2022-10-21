import "./index.css";
import Controller from "./components/Controller";

function App() {
  /* function handleRemoveSection(id) {
    setSection((prevSection) =>
      prevSection.filter((section) => {
        console.log(section);
        return section.props.id !== id;
      })
    );
  } */

  return (
    <div className=" ">
      <Controller />
    </div>
  );
}

export default App;
