import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../components/app";
import AnimateSectionTitle from "../components/animate/section-title";
import Link from "next/link";

function TermsAndConditions() {
	const { t } = useTranslation("terms");

	return (
		<Layout title={t("title").toString()} canonical="https://moonletdesign.com/terms-and-conditions" page="terms">
			<div className="header-gradient" />
			<div className="relative top-spacing pt-28">
				<section className="container font-taviraj section-spacing text-white">
					<h1 className="text-center mb-20">
						<AnimateSectionTitle>
							<span className="block font-signature text-6xl mb-2">{t("title")}</span>
							<span className="block font-montserrat text-beige text-xl">{t("ofmoonlet")}</span>
						</AnimateSectionTitle>
					</h1>

					<p>{t("attention")}</p>
					<p>{t("lastmodified")}</p>

					<p className="font-montserrat text-md text-beige normal-case mt-10">1. {t("provisions.title")}</p>
					<p>{t("provisions.description1")}</p>
					<p>{t("provisions.description2")}</p>
					<p>{t("provisions.description3")}</p>

					<p className="font-montserrat text-md text-beige normal-case mt-10">2. {t("conditions.title")}</p>
					<p>{t("conditions.description")}</p>

					<p className="font-montserrat text-md text-beige normal-case mt-10">3. {t("privacy.title")}</p>
					<p>
						{t("privacy.description")}
						<Link href="/cookie-policy" className="underline text-beige">
							{t("privacy.linktext")}
						</Link>
					</p>

					<p className="font-montserrat text-md text-beige normal-case mt-10">4. {t("copyright.title")}</p>
					<p>{t("copyright.description1")}</p>
					<p>{t("copyright.description2")}</p>

					<p className="font-montserrat text-md text-beige normal-case mt-10">
						5. {t("generalconditions.title")}
					</p>
					<p>{t("generalconditions.description1")}</p>
					<p>{t("generalconditions.description2")}</p>

					<p className="font-montserrat text-md text-beige normal-case mt-10">6. {t("prices.title")}</p>
					<p>{t("prices.description1")}</p>
					<p>{t("prices.description2")}</p>

					<p className="font-montserrat text-md text-beige normal-case mt-10">7. {t("refunds.title")}</p>
					<p>{t("refunds.description")}</p>

					<p className="font-montserrat text-md text-beige normal-case mt-10">8. {t("termination.title")}</p>
					<p>{t("termination.description")}</p>

					<p className="font-montserrat text-md text-beige normal-case mt-10">9. {t("consent.title")}</p>
					<p>{t("consent.description")}</p>
				</section>
			</div>
		</Layout>
	);
}

export default TermsAndConditions;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common", "terms"])),
	},
});
