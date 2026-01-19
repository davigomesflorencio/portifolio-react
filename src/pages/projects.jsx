import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projetos | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-[25px]">
						<div className="flex fixed border border-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)] top-[4vh] z-[999]">
							<Logo width={46} />
						</div>
					</div>
					<div className="flex flex-col h-full m-0 pt-[120px]">
						<div className="title !w-full">
							Principais projetos e experiências:
						</div>

						<div className="subtitle !w-[80%] mt-[25px]">
							Insight Data Science Lab – Desenvolvimento de aplicativos Android e para Samsung Galaxy Watch com integração a plataformas de saúde, processamento de dados fisiológicos e arquitetura modular com Jetpack Compose.

							<br/><br/>
							NEX2ME – Atuação como Full Stack (React/TypeScript + Node.js) em aplicações web escaláveis, com integração de APIs, autenticação e CI/CD.
							<br/><br/>
							Secretaria de Segurança Pública – Desenvolvimento de microsserviços com Spring Boot, Kafka, Docker e Kubernetes, além de arquitetura de API Gateway e CI/CD com GitLab/Jenkins.
							<br/><br/>
							Núcleo de Práticas : UFC Quixadá– Desenvolvimento full stack com Flutter, gerenciamento de estado (Provider/GetX), testes e CI/CD.
							<br/><br/>
							Sou movido por desafios técnicos e inovação, sempre em busca de aprendizado contínuo e colaboração em equipe. Aberto a oportunidades que valorizem versatilidade, impacto e crescimento conjunto.
						</div>

						<div className="pt-10">
							<AllProjects />
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

export default Projects;
