import { useResume } from "../../Context";

function ProjectPreview() {
  const { projectList } = useResume();
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full break-all text-center pb-4">
      <p className="text-lg leading-5 font-bold">Project</p>
      <span className="w-full my-1 border border-black"></span>
      <div className="flex flex-wrap gap-2 w-full text-gray-600">
        {projectList.map((project, idx) => {
          const { name, description, url } = project;

          return (
            <div
              key={idx}
              className="flex flex-col justify-start items-start pb-4 w-full"
            >
              <div className="flex justify-between w-full">
                <a href={url} target="_blank">
                  <p className="text-[16px] leading-5 font-bold">
                    {name ? name : "Project Name"}
                  </p>
                </a>
              </div>
              <p className="pl-2">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectPreview;
