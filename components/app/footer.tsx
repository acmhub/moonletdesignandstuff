import Image from "next/image";
import Link from "next/link";
import SocialMedia from "../sections/social-media";
import { useTranslation } from "next-i18next";

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="relative bg-dark pb-10 pt-20">
			<div className="container text-white">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
					<div className="my-auto mb-16 md:mb-auto">
						<Link href="/" className="relative h-24 w-24 block mx-auto">
							<Image
								src="/images/logo/logo-beige.svg"
								alt="Moonlet Design&Stuff - Visual branding and design"
								fill
							/>
						</Link>
					</div>

					<div className="col-span-1 lg:order-first lg:h-full lg:flex lg:flex-col lg:justify-between space-y-7">
						<Link href="/" className="nav-link text-base text-white mx-auto w-fit lg:ml-0">
							{t("nav.home")}
						</Link>
						<Link href="/portfolio" className="nav-link text-base text-white mx-auto w-fit lg:ml-0">
							{t("nav.portfolio")}
						</Link>
						<Link href="/about" className="nav-link text-base text-white mx-auto w-fit lg:ml-0">
							{t("nav.about")}
						</Link>
					</div>

					<div className="col-span-1 lg:h-full lg:flex lg:flex-col lg:justify-between lg:items-end space-y-7">
						<Link href="/services" className="nav-link text-base text-white mx-auto w-fit lg:mr-0">
							{t("nav.services")}
						</Link>
						<Link href="/contact?faq=faq" className="nav-link text-base text-white mx-auto w-fit lg:mr-0">
							faqs
						</Link>
						<Link href="/contact" className="nav-link text-base text-white mx-auto w-fit lg:mr-0">
							{t("nav.contact")}
						</Link>
					</div>
				</div>

				<div className="mt-14 mb-10">
					<SocialMedia fill="#FFF" size="h-6 w-6" isFooter hasHoverCircle />
				</div>

				<div className="font-montserrat text-xs text-white normal-case font-light text-center space-y-2.5">
					<Link href="/cookie-policy" className="block md:inline">
						{t("footer.cookie")}
					</Link>
					<span className="hidden md:inline mx-2">|</span>
					<Link href="/terms-and-conditions" className="block md:inline">
						{t("footer.terms")}
					</Link>

					<p>&copy; {new Date().getFullYear()} Moonlet Design&Stuff.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
