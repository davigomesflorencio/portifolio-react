import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";

import ContactForm from "../components/contact/contactForm";
import SEO from "../data/seo";
import INFO from "../data/user";

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

					<div className="flex flex-col justify-around mt-[120px] mb-9">
						<div className="title !w-full">
							Formas de entrar em contato comigo
						</div>

						<div className="subtitle !w-full">
							Agradeço seus comentários, perguntas e sugestões. Se você tiver alguma pergunta ou comentário específico, sinta-se à vontade para me enviar um e-mail diretamente para {" "}
							<a href={`mailto:${INFO.main.email}`} className="text-secondary hover:text-primary transition-colors duration-200">
								{INFO.main.email}
							</a>
							.


							<br /><br />
							Como alternativa, você pode usar o formulário de contato em meu site para entrar em contato. Basta preencher os campos obrigatórios e entrarei em contato o mais breve possível.

							<ContactForm />
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
