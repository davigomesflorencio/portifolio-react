import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="w-[90%] sm:w-full rounded-[20px] opacity-80 hover:opacity-100 hover:bg-[#fafafa] transition-all duration-300 ease-in-out">
				<div className="p-[30px]">
					<div className="text-tertiary text-[12px] mb-4 opacity-100">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="text-primary text-[16px] mb-4 font-bold opacity-100">
						{title}
					</div>
					<div className="text-secondary text-[12px] leading-relaxed opacity-100">
						{description}
					</div>
					<div className="pt-5 text-[15px] font-bold opacity-100">
						<Link to={link} className="text-accent no-underline">
							Read article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
