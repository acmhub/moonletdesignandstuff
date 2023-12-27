import { useTranslation } from "next-i18next";
import React from "react";
import AnimateSectionTitle from "../../animate/section-title";

const portfolios = [
	{
		label: "Instagram",
		path: "https://www.instagram.com/moonletdesignstuff/",
	},
	{
		label: "Dribbble",
		path: "https://dribbble.com/dianapreda",
	},
	{
		label: "Behance",
		path: "https://www.behance.net/moonletdesignstuff",
	},
];

function Others() {
	const { t } = useTranslation("portfolio");

	return (
		<section className="relative section-spacing">
			<div
				className="absolute top-0 left-0 h-full w-full bg-cover bg-bottom bg-fixed z-0"
				style={{
					backgroundImage: "url(/images/fillers/desk2.webp)",
				}}
			/>

			<div className="relative container">
				<h2 className="text-center mb-12">
					<AnimateSectionTitle>
						<span className="block font-montserrat text-xl">{t("checkoutour")}</span>
						<span className="block font-signature text-6xl text-center">{t("otherportfolios")}</span>
					</AnimateSectionTitle>
				</h2>

				<div className="flex flex-col md:flex-row items-center justify-center lg:space-x-20 gap-10">
					{portfolios.map(({ label, path }) => (
						<a
							className="relative flex flex-col items-center justify-center group"
							target="_blank"
							rel="noopener noreferrer"
							href={path}
							key={label}
						>
							<div className="font-montserrat text-beige group-hover:text-green text-center text-xl uppercase font-medium tracking-widest duration-150">
								<p>{label}</p>
							</div>

							<div className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-48 bg-beige opacity-0 group-hover:opacity-100 duration-150" />
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default Others;
