import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="h-full rounded-[20px] transition-all duration-200 ease-in-out hover:bg-[#fafafa]">
				<Link to={link}>
					<div className="flex flex-col h-full p-8">
						<div className="w-10 h-10 mb-4">
							<img src={logo} alt="logo" className="w-full h-full object-contain" />
						</div>
						<div className="text-[17px] font-bold text-primary mb-4">{title}</div>
						<div className="text-[14px] leading-[24px] text-secondary text-justify mb-8">{description}</div>
						<div className="flex items-center gap-2 text-primary font-bold text-[14px] mt-auto">
							<div className="text-[12px]">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="hover:text-accent">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
