import { useTranslation } from "next-i18next";

function CallToAction() {
	const { t } = useTranslation("services");
	return (
		<section className="section-spacing bg-beige">
			<div className="container">
				<h2 className="font-montserrat text-center text-xl mb-10">{t("cta.doesntfit")}</h2>

				<p className="block-text">{t("cta.writeus")}</p>

				<h2 className="text-center font-signature text-6xl capitalize mb-10 mt-6">{t("cta.other")}</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{[
						"cta.socialmedia",
						"cta.illustration",
						"cta.presentation",
						"cta.poster",
						"cta.event",
						"cta.brochure",
						"cta.book",
						"cta.others",
					].map((e) => (
						<div
							className="font-montserrat text-white text-center transition hover:text-green cursor-default"
							key={e}
						>
							{t(e)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default CallToAction;
