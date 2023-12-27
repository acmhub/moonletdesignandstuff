import React from "react";
import { i18n, useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";
import AnimateSectionTitle from "../../animate/section-title";
import imageUrl from "../../../lib/sanity/sanity.image";

function Packs({ packs }: { packs: Pack[] }) {
	let locale: keyof Pack["description"] = i18n?.language as keyof Pack["description"];

	const { t } = useTranslation("services");

	return (
		<section className="bg-light section-spacing">
			<div className="relative container">
				<div className="absolute bottom-0 lg:left-[5%] h-20 w-20 lg:h-40 lg:w-40">
					<Image src="/images/icons/services/star_duo.svg" alt="decoration" className="object-contain" fill />
				</div>

				<h2 className="text-center mb-14">
					<AnimateSectionTitle>
						<span className="block font-montserrat text-xl mb-2">{t("packs.choose")}</span>
						<span className="block font-signature text-6xl">{t("packs.brandingpack")}</span>
					</AnimateSectionTitle>
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					{packs.map(({ _id, pack_name, description, pack_image, includes, timeline, price }) => (
						<div
							className="order space-y-8"
							style={{
								order: pack_name === "Base" ? 1 : pack_name === "Essential" ? 2 : 3,
							}}
							id={pack_name.toLocaleLowerCase() + "-pack"}
							key={_id}
						>
							<div className="relative h-80">
								<Image src={imageUrl(pack_image)} alt={pack_name} className="object-contain" fill />
							</div>

							<div className="space-y-5">
								<div className="font-signature text-center text-6xl ">{t("packs.description")}</div>

								<p className="font-taviraj text-center max-w-md mx-auto">{description[locale]}</p>
							</div>

							<div className="space-y-5">
								<div className="font-signature text-center text-6xl">{t("packs.included")}</div>

								<ul className="text-center space-y-2.5">
									{includes.map((e, i) => (
										<li className="flex items-start justify-center font-taviraj" key={i}>
											<svg
												className="h-4 w-4 flex-shrink-0 mr-1.5 mt-2"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 166 167"
											>
												<path
													fill="#bfb5ac"
													d="M77.56,26.85h20.87c0,13.29,27.43,40.72,40.72,40.72v20.87c-13.29,0-40.72,27.39-40.72,40.72h-20.87c0-13.33-27.39-40.72-40.72-40.72v-20.87c13.33,0,40.72-27.43,40.72-40.72Z"
												/>
											</svg>
											<p className="max-w-[12rem]">{e[locale]}</p>
										</li>
									))}
								</ul>
							</div>

							<div className="space-y-5">
								<div className="font-signature text-center text-6xl">{t("packs.timeline")}</div>
								<p className="font-taviraj text-center mx-auto">{timeline[locale]}</p>
							</div>

							<div className="space-y-5">
								<div className="font-signature text-center text-6xl">{t("packs.pricing")}</div>

								<div className="flex items-center justify-center gap-2 group">
									<p className="font-taviraj">${price}</p>
									<div className="relative">
										<AiOutlineInfoCircle className="h-4 w-4 mb-0.5 opacity-50 group-hover:opacity-100 peer transition ease-out" />

										<div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[75vw] md:w-72 bg-beige text-white text-center opacity-0 peer-hover:opacity-100 shadow-md pointer-events-none transition duration-300 p-4">
											{t("packs.price_disclaimer")}
										</div>
									</div>
								</div>
							</div>

							<Link
								href={`/contact?pack=${pack_name.toLocaleLowerCase()}`}
								className="button font-montserrat text-sm font-normal normal-case text-white bg-beige hover:bg-dark block w-fit mx-auto duration-200"
							>
								{t("packs.select")}
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Packs;
