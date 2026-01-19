import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";
import Card from "../common/card";

const Tecnology = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Tecnologias Utilizadas"
				body={
					<div className="flex flex-col w-[100%] gap-6 mb-8 ">
						{INFO.tecnology.map((work, index) => (
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
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Tecnology;