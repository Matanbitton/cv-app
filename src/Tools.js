import { useState } from "react";

export default function Tools({ handleDescription, handleWorkDetails }) {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prevShown) => (prevShown ? false : true));
  }

  return (
    <div className="flex bg-white">
      <button>Edit</button>
      <button>Add</button>
    </div>
  );
}
