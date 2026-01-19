import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myArticles[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="flex justify-start pt-[25px]">
						<div className="flex fixed border border-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)] top-[4vh] z-[999]">
							<Logo width={46} />
						</div>
					</div>

					<div className="flex flex-row h-full m-0 pt-[120px]">
						<div className="pt-[68px] pr-[50px] w-10 h-10 max-sm:hidden">
							<img
								src="../back-button.png"
								alt="back"
								className="w-[50px] rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)] cursor-pointer"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="w-4/5 pt-[30px] max-sm:w-full">
							<div className="flex items-center h-[22px] border-l-2 border-quaternary text-tertiary text-base">
								<div className="font-primary pl-[15px]">
									{article().date}
								</div>
							</div>

							<div className="title !w-full pt-[50px] pb-[50px]">
								{article().title}
							</div>

							<div className="pb-20 text-base leading-[30px] font-sans text-[#52525b]">
								<div style={eval(`({ ${article().style.replace(/;/g, ',').replace(/:/g, ': "').replace(/,/g, '", ').replace(/(\w+):/g, (m, p1) => p1.replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + ':') + '"' } })`)}>
									{article().body}
								</div>
							</div>
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

export default ReadArticle;
