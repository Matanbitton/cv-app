import React from "react";

export default function PersonalInfo({
  handlePersonalInfoChange,
  personalInfo,
}) {
  return (
    <div className="flex-col flex gap-2">
      <div className="flex justify-evenly">
        <input
          className="rounded border-gray-900 border pl-2  "
          onChange={handlePersonalInfoChange}
          type="text"
          placeholder="First Name"
          name="firstName"
          value={personalInfo.firstName}
        ></input>
        <input
          className="rounded border-gray-900 border pl-2"
          border
          onChange={handlePersonalInfoChange}
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={personalInfo.lastName}
        ></input>
      </div>
      <div className="flex justify-evenly">
        <input
          className="rounded border-gray-900 border pl-2"
          border
          onChange={handlePersonalInfoChange}
          type="tel"
          placeholder="Phone Number"
          name="phoneNumber"
          value={personalInfo.phoneNumber}
        ></input>
        <input
          className="rounded border-gray-900 border pl-2"
          border
          onChange={handlePersonalInfoChange}
          type="email"
          placeholder="Email"
          name="email"
          value={personalInfo.email}
        ></input>
      </div>
      <div className="flex justify-evenly">
        <input
          className="rounded border-gray-900 border pl-2"
          onChange={handlePersonalInfoChange}
          type="text"
          placeholder="Linkedin Link"
          name="linkedinLink"
          value={personalInfo.linkedinLink}
        ></input>
        <input
          className="rounded border-gray-900 border pl-2"
          onChange={handlePersonalInfoChange}
          type="text"
          placeholder="Personal Website / Github Link"
          name="websiteLink"
          value={personalInfo.websiteLink}
        ></input>
      </div>
    </div>
  );
}
