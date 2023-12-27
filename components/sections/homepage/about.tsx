import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "next-i18next";
import AnimateSectionTitle from "../../animate/section-title";

function About() {
	const { t } = useTranslation("home");

	return (
		<section className="section-spacing bg-light py-16">
			<div className="container max-w-regular text-center">
				<AnimateSectionTitle>
					<h2 className="font-signature mb-2">{t("about.hello")}</h2>
					<p className="font-montserrat text-xl">{t("about.imdiana")}</p>
				</AnimateSectionTitle>

				<p className="font-taviraj my-8">{t("about.description")}</p>

				<Link href="/about" className="font-montserrat normal-case inline-flex items-center group">
					{t("about.learnmore")}
					<HiOutlineArrowLongRight className="h-6 w-6 ml-2 mb-0.5 text-beige arrow-hover" />
				</Link>
			</div>
		</section>
	);
}

export default About;
