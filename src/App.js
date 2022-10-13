import "./index.css";
import Controller from "./Controller";

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
    <div
      className="relative h-screen
       gap-4  items-center w-full bg-gray-900 text-white text-xxl overflow-scroll "
    >
      <Controller />
    </div>
  );
}

export default App;
