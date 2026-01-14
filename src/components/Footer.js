import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 dark:border-b-1 dark:border-gray-700">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="font-medium text-sm text-gray-500">
            © {new Date().getFullYear()} {" "}
            <Link to="/" className="font-bold text-black dark:text-white">CineWave</Link>. 
            All Rights Reserved.
        </span>
        <span className="text-sm text-gray-500">
            <span className="font-medium text-gray-700 dark:text-gray-300"> Built by TABORA FRANCIS </span>
        </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <NavLink 
                        to="https://codepen.io/Francis-tabora" target="blank_" rel="noreferrer" className="me-4 md:me-6">
                        Codepen
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="https://github.com/Stuna123?tab=repositories" target="_blank" rel="noreferrer" className="me-4 md:me-6">
                            GitHub
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="https://www.linkedin.com/in/francis-tabora-afata/" target="_blank" rel="noreferrer" className="me-4 md:me-6">
                        LinkedIn
                    </NavLink>
                </li>
            </ul>
        </div>
    </footer>
  )
}
