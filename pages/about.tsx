import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../components/app";
import { Biography, Moodboard, WhyUs, FieldsOfWork, Testimonials } from "../components/sections/about";

function AboutPage() {
	const { t } = useTranslation();
	return (
		<Layout
			title={t("nav.about").toString()}
			description={t("about:meta_desc").toString()}
			canonical="https://moonletdesign.com/about"
			page="about"
		>
			<div className="header-gradient" />
			<div className="relative top-spacing lg:pt-40">
				<Biography />
				<Moodboard />
				<WhyUs />
				<FieldsOfWork />
				<Testimonials />
			</div>
		</Layout>
	);
}

export default AboutPage;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common", "about"])),
	},
});
