import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { sanityclient } from "../lib/sanity/sanity.client";
import Layout from "../components/app";
import { Landing, About, Projects, Services, Clients, CallToAction, Instagram } from "../components/sections/homepage";

export default function Home({ featured }: { featured: Featured[] }) {
	const { t } = useTranslation("home");

	return (
		<Layout description={t("home:meta_desc").toString()} canonical="https://moonletdesign.com" page="home">
			<Landing />
			<About />
			<Projects featured={featured} />
			<Services />
			<Clients />
			<CallToAction />
			<Instagram />
		</Layout>
	);
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
	const query = `*[_type == "featured"]{
		_id,
		overlay,
		image,
		"project": project->{
			title,
			services,
			slug
		}
	}`;
	const featured = await sanityclient.fetch(query);

	return {
		props: {
			featured,
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
};
