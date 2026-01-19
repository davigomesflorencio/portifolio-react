import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contato | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="flex justify-start pt-[25px]">
						<div className="flex fixed border border-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)] top-[4vh] z-[999]">
							<Logo width={46} />
						</div>
					</div>

					<div className="flex flex-col justify-around mt-[120px]">
						<div className="title !w-full">
							Vamos conversar: Formas de entrar em contato comigo
						</div>

						<div className="subtitle !w-full">
							
							Obrigado pelo seu interesse em entrar em contato comigo.
							
							<br/><br/>
							Agradeço seus comentários, perguntas e sugestões. Se você tiver alguma pergunta ou comentário específico, sinta-se à vontade para me enviar um e-mail diretamente para {" "}
							<a href={`mailto:${INFO.main.email}`} className="text-secondary hover:text-primary transition-colors duration-200">
							{INFO.main.email}
							</a>
							. 
							
							<br/><br/>
							Faço o possível para responder a todas as mensagens em até 24 horas, embora possa levar mais tempo durante períodos de maior movimento.
							

							<br/><br/>
							Como alternativa, você pode usar o formulário de contato em meu site para entrar em contato. Basta preencher os campos obrigatórios e entrarei em contato o mais breve possível. Por fim, se preferir se conectar nas redes sociais, você pode me encontrar no Instagram:
<br/><br/>
							<a href={INFO.socials.instagram} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors duration-200">
							{INFO.socials.instagram}
							</a>. 
							
							<br/><br/>Publico atualizações regularmente e interajo com meus seguidores por lá, então não hesite em entrar em contato.

							Agradeço novamente pelo seu interesse e aguardo seu contato!
						</div>
					</div>

					<div className="flex flex-col mt-20">
						<div className="flex justify-start items-center">
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

export default Contact;
