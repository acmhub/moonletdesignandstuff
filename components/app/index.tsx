import React from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GoogleAnalytics } from "nextjs-google-analytics";
import useIsCookieConsentGiven from "../../hooks/useIsCookieConsentGiven";
import Header from "./header";
import Footer from "./footer";

const CookiesBanner = dynamic(() => import("./cookies"));
const BackToTop = dynamic(() => import("./backToTop"));

interface LayoutProps {
	page: string;
	title?: string;
	description?: string;
	canonical?: string;
	children: React.ReactNode;
}

function Layout({ page, title, description, canonical = "https://moonletdesign.com/", children }: LayoutProps) {
	const { t } = useTranslation();
	const [cookieConsent] = useIsCookieConsentGiven();

	return (
		<React.Fragment>
			<Head>
				<title>{title ? title + " - Moonlet Design&Stuff - Visual branding and design" : t("title")}</title>
				<meta name="description" content={description ? description : t("meta_desc").toString()} />
				<link rel="canonical" href={canonical} />
				<link rel="alternate" hrefLang="en" href={canonical} />
				<link rel="alternate" hrefLang="ro" href={canonical.replace(/\.com\/(\w+)/, ".com/ro/$1")} />

				<meta name="robots" content="index,follow" />
			</Head>

			<div className={`${page}-page`}>
				<Header />

				<main>{children}</main>
				<Footer />

				<BackToTop />
				{!cookieConsent && <CookiesBanner />}
				{cookieConsent === "granted" && <GoogleAnalytics trackPageViews />}
			</div>
		</React.Fragment>
	);
}

export default React.memo(Layout);
