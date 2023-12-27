import Image from "next/image";
import Link from "next/link";
import { i18n, useTranslation } from "next-i18next";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import imageUrl from "../../../lib/sanity/sanity.image";

const teaser = [
	{
		src: "/images/icons/services/visual.webp",
		description: "projects.explore",
	},
	{
		src: "/images/icons/services/design.webp",
		description: "projects.create",
	},
	{
		src: "/images/icons/services/brand.webp",
		description: "projects.turn",
	},
];

function Projects({ featured }: { featured: Featured[] }) {
	const { t } = useTranslation("home");
	const locale: any = i18n?.language;

	return (
		<section className="container text-white text-center section-spacing">
			<h2 className="font-montserrat text-xl text-beige mb-16">{t("projects.together")}</h2>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:mx-auto">
				{teaser.map(({ src, description }) => (
					<div key={description}>
						<div className="relative h-9 w-9 mx-auto mb-10">
							<Image src={src} alt={description} fill />
						</div>

						<p className="font-taviraj text-center max-w-[20rem] mx-auto">{t(description)}</p>
					</div>
				))}
			</div>

			<p className="font-signature text-beige text-7xl mb-12 mt-8">{t("projects.like")}</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-big lg:mx-auto">
				{featured.map(
					({
						_id,
						image,
						overlay,
						project: {
							title,
							slug: { current },
							services,
						},
					}) => (
						<Link
							className="relative group overflow-hidden w-fit mx-auto"
							href={`/project/${current}`}
							key={_id}
						>
							<Image
								src={imageUrl(image)}
								alt={title}
								height={312}
								width={520}
								className="object-contain"
								unoptimized
							/>

							<div className="absolute top-0 left-0 h-full w-full flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 duration-200 z-10">
								<div className={`absolute top-0 left-0 h-full w-full bg-${overlay} opacity-60 z-0`} />

								<div className="text-center mt-8 z-10">
									<p
										className={`font-montserrat text-base mb-2.5  ${
											overlay === "light" ? "text-mauve" : "text-beige"
										}`}
									>
										{title}
									</p>
									<p
										className={`font-taviraj text-sm font-medium ${
											overlay === "light" ? "text-dark" : "text-light"
										}`}
									>
										{services[locale]}
									</p>
									<HiOutlineArrowLongRight className="h-8 w-8 mt-1 mx-auto" />
								</div>
							</div>
						</Link>
					)
				)}
			</div>

			<Link
				href="/portfolio"
				className="button block w-fit mx-auto font-montserrat text-sm font-normal normal-case text-white border border-beige hover:bg-beige duration-150 mt-20"
			>
				{t("projects.morework")}
			</Link>
		</section>
	);
}

export default Projects;
