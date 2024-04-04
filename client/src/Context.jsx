import { createContext, useContext, useRef, useState } from "react";

const ResumeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useResume = () => useContext(ResumeContext);

// eslint-disable-next-line no-unused-vars, react/prop-types
export const ResumeProvider = ({ children }) => {
  const printEl = useRef();

  const [about, setAbout] = useState({
    name: "",
    role: "",
    mobile: "",
    email: "",
    address: "",
    description: "",
  });

  const [educationList, setEducationList] = useState([
    {
      id: "",
      university: "",
      major: "",
      grade: "",
      start: 0,
      end: 0,
      description: "",
    },
  ]);

  const [skills, setSkills] = useState([]);

  const [workList, setWorkList] = useState([
    {
      id: "",
      position: "",
      company: "",
      type: "",
      start: "",
      end: "",
      description: "",
    },
  ]);

  const [projectList, setProjectList] = useState([
    {
      id: "",
      name: "",
      description: "",
      url: "",
    },
  ]);

  const [language, setLanguage] = useState([]);
  const value = {
    printEl,
    about,
    setAbout,
    educationList,
    setEducationList,
    skills,
    setSkills,
    projectList,
    setProjectList,
    workList,
    setWorkList,
    language,
    setLanguage,
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};
