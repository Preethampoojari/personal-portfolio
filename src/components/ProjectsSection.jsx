import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project Management App",
    description:
      "Full-stack project management app built with Next.js and Node.js, featuring task management, role-based access, analytics dashboards, and AWS deployment.",
    image: "/projects/project1.png",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    demoUrl: "https://main.dd65bwdgahcec.amplifyapp.com/",
    githubUrl: "https://github.com/Preethampoojari/project-management",
  },
  {
    id: 2,
    title: "notNotion – Productivity App",
    description:
      "Productivity app for notes, tasks, and budgeting with offline support, built using JavaScript, HTML, CSS, and Firebase.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "HTML", "CSS", "Firebase"],
    demoUrl: "https://notnotion-p-js.netlify.app/",
    githubUrl: "https://github.com/Preethampoojari/notNotion-project-js-public",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "Personal portfolio website built to showcase my projects, skills, and experience using React and Tailwind CSS, with a focus on responsive design and performance.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS"],
    demoUrl:
      "https://personal-portfolio-mhe2dv1zy-preethams-projects-491e4080.vercel.app/",
    githubUrl: "https://github.com/Preethampoojari/personal-portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Preethampoojari"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
