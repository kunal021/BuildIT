import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useResume } from "../../Context";

function Language() {
  const { language, setLanguage } = useResume();
  const [lang, setLang] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLanguage = {
      id: uuidv4(),
      name: lang,
    };
    setLanguage([...language, newLanguage]);
    setLang("");
  };

  // console.log(lang);
  // console.log(skills);

  const deleteSkill = (id) => {
    setLanguage(language.filter((elem) => elem.id !== id));
  };

  return (
    <div>
      <form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setLang(e.target.value)}
          value={lang}
          name="lang"
          id="lang"
          type="text"
          placeholder="Language"
          required
          className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
        />
        <button className="text-xl font-medium text-blue-600 hover:text-white text-center px-4 py-2 border-2 rounded-lg hover:bg-blue-600 border-blue-600 transition-all duration-300 ease-in-out">
          Add
        </button>
      </form>
      <div className="flex flex-wrap justify-center items-center text-center gap-3 mt-4 px-1 py-2 border-2 rounded-lg border-black">
        {language.length > 0
          ? language.map((skil, idx) => (
              <div
                key={idx}
                className="flex flex-row gap-2 text-black text-lg px-2 py-1 font-medium border-2 rounded-full border-transparent bg-blue-200"
              >
                <p>{skil.name}</p>
                <button
                  onClick={() => deleteSkill(skil.id)}
                  className="text-blue-600"
                >
                  X
                </button>
              </div>
            ))
          : "No Language"}
      </div>
    </div>
  );
}

export default Language;
