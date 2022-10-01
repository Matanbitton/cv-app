import { useEffect, useState } from "react";
import "./index.css";
import Resume from "./Resume";

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
       flex flex-col justify-start gap-4  items-center w-full bg-gray-900 text-white text-xxl overflow-scroll "
    >
      <Resume />
    </div>
  );
}

export default App;
