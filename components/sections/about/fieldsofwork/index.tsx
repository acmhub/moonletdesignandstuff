import { useTranslation } from "next-i18next";
import PieChart from "./piechart";
import AnimateSectionTitle from "../../../animate/section-title";

function FieldsOfWork() {
	const { t } = useTranslation("about");

	return (
		<section className="bg-dark text-white section-spacing relative">
			<div className="container">
				<h2 className="text-center">
					<AnimateSectionTitle>
						<span className="block font-signature text-6xl mb-2">{t("fields.whatwedo")}</span>
						<span className="block font-montserrat text-beige text-xl">{t("fields.often")}</span>
					</AnimateSectionTitle>
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 whitespace-nowrap lg:w-fit lg:mx-auto my-16">
					<div className="hidden lg:flex flex-col justify-around text-center lg:text-xl">
						<p className="font-montserrat text-base text-beige hover:text-white transition">
							{t("fields.branding")}
						</p>
						<p className="font-montserrat text-base text-beige hover:text-white transition">
							{t("fields.stationery")}
						</p>
					</div>

					<PieChart />

					<div className="hidden lg:flex flex-col justify-around text-center lg:text-xl">
						<p className="font-montserrat text-base text-beige hover:text-white transition">
							{t("fields.logo")}
						</p>
						<p className="font-montserrat text-base text-beige hover:text-white transition">
							{t("fields.others")}
						</p>
					</div>
				</div>

				<p className="block-text">{t("fields.paragraph")}</p>
			</div>
		</section>
	);
}

export default FieldsOfWork;
