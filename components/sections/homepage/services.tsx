import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "next-i18next";

const packs = [
	{
		label: "services.basic",
		href: "/services?pack=base-pack",
	},
	{
		label: "services.essential",
		href: "/services?pack=essential-pack",
	},
	{
		label: "services.extra",
		href: "/services?pack=extra-pack",
	},
];

function Services() {
	const { t } = useTranslation("home");

	return (
		<section className="relative section-spacing">
			<div
				className="absolute top-0 left-0 h-full w-full z-0 bg-cover bg-top bg-fixed pointer-events-none"
				style={{
					backgroundImage: "url(/images/fillers/desk.webp)",
				}}
			/>

			<div className="relative container">
				<div className="text-center">
					<h2 className="font-montserrat text-xl mb-10">{t("services.whatwecan")}</h2>

					<p className="block-text">{t("services.focus")}</p>
				</div>

				<p className="font-signature text-7xl text-center mt-2.5 mb-10">{t("services.packs")}</p>

				<div className="flex flex-col lg:flex-row items-center justify-between max-w-big mx-auto gap-10 lg:gap-0">
					{packs.map(({ href, label }) => (
						<Link
							href={href}
							className="relative h-60 w-60 flex flex-col items-center justify-center bg-mauve group"
							key={label}
						>
							<div className="font-montserrat text-lg text-white text-center leading-9">
								<div>
									{t(label)
										.split(" ")
										.map((e) => (
											<p key={e}>
												{e} <br />
											</p>
										))}
								</div>
							</div>

							<div className="absolute bottom-12 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-32 bg-white opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in" />
						</Link>
					))}
				</div>

				<p className="block-text mt-16 mb-12">{t("services.description")}</p>

				<Link href="/services" className="font-montserrat normal-case flex items-center w-fit mx-auto group">
					{t("services.seeservices")}{" "}
					<HiOutlineArrowLongRight className="inline-flex h-6 w-6 ml-2 mb-0.5 arrow-hover" />
				</Link>
			</div>
		</section>
	);
}

export default Services;
