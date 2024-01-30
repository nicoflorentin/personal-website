import React from "react"
import Project from "../project/Project"

const projects = [
	{
		id: 1,
		title: "Primer Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		image: 'https://lsaglobal.com/wp-content/uploads/2020/05/Effective-Individual-Development-Plan.jpg',
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 2,
		title: "Segundo Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		image: 'https://lsaglobal.com/wp-content/uploads/2020/05/Effective-Individual-Development-Plan.jpg',
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 3,
		title: "Tercer Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		image: 'https://lsaglobal.com/wp-content/uploads/2020/05/Effective-Individual-Development-Plan.jpg',
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 4,
		title: "Cuarto Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		image: 'https://lsaglobal.com/wp-content/uploads/2020/05/Effective-Individual-Development-Plan.jpg',
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 5,
		title: "Quinto Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		image: 'https://lsaglobal.com/wp-content/uploads/2020/05/Effective-Individual-Development-Plan.jpg',
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
	{
		id: 6,
		title: "Sexto Proyecto",
		description: "Brief description of the project, explaining processes and functionalities",
		image: 'https://lsaglobal.com/wp-content/uploads/2020/05/Effective-Individual-Development-Plan.jpg',
		githubURL: "http://example.com",
		deployURL: "http://example.com",
	},
]

const Projects = () => {
  const ProjectsMap = () => {
    return projects.map(project => <Project key={project.id} {...project} />);
  };

  return (
    <section className="h-[100vh] ">
      <h2
        className="text-primary text-3xl font-bold
                   text-center
                   p-10"
      >
        WORK
      </h2>
      <div
        className="flex flex-col gap-8
                   font-consolas
									 h-[80vh] overflow-y-auto" // Añade esta línea para permitir el desplazamiento vertical
      >
        <ProjectsMap />
      </div>
    </section>
  );
};

export default Projects;