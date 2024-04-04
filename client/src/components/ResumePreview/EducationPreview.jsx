import { useResume } from "../../Context";

function EducationPreview() {
  const { educationList } = useResume();
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full break-all text-center pb-4">
      <p className="text-lg leading-5 font-bold">Education</p>
      <span className="w-full my-1 border border-black"></span>
      <div className="flex flex-wrap gap-2 w-full text-gray-600">
        {educationList.map((education, idx) => {
          const { university, major, grade, start, end, description } =
            education;

          return (
            <div
              key={idx}
              className="flex flex-col justify-start items-start pb-4 w-full"
            >
              <div className="flex justify-between w-full">
                <p className="text-[16px] leading-5 font-bold">
                  {university ? university : "University or College Name"}
                </p>
                <div className="flex gap-3 text-[16px] leading-5 font-semibold pb-[6px]">
                  <p>{start ? start : "From"}</p>
                  <span>-</span>
                  <p>{end ? end : "To"}</p>
                </div>
              </div>
              <div className="flex justify-between w-full pb-[6px]">
                <p>{major ? major : "Major"}</p>
                <p>{grade ? grade : "Grade"}</p>
              </div>
              <p className="pl-2">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationPreview;
