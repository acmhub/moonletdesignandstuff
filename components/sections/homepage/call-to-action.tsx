import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import AnimateSectionTitle from "../../animate/section-title";

function CallToAction() {
	const { t } = useTranslation("home");
	return (
		<section className="section-spacing bg-light">
			<div className="container">
				<h2 className="text-center mb-8">
					<AnimateSectionTitle>
						<span className="block font-montserrat text-xl mb-2">{t("cta.ready")}</span>
						<span className="block font-signature text-6xl lg:text-6xl">{t("cta.process")}</span>
					</AnimateSectionTitle>
				</h2>

				<p className="block-text">{t("cta.description")}</p>

				<Link
					href="/contact"
					className="font-montserrat normal-case text-sm font-normal button block w-fit mx-auto bg-mauve hover:bg-beige transition-all text-white mt-10"
				>
					{t("cta.letsdothis")}
				</Link>
			</div>
		</section>
	);
}

export default CallToAction;
