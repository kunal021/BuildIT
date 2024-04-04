import { useResume } from "../../Context";

function LanguagePreview() {
  const { language } = useResume();
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full pb-4 break-all text-center">
      <p className="text-lg leading-5 font-bold">Language</p>
      <span className="w-full my-1 border border-black"></span>
      <div className="flex flex-wrap gap-2 w-full text-gray-600">
        {language.map((lang, idx) => (
          <div key={idx} className="break-words">
            {lang.name}
            {idx !== language.length - 1 && ","}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguagePreview;
