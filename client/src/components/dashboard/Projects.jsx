import { useResume } from "../../Context";

function Projects() {
  const { projectList, setProjectList } = useResume();

  const addMore = () => {
    setProjectList([...projectList, projectList]);
  };

  const deleteProject = (idx) => {
    const updateProjectList = projectList.filter((edu, i) => idx !== i);
    setProjectList(updateProjectList);
  };

  const handleChange = (e, idx) => {
    const { name, value } = e.target;
    const updateProjectList = projectList.map((project, i) =>
      idx === i ? Object.assign(project, { [name]: value }) : project
    );
    setProjectList(updateProjectList);
  };

  return (
    <div>
      {projectList.map((project, index) => (
        <div key={index} className="border-2 rounded-lg border-black p-4 mb-3">
          <div className="flex flex-col gap-2">
            <input
              onChange={(e) => handleChange(e, index)}
              placeholder="Project Name"
              name="name"
              type="text"
              required
              className="px-3 py-2 text-xl text-black hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg border-2 border-gray-400"
            />
            <input
              onChange={(e) => handleChange(e, index)}
              placeholder="Url"
              name="url"
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

            <button
              onClick={() => deleteProject(index)}
              className="text-red-500 font-medium text-center px-4 py-2 border-2 rounded-lg border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={addMore}
        className="text-xl w-full font-medium text-blue-600 hover:text-white text-center px-4 py-2 border-2 rounded-lg hover:bg-blue-600 border-blue-600 transition-all duration-300 ease-in-out"
      >
        Add More
      </button>
    </div>
  );
}

export default Projects;
