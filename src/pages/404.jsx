import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="overflow-hidden h-screen page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="flex justify-start pt-[25px]">
						<div className="flex fixed border border-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)] top-[4vh] z-[999]">
							<Logo width={46} />
						</div>
					</div>
					<div className="flex flex-col h-full m-0 pt-[120px]">
						<div className="fixed flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-[500px]:static max-[500px]:translate-none max-[500px]:w-full">
							<div className="font-secondary text-primary text-[80px] pt-[15px] font-bold max-[500px]:text-[50px]">
								Oops! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="text-secondary text-[2rem] my-[2rem] text-center max-[500px]:w-full max-[500px]:text-[15px] max-[500px]:mt-[10px] max-[500px]:-ml-[5px] max-[500px]:mr-[32px]">
								We can't seem to find the page you're looking
								for.
								<br />
								The requested URL "{window.location.href}" was
								not found on this server.
							</div>
							<a href="/" className="text-[1.5rem] no-underline text-white bg-accent py-4 px-8 rounded-[50px] transition-all duration-300 ease-in-out hover:bg-white hover:text-accent hover:shadow-[2px_2px_8px_rgba(0,0,0,0.3)] max-[500px]:text-[15px] max-[500px]:p-[15px]">
								Go back to the home page
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
