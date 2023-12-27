import { useTranslation } from "next-i18next";
import Image from "next/image";
import AnimateSectionTitle from "../../animate/section-title";

const clients = [
	{
		label: "Sprezza Capital",
		logo: "/images/projects/sprezza-capital/logo.svg",
		logo_gray: "/images/projects/sprezza-capital/logo-gray.svg",
	},
	{
		label: "Concrete Genie - Concrete Floors",
		logo: "/images/projects/concrete-genie/logo.svg",
		logo_gray: "/images/projects/concrete-genie/logo-gray.svg",
	},
	{
		label: "The Nature Therapy Center",
		logo: "/images/projects/nature-therapy/logo.svg",
		logo_gray: "/images/projects/nature-therapy/logo-gray.svg",
	},
	{
		label: "Raluca Cîrju",
		logo: "/images/projects/raluca-cirju/logo.svg",
		logo_gray: "/images/projects/raluca-cirju/logo-gray.svg",
	},
	{
		label: "Mindful Nutrition",
		logo: "/images/projects/mindful-nutrition/logo.svg",
		logo_gray: "/images/projects/mindful-nutrition/logo-gray.svg",
	},
	{
		label: "Ally",
		logo: "/images/projects/ally/logo.svg",
		logo_gray: "/images/projects/ally/logo-gray.svg",
	},
	{
		label: "Endive",
		logo: "/images/projects/endive/logo.svg",
		logo_gray: "/images/projects/endive/logo-gray.svg",
	},
	{
		label: "Eduard Erja - Senior Python Developer",
		logo: "/images/projects/eduard-erja/logo.svg",
		logo_gray: "/images/projects/eduard-erja/logo-gray.svg",
	},
	{
		label: "Hudson Homes",
		logo: "/images/projects/hudson-homes/logo.svg",
		logo_gray: "/images/projects/hudson-homes/logo-gray.svg",
	},
	{
		label: "South East",
		logo: "/images/projects/south-east/logo.svg",
		logo_gray: "/images/projects/south-east/logo-gray.svg",
	},
];

function Clients() {
	const { t } = useTranslation("home");
	return (
		<section className="container section-spacing">
			<h2 className="text-center text-white mb-8">
				<AnimateSectionTitle>
					<span className="block font-signature text-6xl mb-2">{t("clients.some")}</span>
					<span className="block font-montserrat text-beige text-xl">{t("clients.happy")}</span>
				</AnimateSectionTitle>
			</h2>

			<div className="grid grid-cols-2 lg:grid-cols-5 max-w-lg lg:max-w-none mx-auto gap-10 lg:gap-y-2">
				{clients.map(({ label, logo, logo_gray }, i) => (
					<div key={i}>
						<div className="relative h-32 max-h-32 max-w-[9rem] mx-auto group">
							<Image
								src={logo_gray}
								alt={label}
								className="group-hover:opacity-0 duration-200 ease-linear"
								fill
							/>
							<Image
								src={logo}
								alt={label}
								className="opacity-0 group-hover:opacity-100 duration-200 ease-linear"
								fill
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Clients;
