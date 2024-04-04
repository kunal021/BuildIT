import { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import WorkExprience from "./WorkExprience";
import Language from "./Language";

function Dashboard() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [skillOpen, setSkillOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <div className="scrollbar flex flex-col justify-start items-start relative overflow-auto bg-white my-10 mx-4 px-6 pb-4 gap-4 rounded-xl border-2 w-[30%] h-full border-transparent shadow-lg hover:shadow-gray-600/80">
      <div className="sticky top-0 bg-white z-10 w-full pt-4 pb-3">
        <p className="text-black text-3xl font-semibold">Dashboard</p>
      </div>
      <div className="flex flex-col text-gray-600 gap-4 w-full">
        <div className="flex flex-col gap-4 cursor-pointer">
          <p
            className={`flex text-2xl font-medium justify-between ${
              aboutOpen ? "sticky top-16 bg-white z-5" : ""
            }`}
            onClick={() => setAboutOpen((prev) => !prev)}
          >
            About <span className="pl-10">{aboutOpen ? "-" : "+"}</span>
          </p>

          {aboutOpen && <About />}
        </div>
        <hr className="border-[1px] border-gray-600" />
        <div className="flex flex-col gap-4 cursor-pointer">
          <p
            className={`flex text-2xl font-medium justify-between ${
              skillOpen ? "sticky top-16 bg-white z-5" : ""
            }`}
            onClick={() => setSkillOpen((prev) => !prev)}
          >
            Skills <span className="pl-10">{skillOpen ? "-" : "+"}</span>
          </p>
          {skillOpen && <Skills />}
        </div>
        <hr className="border-[1px] border-gray-600" />
        <div className="flex flex-col gap-4 cursor-pointer">
          <p
            className={`flex text-2xl font-medium justify-between ${
              educationOpen ? "sticky top-16 bg-white z-5" : ""
            }`}
            onClick={() => setEducationOpen((prev) => !prev)}
          >
            Education <span className="pl-10">{educationOpen ? "-" : "+"}</span>
          </p>
          {educationOpen && <Education />}
        </div>
        <hr className="border border-gray-600" />
        <div className="flex flex-col gap-4 cursor-pointer">
          <p
            className={`flex text-2xl font-medium justify-between ${
              projectOpen ? "sticky top-16 bg-white z-5" : ""
            }`}
            onClick={() => setProjectOpen((prev) => !prev)}
          >
            Projects <span className="pl-10">{projectOpen ? "-" : "+"}</span>
          </p>
          {projectOpen && <Projects />}
        </div>
        <hr className="border border-gray-600" />
        <div className="flex flex-col gap-4 cursor-pointer">
          <p
            className={`flex text-2xl font-medium justify-between ${
              workOpen ? "sticky top-16 bg-white z-5" : ""
            }`}
            onClick={() => setWorkOpen((prev) => !prev)}
          >
            Exprience <span className="pl-10">{workOpen ? "-" : "+"}</span>
          </p>
          {workOpen && <WorkExprience />}
        </div>
        <hr className="border border-gray-600" />
        <div className="flex flex-col gap-4 cursor-pointer">
          <p
            className={`flex text-2xl font-medium justify-between ${
              languageOpen ? "sticky top-16 bg-white z-5" : ""
            }`}
            onClick={() => setLanguageOpen((prev) => !prev)}
          >
            Language <span className="pl-10">{languageOpen ? "-" : "+"}</span>
          </p>
          {languageOpen && <Language />}
        </div>
        <hr className="border border-gray-600" />
      </div>
    </div>
  );
}

export default Dashboard;
