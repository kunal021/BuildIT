import ResumePreview from "./ResumePreview";
import Dashboard from "./dashboard/Dashboard";
import { useResume } from "../Context";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import download from "./assests/download.svg";

function Resume() {
  const { printEl } = useResume();
  const handlePrint = useReactToPrint({
    content: () => printEl.current,
  });
  return (
    <div className="flex h-[34rem]">
      <Dashboard />
      <div className="flex justify-center items-center scrollbar overflow-auto bg-white mt-10 mx-4 w-[70%] rounded-xl border-2 h-full border-transparent">
        <ResumePreview />
      </div>
      <button
        onClick={handlePrint}
        className="absolute flex gap-2 items-center top-0 right-0 mt-14 mr-20 text-lg font-medium text-white bg-black/15 hover:bg-black/40 duration-1000 rounded-full border-2 border-transparent px-3 py-1"
      >
        <img src={download} alt="" className="h-6 w-6" />
        <span>Download</span>
      </button>
      <Link
        to="/instruction"
        className="absolute flex gap-2 items-center top-0 right-0 mt-2 mr-20 text-lg font-medium text-white bg-black/15 hover:bg-black/40 duration-1000 rounded-full border-2 border-transparent px-3 py-1"
      >
        Download Instruction
      </Link>
    </div>
  );
}

export default Resume;
