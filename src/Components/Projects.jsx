import { PROJECTS } from "../constants";


const Projects = () => {
  return (
    <div className="border-b-2 border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
        Projects
      </h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                height={150}
                width={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-4 font-semibold">{project.title}</h6>
              <p >{project.description}</p>
              {project.technologies.map((tech,index)=>(
                    <span key={index} className="mr-2 rounded px-2 py-1 bg-neutral-900 text-sm font-medium text-purple-800">{tech}
                    </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
