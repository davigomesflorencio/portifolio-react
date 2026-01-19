import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-[25px]">
						<div className="flex fixed border border-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)] top-[4vh] z-[100] lg:z-[999]">
							<Logo width={46} />
						</div>
					</div>

					<div className="flex flex-col h-full m-0 pt-[120px] max-sm:pt-[60px] ">
						<div className="flex flex-col lg:flex-row">
							<div className="lg:basis-[900px] lg:order-2">
								<div className="title !w-full">
									{INFO.about.title}
								</div>

								<div className="subtitle !w-[80%] max-lg:pt-5">

									Desenvolvedor Pleno com foco em Android e tecnologias móveis, especializado em Kotlin, Java e Flutter.

									<br /><br />
									Tenho experiência sólida no desenvolvimento de aplicações nativas para Android e wearables, utilizando Jetpack Compose, MVVM, Retrofit e Samsung Health SDK, além de implementar práticas de CI/CD, monitoramento e análise de dados para garantir alta qualidade e performance.

									<br /><br />
									Complemento minha atuação no mobile com desenvolvimento Back-End em Spring Boot (Java) e Python (FastAPI/Flask), criando APIs RESTful escaláveis e microsserviços com Docker e Kubernetes.

									<br /><br />Possuo conhecimentos em análise de dados com Python, processamento de sinais fisiológicos com NeuroKit e aplicação de Teoria dos Grafos em soluções de conectividade e otimização.
								</div>
							</div>

							<div className="flex flex-col lg:basis-[300px] lg:order-1 mr-9 mb-9">
								<div className="w-[370px] max-sm:w-[80%] pb-10 lg:pb-0">
									<div className="inline-block overflow-hidden w-full rounded-[10%] rotate-3">
										<img
											src="support.png"
											alt="about"
											className="block w-full"
										/>
									</div>
								</div>

								<div className="hidden lg:block pt-[50px] pb-[50px]">
									<Socials />
								</div>
							</div>
						</div>
						<div className="lg:hidden pt-[30px] flex">
							<Socials />
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

export default About;
