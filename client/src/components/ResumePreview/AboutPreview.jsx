import { useResume } from "../../Context";
import emmaiIcon from "../assests/email.svg";
import phoneIcon from "../assests/phone.svg";
import locationIcon from "../assests/location.svg";

function AboutPreview() {
  const { about } = useResume();
  return (
    <div className="flex flex-col justify-start items-center w-full break-all text-center pb-4">
      <div className="flex flex-col items-center">
        <p className="text-[24px] text-black font-bold leading-5 pb-[6px]">
          {about.name ? about.name : "Your Name"}
        </p>
        <p className="text-sm text-gray-600 leading-6 font-normal pb-[6px]">
          {about.role ? about.role : "Your Role"}
        </p>
        <p className="text-sm text-gray-600 leading-6 font-normal pb-4">
          {about.description ? about.description : "Summary"}
        </p>
        {/* <p className="text-sm text-gray-600 leading-6 font-normal pb-4">
          {about.description.length}
        </p> */}
      </div>
      <span className="w-full border border-black"></span>
      <div className="flex w-full py-2 gap-4 text-gray-600 justify-between">
        <p className="flex flex-row justify-center items-center gap-1">
          <img src={emmaiIcon} className="h-4 w-4" />
          {about.email ? about.email : "your@email.com"}
        </p>
        <p className="flex flex-row justify-center items-center gap-1">
          <img src={phoneIcon} className="h-4 w-4" />
          {about.mobile ? about.mobile : "+91 0000000000"}
        </p>
        <p className="flex flex-row justify-center items-center gap-1">
          <img src={locationIcon} className="h-4 w-4" />
          {about.address ? about.address : "CA, USA"}
        </p>
      </div>
      <span className="w-full border border-black"></span>
    </div>
  );
}

export default AboutPreview;
