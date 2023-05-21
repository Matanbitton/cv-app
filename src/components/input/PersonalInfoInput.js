import React from "react";
import { motion } from "framer-motion";

export default function PersonalInfo({
  handlePersonalInfoChange,
  personalInfo,
  handleSummary,
  showSummary,
}) {
  return (
    <div className="flex-col flex gap-2">
      <div className="flex justify-evenly gap-2 sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            className="rounded pl-2 shadow border border-slate-400 focus:border-sky-500 focus:outline-none"
            onChange={handlePersonalInfoChange}
            type="text"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            value={personalInfo.firstName}
          ></motion.input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            className="form-input"
            border="true"
            onChange={handlePersonalInfoChange}
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={personalInfo.lastName}
          ></motion.input>
        </div>
      </div>
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label htmlFor="phoneNumber">Phone Nubmer:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            className="form-input invalid:border-pink-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:text-pink-600"
            border="true"
            onChange={handlePersonalInfoChange}
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            pattern="^0?(([23489]{1}[0-9]{7})|[57]{1}[0-9]{8})+$"
          ></motion.input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            className="form-input invalid:border-pink-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:text-pink-600"
            border="true"
            onChange={handlePersonalInfoChange}
            type="email"
            placeholder="Email"
            name="email"
            value={personalInfo.email}
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          ></motion.input>
        </div>
      </div>
      <div className="flex justify-evenly sm:flex-col sm:max-w-[300px]">
        <div className="flex flex-col">
          <label htmlFor="linkedinLink">Linkedin Link:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            className="form-input"
            onChange={handlePersonalInfoChange}
            type="text"
            placeholder="Linkedin Link"
            name="linkedinLink"
            value={personalInfo.linkedinLink}
          ></motion.input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="websiteLink">Portfolio Link:</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            className="form-input"
            onChange={handlePersonalInfoChange}
            type="text"
            placeholder="Portfolio Website / Github Link"
            name="websiteLink"
            value={personalInfo.websiteLink}
          ></motion.input>
        </div>
      </div>
      <span className="flex gap-2 justify-center">
        <label htmlFor="summary">Add Summary Section?</label>
        <motion.input
          whileFocus={{ scale: 1.05 }}
          className="checked:bg-red-500 bg-slate-700"
          id="summary"
          type="checkbox"
          value="summary"
          onChange={handleSummary}
        ></motion.input>
      </span>
      {showSummary && (
        <div className="flex justify-center">
          <textarea
            placeholder="Write a descriptive summary about you here..."
            value={personalInfo.summarySection}
            name="summarySection"
            onChange={handlePersonalInfoChange}
            className="h-24 w-[80%] p-2 border focus:border-sky-500 focus:outline-none"
          ></textarea>
        </div>
      )}
    </div>
  );
}
