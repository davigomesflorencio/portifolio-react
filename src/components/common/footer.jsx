import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col md:flex-row items-center justify-between pt-20 pb-10">
				<div className="md:order-1 mb-5 md:mb-0">
					<ul className="flex flex-wrap justify-center list-none p-0 m-0">
						<li className="mr-5 text-[14px] font-bold text-secondary hover:text-primary transition-colors duration-200">
							<Link to="/">Home</Link>
						</li>
						<li className="mr-5 text-[14px] font-bold text-secondary hover:text-primary transition-colors duration-200">
							<Link to="/about">Sobre</Link>
						</li>
						<li className="mr-5 text-[14px] font-bold text-secondary hover:text-primary transition-colors duration-200">
							<Link to="/projects">Projetos</Link>
						</li>
						
						<li className="mr-5 text-[14px] font-bold text-secondary hover:text-primary transition-colors duration-200">
							<Link to="/contact">Contatos</Link>
						</li>
					</ul>
				</div>

				<div className="md:order-2">
					<div className="text-[14px] text-tertiary">
						© 2026 Davi Gomes Florencio. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
