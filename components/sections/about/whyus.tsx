import { useTranslation } from "next-i18next";
import Image from "next/image";

const services = [
	{
		src: "/images/icons/services/design.webp",
		title: "whyus.mission.title",
		description: "whyus.mission.description",
	},
	{
		src: "/images/icons/services/visual.webp",
		title: "whyus.vision.title",
		description: "whyus.vision.description",
	},
	{
		src: "/images/icons/services/brand.webp",
		title: "whyus.values.title",
		description: "whyus.values.description",
	},
];

function WhyUs() {
	const { t } = useTranslation("about");

	return (
		<section className="bg-light section-spacing">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
					<div className="col-span-1">
						<h2 className="font-signature text-6xl text-center mb-5">{t("whyus.whydesign.title")}</h2>

						<p className="block-text">{t("whyus.whydesign.description")}</p>
					</div>

					<div className="col-span-1">
						<h2 className="font-signature text-6xl text-center mb-5">{t("whyus.whymoonlet.title")}</h2>

						<p className="block-text">{t("whyus.whymoonlet.description")}</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-16">
					{services.map(({ src, title, description }) => (
						<div key={description}>
							<div className="relative h-9 w-9 mx-auto">
								<Image src={src} alt={t(title)} fill />
							</div>

							<p className="font-montserrat text-xl text-beige text-center mb-5 mt-3">{t(title)}</p>

							<p className="text-center font-taviraj max-w-[15rem] mx-auto">{t(description)}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default WhyUs;
