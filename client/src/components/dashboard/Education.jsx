import { useResume } from "../../Context";

function Education() {
  const { educationList, setEducationList } = useResume();

  const addMore = () => {
    setEducationList([...educationList, educationList]);
  };

  const deleteEducation = (idx) => {
    if (idx !== 0) {
      const updatedEducationList = educationList.filter((edu, i) => idx !== i);
      setEducationList(updatedEducationList);
    }
  };

  const handleChange = (e, idx) => {
    const { name, value } = e.target;
    const updateEducationList = educationList.map((edu, i) =>
      idx === i ? Object.assign(edu, { [name]: value }) : edu
    );
    setEducationList(updateEducationList);
  };

  return (
    <div>
      {educationList.map((education, index) => (
        <div key={index} className="border-2 rounded-lg border-black p-4 mb-3">
          <div className="flex flex-col gap-2">
            <input
              onChange={(e) => handleChange(e, index)}
              placeholder="University Name"
              name="university"
              type="text"
              required
              className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
            />
            <p className="px-3 py-2 text-2xl font-medium text-gray-600">
              From:{" "}
              <input
                onChange={(e) => handleChange(e, index)}
                placeholder="From"
                name="start"
                type="date"
                className="px-3 py-2 text-xl font-normal text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
              />
            </p>
            <p className="px-3 py-2 text-2xl font-medium text-gray-600">
              To:{" "}
              <input
                onChange={(e) => handleChange(e, index)}
                placeholder="To"
                name="end"
                type="date"
                className="px-3 py-2 text-xl font-normal text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
              />
            </p>
            <input
              onChange={(e) => handleChange(e, index)}
              placeholder="Major"
              name="major"
              type="text"
              className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
            />
            <input
              onChange={(e) => handleChange(e, index)}
              placeholder="Grade"
              name="grade"
              type="text"
              className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
            />
            <textarea
              onChange={(e) => handleChange(e, index)}
              placeholder="Description"
              name="description"
              rows={4}
              className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
            />

            {index !== 0 && (
              <button
                onClick={() => deleteEducation(index)}
                className="text-red-500 font-medium text-center px-4 py-2 border-2 rounded-lg border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}

      {educationList.length < 2 && (
        <button
          onClick={addMore}
          className="text-xl w-full font-medium text-blue-600 hover:text-white text-center px-4 py-2 border-2 rounded-lg hover:bg-blue-600 border-blue-600 transition-all duration-300 ease-in-out"
        >
          Add More
        </button>
      )}
    </div>
  );
}

export default Education;
