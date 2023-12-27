import { useTranslation } from "next-i18next";
import AnimateSectionTitle from "../../animate/section-title";

function Details() {
	const { t } = useTranslation("contact");

	return (
		<section className="container text-white section-spacing pb-0">
			<div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
				<div>
					<AnimateSectionTitle>
						<h1 className="font-signature text-center lg:text-left text-6xl mb-5">
							{t("details.getintouch")}
						</h1>
					</AnimateSectionTitle>
					<p className="block-text lg:text-justify">{t("details.paragraph")}</p>
				</div>

				<div className="flex-1 lg:whitespace-nowrap">
					<AnimateSectionTitle>
						<div className="font-montserrat text-beige text-center lg:text-left mt-4 mb-[2.1rem]">
							{t("details.info")}
						</div>
					</AnimateSectionTitle>

					<div className="flex flex-col items-center lg:items-start tracking-widest text-center lg:text-left space-y-[0.75rem]">
						<div className="font-montserrat text-sm normal-case text-white font-normal">
							<span className="text-beige font-bold">{t("details.email")}: </span>{" "}
							<br className="lg:hidden" />
							<a href="mailto:diana@moonletdesign.com">diana@moonletdesign.com</a>
						</div>

						<div className="font-montserrat text-sm normal-case text-white font-normal">
							<span className="text-beige font-bold">{t("details.write")}: </span>
							<br className="lg:hidden" />

							<div className="inline-flex">
								<a
									href="https://www.facebook.com/moonletdesignstuff/"
									className="block md:inline"
									target="_blank"
									rel="noopener noreferrer"
								>
									Facebook
								</a>
								<span className="inline mx-2">|</span>
								<a
									href="https://www.instagram.com/moonletdesignstuff/"
									className="block md:inline"
									target="_blank"
									rel="noopener noreferrer"
								>
									Instagram
								</a>
							</div>
						</div>

						<div className="font-montserrat text-sm normal-case text-white font-normal">
							<span className="text-beige font-bold">{t("details.hours")}: </span>
							<br className="lg:hidden" />
							<p className="block md:inline">Mon-Fri 12-20:00</p>
						</div>
						<div className="font-montserrat text-sm normal-case text-white font-normal">
							<span className="text-beige font-bold">{t("details.timezone")}: </span>
							<br className="lg:hidden" />
							<p className="block md:inline">UTC/GMT +2 hr Bucharest</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Details;
