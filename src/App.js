import { useEffect, useState } from "react";
import "./index.css";
import Section from "./Section";
import uniqid from "uniqid";

function App() {
  const initialSection = [
    <Section
      key={uniqid()}
      type="Info"
      name="John Does"
      gitHub="github/matanbitton.com"
      email="matanbitton2@gmail.com"
      phone="0525531234"
    />,
    <Section
      key={uniqid()}
      id={uniqid()}
      handleRemove={handleRemoveSection}
      type="Work"
      title="Work Experience"
      position="Software Engineer"
      company="StartUp"
      startDate="24/11/22"
      endDate="24/11/23"
      description=" - Worked at StartUp Doing XxXX things"
    />,
    <Section
      key={uniqid()}
      id={uniqid()}
      handleRemove={handleRemoveSection}
      type="Education"
      title="Education"
      position="Bachelors Degree"
      startDate="24/11/22"
      endDate="24/11/23"
      description="Learned C++ and stuff"
    />,
    <Section
      key={uniqid()}
      id={uniqid()}
      handleRemove={handleRemoveSection}
      type="Skills"
      title="Skills"
      skills={["JavaScript", "PHP"]}
    />,
  ];

  const [section, setSection] = useState(initialSection);

  useEffect(() => {
    console.log(section);
  }, [section]);

  function handleEducation() {
    setSection((prevSection) => [
      ...prevSection,
      <Section
        id={uniqid()}
        key={uniqid()}
        handleRemove={handleRemoveSection}
        type="Education"
        title="Education"
        position="Degree"
        startDate="Start Date"
        endDate="End Date"
        description="Description"
      />,
    ]);
  }
  function handleWork() {
    setSection((prevSection) => [
      ...prevSection,
      <Section
        id={uniqid()}
        key={uniqid()}
        handleRemove={handleRemoveSection}
        type="Work"
        title="Work Experience"
        position="Position"
        company="Company"
        startDate="Start Date"
        endDate="End Date"
        description="Description"
      />,
    ]);
  }
  function handleSkills() {
    setSection((prevSection) => [
      ...prevSection,
      <Section
        key={uniqid()}
        id={uniqid()}
        handleRemove={handleRemoveSection}
        type="Skills"
        title="Skills"
        skills={["PHP", "JavaScript", "Click Me To Change"]}
      />,
    ]);
  }
  function handleCustom() {
    setSection((prevSection) => [
      ...prevSection,
      <Section
        key={uniqid()}
        id={uniqid()}
        handleRemove={handleRemoveSection}
        type="Education"
        title="Click me to change title"
        position="Change info"
        startDate="Change Start Date"
        endDate="Change End Date"
        description="Change Description"
      />,
    ]);
  }
  function handleProjects() {
    setSection((prevSection) => [
      ...prevSection,
      <Section
        key={uniqid()}
        id={uniqid()}
        handleRemove={handleRemoveSection}
        type="Projects"
        title="Projects"
        description="write here about the project"
      />,
    ]);
  }
  function handleRemoveSection(id) {
    setSection((prevSection) =>
      prevSection.filter((section) => {
        console.log(section);
        return section.props.id !== id;
      })
    );
  }

  return (
    <div
      className="relative h-screen
       flex flex-col justify-start gap-4 items-center w-full bg-gray-900 text-white text-xxl overflow-scroll "
    >
      {" "}
      <div className="header flex gap-5 box-border bg-sky-500  p-3 pb-24 justify-between items-center font-bold w-full">
        <p className="text-4xl text-center pl-4">Easy CV</p>
        <p className="text-xl text-center  pr-4">
          The easier way to build a resume
        </p>
      </div>
      <div className="flex flex-col gap-2 p-4 mt-24 absolute left-24">
        <button
          onClick={handleSkills}
          className="px-4  rounded text-xl text-white  bg-sky-500"
        >
          +Skills
        </button>
        <button
          onClick={handleEducation}
          className="px-4  rounded text-xl text-white  bg-sky-500"
        >
          +Education
        </button>
        <button
          onClick={handleProjects}
          className="px-4  rounded text-xl text-white  bg-sky-500"
        >
          +Projects
        </button>
        <button
          onClick={handleCustom}
          className="px-4  rounded text-xl text-white  bg-sky-500"
        >
          +Custom
        </button>
        <button
          onClick={handleWork}
          className="px-4  rounded text-xl text-white  bg-sky-500"
        >
          +Work Experience
        </button>
      </div>
      <div className="flex gap-2  justify-center  ">
        <div className="absolute top-20  flex gap-10">
          <div className=" shadow-lg p-4 rounded-md  justify-center overflow-hidden max-h-[1080px] max-w-lg min-w-[650px] min-h-[850px]  bg-gray-100 text-gray-800"></div>

          <div className=" shadow-lg  p-4 rounded-md  justify-center overflow-hidden max-h-[1080px] max-w-lg min-w-[650px] min-h-[850px]  bg-gray-100 text-gray-800">
            {section}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
