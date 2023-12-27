import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/app/header";
import Footer from "../components/app/footer";

function PageNotFound() {
	const { t } = useTranslation();

	return (
		<div>
			<Head>
				<title>{t("404.meta_title")}</title>
				<meta name="robots" content="noindex,nofollow" />
			</Head>

			<Header />

			<main>
				<div className="header-gradient" />
				<section className="relative container text-white flex flex-col items-center justify-center section-spacing pt-48">
					<p className="font-signature text-beige text-center mb-8">{t("404.error")}</p>

					<div className="flex items-center justify-between gap-4 max-w-xl w-full">
						<Image
							src="/images/icons/services/brand.webp"
							alt=""
							height={28}
							width={28}
							className="shrink-0 object-contain"
						/>
						<h1 className="font-montserrat text-beige text-5xl lg:text-8xl">404</h1>
						<Image
							src="/images/icons/services/design.webp"
							alt=""
							height={28}
							width={28}
							className="shrink-0 object-contain"
						/>
					</div>

					<p className="font-taviraj text-beige text-center max-w-md my-16">{t("404.paragraph")}</p>

					<Link
						href="/"
						className="button block w-fit mx-auto font-montserrat text-sm font-normal normal-case text-white border border-beige hover:bg-beige duration-150"
					>
						{t("404.back")}
					</Link>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default PageNotFound;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
