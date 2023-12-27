import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import AnimateSectionTitle from "../../animate/section-title";

function Biography() {
	const { t } = useTranslation("about");

	return (
		<section className="container text-white section-spacing">
			<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
				<div className="lg:order-last lg:mt-4">
					<div className="relative h-80 w-80">
						<Image
							src="/images/fillers/diana_designer_box.webp"
							alt="Graphic designer"
							className="object-contain"
							sizes="20rem"
							priority
							fill
						/>
					</div>
				</div>

				<div className="text-center lg:text-left lg:basis-[57.5%]">
					<AnimateSectionTitle>
						<h1 className="font-signature text-6xl mb-2">{t("biography.imdiana")}</h1>
						<p className="font-montserrat text-beige text-lg font-medium normal-case tracking-widest">
							{t("biography.designerbehind")}
						</p>
					</AnimateSectionTitle>

					<p className="block-text lg:text-justify my-7">{t("biography.description")}</p>

					<p className="font-montserrat text-beige normal-case text-sm">{t("biography.specs")}</p>
				</div>
			</div>
		</section>
	);
}

export default Biography;
