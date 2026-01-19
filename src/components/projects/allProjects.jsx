import React from "react";

import Project from "./project";

import INFO from "../../data/user";

const AllProjects = () => {
	return (
		<div className="flex flex-wrap items-stretch py-[30px] -mx-[35px]">
			{INFO.projects.map((project, index) => (
				<div className="w-full sm:w-1/2 md:w-1/3 box-border p-[10px] overflow-hidden" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
