import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

const Socials = () => {
	return (
		<div className="flex flex-col gap-4">
			
			<div className="flex items-center">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer" className="flex items-center no-underline text-secondary hover:text-primary transition-colors duration-200">
					<div className="text-[20px] mr-4">
						<FontAwesomeIcon
							icon={faGithub}
						/>
					</div>
					<div className="text-[14px] font-bold">Siga no GitHub</div>
				</a>
			</div>

			<div className="flex items-center">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
					className="flex items-center no-underline text-secondary hover:text-primary transition-colors duration-200"
				>
					<div className="text-[20px] mr-4">
						<FontAwesomeIcon
							icon={faLinkedin}
						/>
					</div>
					<div className="text-[14px] font-bold">Siga no LinkedIn</div>
				</a>
			</div>

			<div className="flex items-center">
				<a
					href={INFO.socials.instagram}
					target="_blank"
					rel="noreferrer"
					className="flex items-center no-underline text-secondary hover:text-primary transition-colors duration-200"
				>
					<div className="text-[20px] mr-4">
						<FontAwesomeIcon
							icon={faInstagram}
						/>
					</div>
					<div className="text-[14px] font-bold">Siga Instagram</div>
				</a>
			</div>

			<div className="pt-4 border-t border-quaternary">
				<div className="flex items-center">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
						className="flex items-center no-underline text-secondary hover:text-primary transition-colors duration-200"
					>
						<div className="text-[20px] mr-4">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="text-[14px] font-bold">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
