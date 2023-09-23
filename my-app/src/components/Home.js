import chad from "../chad.jpg"
import developer from "../developer.svg"
import Skills from "./Skills"
import { Outlet, Link } from "react-router-dom";
import "../styles/NavBar.css";
import "../styles/Home.css"
import "../styles/width.css"
import React from "react";
import {Cog6ToothIcon} from "@heroicons/react/20/solid";
import { TypeAnimation } from 'react-type-animation';


const Home = () => {

    return(
        <section id="home">
            <div className="responsive-width mx-auto flex px-10 py-5 md:flex-row flex-col items-center">
                <div className="landing-text lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
                        Hi, my name is Chad.<br/>
                    </h1>
                    <TypeAnimation className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800 whitespace-nowrap "
                        sequence={[
                            "I'm a mechanic.",
                            1000,
                            "I'm a software developer.",
                            1000,
                            "I'm a design enthusiast.",
                            1000,
                            "I'm an innovator.",
                            1000,
                            "I'm an aspiring engineer.",
                            1000,

                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                    />
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
                        Welcome to my coding journey.<br/>
                    </h1>
                    <p className="text-gray-500 mb-8 leading-relaxed text-xl md:w-full w-3/4">
                        Starting in the heavy equipment industry, I have transitioned into the captivating world of software engineering. My experiences as an apprentice have instilled in me: problem-solving abilities, a collaborative skill set, and a keen eye for detail. Such qualities facilitate my commitment to crafting innovative software solutions for society. Let's innovate together!
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/Resume_Chad_Holst.pdf"
                            download="Resume_Chad_Holst.pdf"
                            className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-slate-800 rounded text-lg">
                            Download Resume
                        </a>
                        <Link
                            to="/projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-blue-600 rounded text-lg">
                            View My Work
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex text-white bg-blue-600 border-0 ml-4 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-slate-800 rounded text-lg">
                            Let's Collaborate
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center"
                        alt="Chad"
                        src={developer}
                    />
                </div>
            </div>
            <div className="responsive-width landing-text mx-auto flex px-10 py-5 flex-col md:flex-col lg:flex-col items-center">
                <Cog6ToothIcon className="mx-auto inline-block w-10 mb-4 text-gray-400" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                    Skills
                </h1>
                <p className="projects-text lg:w-2/3 mx-auto leading-relaxed text-base text-xl text-center text-black">
                    My past experiences have provided opportunities to learn the following technologies
                </p>
            </div>
            <Skills />
        </section>
    )
}
export default Home;