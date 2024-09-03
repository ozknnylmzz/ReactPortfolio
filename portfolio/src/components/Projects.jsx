import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-12 flex flex-wrap lg:flex-nowrap lg:items-start lg:justify-start">
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:mr-20">
                    <img 
                    src={project.image} 
                    width={150}
                    height={150}
                    alt={project.title}
                    className="rounded lg:ml-auto lg:mr-4"
                    />
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:80}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4 lg:ml-20"> {/* lg:ml-4 updated to lg:ml-10 for more spacing */}
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 rounded bg-slate-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                    ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects;
