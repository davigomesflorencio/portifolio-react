import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import Tecnology from "../components/homepage/tecnnology";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="flex justify-start items-center pt-[130px]">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="pt-[25px]">
						<div className="flex flex-col lg:flex-row justify-between items-center">
							<div className="flex flex-col items-start lg:order-2">
								<div className="title !w-[100%] lg:!w-[85%] mt-5 lg:mt-0">
									{INFO.homepage.title}
								</div>

								<div className="subtitle !w-[100%] lg:!w-[85%] mt-[10px] lg:mt-[25px]">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="flex items-center w-full lg:w-auto order-1 lg:order-2">
								<div className="w-[370px] h-[370px] pt-[50px] pb-[50px] lg:p-0 ml-[10px] lg:ml-0">
									<div className="overflow-hidden rounded-[10%] rotate-3">
										<img
											src="homepage.jpg"
											alt="about"
											className="w-full"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-start items-center pt-[30px]">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="pr-5 text-[25px] text-secondary hover:text-primary transition-colors duration-200"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="pr-5 text-[25px] text-secondary hover:text-primary transition-colors duration-200"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="pr-5 text-[25px] text-secondary hover:text-primary transition-colors duration-200"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="pr-5 text-[25px] text-secondary hover:text-primary transition-colors duration-200"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="pr-5 text-[25px] text-secondary hover:text-primary transition-colors duration-200"
								/>
							</a>
						</div>

						<div className="basis-[300px] lg:basis-auto pt-10">
							<AllProjects />
						</div>

						<div className="flex flex-col lg:flex-row">
							<div className="basis-[900px] lg:basis-auto pt-[10px] ml-[30px]">
								<Works />
							</div>

							<div className="basis-[900px] lg:basis-auto pt-[30px] ml-[30px]">
								<Tecnology />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
