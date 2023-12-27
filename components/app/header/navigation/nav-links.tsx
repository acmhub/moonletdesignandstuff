import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";

function NavLinks({ navbarState }: NavbarInterface) {
	const router = useRouter();
	const { t } = useTranslation();

	const getNavLinkClass = (path: string) =>
		`nav-link ${navbarState.colorCondition} ${router.pathname === path && "active"}`;

	return (
		<React.Fragment>
			<Link href="/" className={getNavLinkClass("/") + " lg:hidden"}>
				{t("nav.home")}
			</Link>
			<Link href="/services" className={getNavLinkClass("/services")}>
				{t("nav.services")}
			</Link>
			<Link href="/about" className={getNavLinkClass("/about")}>
				{t("nav.about")}
			</Link>

			<div className="hidden lg:block lg:w-28" />

			<Link href="/portfolio" className={getNavLinkClass("/portfolio")}>
				{t("nav.portfolio")}
			</Link>
			<Link href="/contact" className={getNavLinkClass("/contact")}>
				{t("nav.contact")}
			</Link>
		</React.Fragment>
	);
}

export default NavLinks;
