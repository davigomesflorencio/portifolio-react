import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";
import Card from "../common/card";

const Academic = () => {
	return (
		<div className="academic">
			<Card
				icon={faBriefcase}
				title="Formação Acadêmica"
				body={
					<div className="flex flex-col w-[100%] gap-6 mb-8 ">
						{INFO.academic.map((work, index) => (
							<div className="flex items-center w-full" key={index}>
								<img
									src={work.logo}
									alt={work.title}
									className="h-[30px] w-[30px] rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.1)]"
								/>
								<div className="flex flex-col ml-4 mr-auto">
									<div className="text-[15px] font-bold text-secondary">
										{work.title}
									</div>
									<div className="text-[15px] text-secondary">
										{work.duration}
									</div>
									<div className="text-[15px] font-bold text-secondary">
										{work.institution}
									</div>
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Academic;