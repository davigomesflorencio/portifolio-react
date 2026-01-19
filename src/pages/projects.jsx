import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";

import SEO from "../data/seo";
import INFO from "../data/user";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projetos | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-[25px]">
						<div className="flex fixed border border-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)] top-[4vh] z-[999]">
							<Logo width={46} />
						</div>
					</div>
					<div className="flex flex-col h-full m-0 pt-[120px]">
						<div className="title !w-full">
							Principais projetos do meu GitHub:
						</div>

						<div className="pt-10">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
