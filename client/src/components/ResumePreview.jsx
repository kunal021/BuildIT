import { useResume } from "../Context";
// import { useReactToPrint } from "react-to-print";
import AboutPreview from "./ResumePreview/AboutPreview";
import SkillsPreview from "./ResumePreview/SkillsPreview";
import EducationPreview from "./ResumePreview/EducationPreview";
import ProjectPreview from "./ResumePreview/ProjectPreview";
import WorkPreview from "./ResumePreview/WorkPreview";
import LanguagePreview from "./ResumePreview/LanguagePreview";

function ResumePreview() {
  const { printEl } = useResume();

  // const handlePrint = useReactToPrint({
  //   content: () => printEl.current,
  // });
  return (
    <div
      className="resume-preview flex flex-col justify-start items-center p-6 w-full h-full bg-white"
      ref={printEl}
    >
      <AboutPreview />
      <SkillsPreview />
      <EducationPreview />
      <ProjectPreview />
      <WorkPreview />
      <LanguagePreview />
      {/* <button onClick={handlePrint}>Download</button> */}
    </div>
  );
}

export default ResumePreview;
