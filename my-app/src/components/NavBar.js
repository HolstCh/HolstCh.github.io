import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import {ChevronRightIcon} from "@heroicons/react/24/solid";
import "../styles/NavBar.css"

function NavBar() {
    return (
        <header>
            <div className="flex-navbar">
                {/* <ChevronLeftIcon className="md:text-blue-600 w-14 h-12 ml-1 text-slate-900" /> */}
                <a href="#about" className="text-blue-600 name ml-3 text-3xl">
                    Chad Holst
                </a>
                <nav className="name md:text-xl md:mr-auto mr-12 md:ml-4 md:py-1 md:pl-4 md:border-white mr-3 flex flex-wrap text-base items-center">
                    <a href="#about" className="text-gray-400 ml-5 mr-7 hover:text-blue-600">
                        About Me
                    </a>
                    <a href="#projects" className="text-gray-400 mr-7 hover:text-blue-600">
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-400 mr-7 hover:text-blue-600">
                        Contact
                    </a>
                    {/* <span className="md:text-blue-600 md:text-5xl md:mb-4 text-slate-900">/</span> /*}
                    {/* <ChevronRightIcon className="md:text-blue-600 text-slate-900 w-14 h-12 mr-10 pr-3" /> */}
                </nav>
            </div>
        </header>
    );
}

export default NavBar