import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";


const NavBar = (props) => {
	const { active } = props;
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme === "dark") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDarkMode(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDarkMode(true);
		}
	};


	return (
		<React.Fragment>
			<div className="flex justify-center items-center m-0">
				<nav className="flex justify-center items-center fixed top-[3vh] z-[999] max-sm:left-[10%] max-sm:w-[80%] max-sm:text-[80%]">
					<div className="flex items-center bg-white dark:bg-[#27272a] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-[40px] px-2 transition-colors duration-300">
						<ul className="flex justify-between items-center list-none ml-[16px] mr-[20px] my-[10px] gap-6">

							<li
								className={`font-bold text-[90%] ${active === "home" ? "text-accent" : "text-primary dark:text-[#f4f4f5] hover:text-accent transition-colors duration-300"}`}

							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={`font-bold text-[90%] ${active === "about" ? "text-accent" : "text-primary dark:text-[#f4f4f5] hover:text-accent transition-colors duration-300"}`}

							>
								<Link to="/about">Sobre</Link>
							</li>
							<li
								className={`font-bold text-[90%] ${active === "projects" ? "text-accent" : "text-primary dark:text-[#f4f4f5] hover:text-accent transition-colors duration-300"}`}

							>
								<Link to="/projects">Projetos</Link>
							</li>

							<li
								className={`font-bold text-[90%] ${active === "contact" ? "text-accent" : "text-primary dark:text-[#f4f4f5] hover:text-accent transition-colors duration-300"}`}
							>
								<Link to="/contact">Contato</Link>
							</li>
						</ul>
						<div
							className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f4f4f5] dark:bg-[#3f3f46] cursor-pointer hover:bg-quaternary dark:hover:bg-[#52525b] transition-all duration-300 ml-2"
							onClick={toggleTheme}
						>
							<FontAwesomeIcon
								icon={isDarkMode ? faSun : faMoon}
								className={`${isDarkMode ? "text-yellow-400" : "text-secondary"}`}
							/>
						</div>
					</div>

				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
