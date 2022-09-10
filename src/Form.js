import React from "react";
import { useState } from "react";

export default function Form() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    linkedinLink: "",
    websiteLink: "",
  });
  console.log(personalInfo);

  function handlePersonalInfoChange(event) {
    setPersonalInfo((prevForm) => {
      return { ...prevForm, [event.target.name]: event.target.value };
    });
  }

  return (
    <div className="w-full h-full">
      <form>
        <input
          onChange={handlePersonalInfoChange}
          type="text"
          placeholder="First Name"
          name="firstName"
        ></input>
        <input
          onChange={handlePersonalInfoChange}
          type="text"
          placeholder="Last Name"
          name="lastName"
        ></input>
        <input
          onChange={handlePersonalInfoChange}
          type="tel"
          placeholder="Phone Number"
          name="phoneNumber"
        ></input>
        <input
          onChange={handlePersonalInfoChange}
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <input
          onChange={handlePersonalInfoChange}
          type="text"
          placeholder="Linkedin Link"
          name="linkedinLink"
        ></input>
        <input
          onChange={handlePersonalInfoChange}
          type="text"
          placeholder="Personal Website / Github Link"
          name="websiteLink"
        ></input>
      </form>
    </div>
  );
}
