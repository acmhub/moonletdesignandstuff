import { useRef, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Layout from "../components/app";
import { Details, Form, FAQ, Testimonials } from "../components/sections/contact";

function ContactPage() {
	const { t } = useTranslation();
	const router = useRouter();
	const { pack } = router.query;
	const formRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (pack && formRef.current) {
			formRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [pack]);

	return (
		<Layout
			title={t("nav.contact").toString()}
			description={t("contact:details.paragraph").toString()}
			canonical="https://moonletdesign.com/contact"
			page="contact"
		>
			<div className="header-gradient" />
			<div className="relative top-spacing lg:pt-40">
				<Details />

				<div className=" section-spacing pt-32" ref={formRef}>
					<Form pack={pack?.toString() || ""} />
				</div>

				<FAQ />
				<Testimonials />
			</div>
		</Layout>
	);
}

export default ContactPage;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common", "contact"])),
	},
});
