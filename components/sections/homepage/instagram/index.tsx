import React from "react";
import Feed from "./feed";
import { useTranslation } from "next-i18next";

function Instagram() {
	const { t } = useTranslation("home");

	return (
		<section className="bg-dark pt-10">
			<div className="container mb-8">
				<div className="flex flex-wrap flex-col lg:flex-row items-center justify-center xl:justify-normal gap-5 lg:gap-10 w-fit text-center mx-auto">
					<h2 className="font-signature text-beige text-7xl lg:mb-3">{t("insta.follow")}</h2>

					<div className="hidden lg:block h-px w-20 xl:w-36 bg-white" />

					<a
						href="https://www.instagram.com/moonletdesignstuff/"
						className="font-montserrat tracking-[0.175em] text-white font-normal"
						target="_blank"
						rel="noopener noreferrer"
					>
						@moonletdesignstuff
					</a>
				</div>
			</div>

			<div className="container max-w-[90rem]">
				<Feed />
			</div>
		</section>
	);
}

export default Instagram;
