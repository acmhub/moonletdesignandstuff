import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { sanityclient } from "../lib/sanity/sanity.client";
import Layout from "../components/app";
import { Steps, Packs, CallToAction, Testimonials } from "../components/sections/services";

function ServicesPage({ packs }: { packs: Pack[] }) {
	const { t } = useTranslation();
	const router = useRouter();
	const { pack } = router.query;

	useEffect(() => {
		if (pack) {
			let elem = document.getElementById(pack as string);
			if (elem) window.scrollTo({ top: elem.getBoundingClientRect().top - 200, left: 0, behavior: "smooth" });
		}
	}, [pack]);

	return (
		<Layout
			title={t("nav.services").toString()}
			description={t("services:meta_desc").toString()}
			canonical="https://moonletdesign.com/services"
			page="services"
		>
			<div className="header-gradient" />
			<div className="relative top-spacing pt-28">
				<Steps />
				<Packs packs={packs} />
				<CallToAction />
				<Testimonials />
			</div>
		</Layout>
	);
}

export default ServicesPage;

export const getStaticProps = async ({ locale }: { locale: string }) => {
	const query = `*[_type == "packs"]`;
	const packs = await sanityclient.fetch(query);

	return {
		props: {
			packs,
			...(await serverSideTranslations(locale, ["common", "services"])),
		},
	};
};
