import { useResume } from "../../Context";

function SkillsPreview() {
  const { skills } = useResume();
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full pb-4 break-all text-center">
      <p className="text-lg leading-5 font-bold">Skills</p>
      <span className="w-full my-1 border border-black"></span>
      <div className="flex flex-wrap gap-2 w-full text-gray-600">
        {skills.map((skil, idx) => (
          <div key={idx} className="break-words">
            {skil.name}
            {idx !== skills.length - 1 && ","}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
