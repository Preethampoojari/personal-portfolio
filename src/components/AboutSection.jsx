import { Code, Server, Toolbox } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Web Developer (Fresher)
            </h3>

            <p className="text-muted-foreground">
              I’m a Full-Stack Web Developer skilled in building responsive and
              scalable web applications using React, Next.js, Node.js,
              Express.js, PostgreSQL, and MongoDB.
            </p>

            <p className="text-muted-foreground">
              I have hands-on experience through personal projects, where I
              worked on both frontend interfaces and backend APIs, focusing on
              clean code, performance, and usability.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving problems, debugging applications, and continuously
              learning modern web technologies. I’m eager to contribute to
              collaborative engineering teams and grow as a software developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1rL0txD-9RgaCxVjuMUzuKkoLTFh6F1t8/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web applications using React, Next.js,
                    HTML, CSS, and Tailwind CSS through hands-on projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend & APIs</h4>
                  <p className="text-muted-foreground">
                    Developing REST APIs using Node.js, Express.js, and
                    integrating databases like PostgreSQL and MongoDB.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Toolbox className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Tools & Deployment</h4>
                  <p className="text-muted-foreground">
                    Experience with Git, GitHub, Firebase, AWS basics, and
                    deploying applications through project-based learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
