import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-400">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500">
            © 2030 {" "}
            <Link to="/" className="hover:underline text-black dark:text-white">Cinewave</Link>. All Rights Reserved.
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
                        to="https://www.linkedin.com/in/francis-tabora-afata/" target="blank_" rel="noreferrer" className="me-4 md:me-6">
                        LinkedIn
                    </NavLink>
                </li>
            </ul>
        </div>
    </footer>
  )
}
