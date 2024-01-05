import { FolderIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';
import { projects } from "./data";
import "../styles/width.css";
import "../styles/Projects.css";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseOverlay = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects-title text-gray-400 bg-white body-font relative">
            <div className="responsive-width px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <FolderIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-black">
                        Projects
                    </h1>
                    <p className="projects-text lg:w-2/3 mx-auto leading-relaxed text-base sm:text-xl text-l text-black">
                        The following are samples of projects that I have worked on in the past.
                        Clicking on a project will provide a description.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <div
                            key={project.image}
                            className="sm:w-1/2 md:w-full lg:w-full p-4 cursor-pointer"
                            onClick={() => handleClick(project)}
                        >
                            <div className="relative">
                                <div className="overlay-text absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900">
                                    <h1 className="title-font lg:text-2xl text-xl font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <h2 className="text-md lg:text-lg title-font font-medium text-blue-400 mb-3">
                                        {project.subtitle}
                                    </h2>
                                    <h2 className="text-sm lg:text-lg title-font font-medium text-gray-400">
                                        {project.summary}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProject && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 p-8 rounded-md max-w-3xl w-full h-full overflow-y-auto relative">
                        <button
                            className="absolute top-2 right-2 bg-red-700 px-3 text-white rounded hover:text-gray-700 cursor-pointer text-2xl"
                            onClick={handleCloseOverlay}
                        >
                            &times; {/* X character */}
                        </button>
                        <h1 className="lg:text-3xl text-xl font-semibold text-center text-white mb-3">{selectedProject.title}</h1>
                        <h2 className="text-md lg:text-lg title-font font-medium text-center text-blue-400 mb-3">{selectedProject.subtitle}</h2>
                        <img
                            alt={selectedProject.alt}
                            className="object-cover object-center mb-4 rounded-md"
                            src={selectedProject.src}
                        />
                        <div>
                            <h2 className="text-md lg:text-xl title-font font-medium text-center text-white mb-3">Project Description</h2>
                            <p className="text-base text-gray-400 leading-relaxed mb-3">{selectedProject.description}</p>
                            <div className="flex flex-col items-center">
                                <h2 className="text-md lg:text-xl title-font font-medium text-white mb-3">Repository Link</h2>
                                <SocialIcon className="items-center" url={selectedProject.link} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}