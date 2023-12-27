import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { PreviewSuspense } from "next-sanity/preview";
import { sanityclient } from "../lib/sanity/sanity.client";
import Layout from "../components/app";
import { DisplayProjects, PortfolioPreview, Others } from "../components/sections/portfolio";

const query = '*[_type == "project"] | order(publishedAt asc)';

function PortfolioPage({ preview, projects }: { preview: boolean; projects: Project[] }) {
	const { t } = useTranslation();

	return (
		<Layout
			title={t("nav.portfolio").toString()}
			description={t("portfolio:meta_desc").toString()}
			canonical="https://moonletdesign.com/portfolio"
			page="portfolio"
		>
			<div className="header-gradient" />

			<div className="relative top-spacing lg:pt-32">
				{preview ? (
					<PreviewSuspense fallback={<p className="text-white">loading..</p>}>
						<PortfolioPreview query={query} />
					</PreviewSuspense>
				) : (
					<DisplayProjects projects={projects} />
				)}

				<Others />
			</div>
		</Layout>
	);
}

export default PortfolioPage;

export const getStaticProps = async ({ locale, preview = false }: { locale: string; preview: boolean }) => {
	const projects = await sanityclient.fetch(query);

	return {
		props: {
			preview,
			projects,
			...(await serverSideTranslations(locale, ["common", "portfolio"])),
		},
	};
};
