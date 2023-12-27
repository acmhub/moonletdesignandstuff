import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Layout from "../components/app";
import AnimateSectionTitle from "../components/animate/section-title";
import useIsCookieConsentGiven from "../hooks/useIsCookieConsentGiven";

function CookiePolicy() {
	const { t } = useTranslation("cookies");
	const [cookieConsent, toggleCookieConsent] = useIsCookieConsentGiven();

	return (
		<Layout title={t("title").toString()} canonical="https://moonletdesign.com/cookie-policy" page="cookie">
			<div className="header-gradient" />
			<div className="relative top-spacing pt-28">
				<section className="container font-taviraj section-spacing text-white">
					<h1 className="text-center mb-20">
						<AnimateSectionTitle>
							<span className="block font-signature text-6xl mb-2">{t("title")}</span>
							<span className="block font-montserrat text-beige text-xl">{t("ofmoonlet")}</span>
						</AnimateSectionTitle>
					</h1>

					<div className="space-y-10">
						<h2 className="font-montserrat normal-case text-beige text-lg -mb-5">{t("longtitle")}</h2>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">1. {t("general.title")}</p>
							<p dangerouslySetInnerHTML={{ __html: t("general.paragraph1").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("general.paragraph2").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("general.paragraph3").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("general.paragraph4").toString() }} />
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">2. {t("datatype.title")}</p>
							<p dangerouslySetInnerHTML={{ __html: t("datatype.paragraph1").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("datatype.paragraph2").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("datatype.paragraph3").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("datatype.paragraph4").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("datatype.paragraph5").toString() }} />
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">3. {t("purpose.title")}</p>
							<p dangerouslySetInnerHTML={{ __html: t("purpose.paragraph1").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("purpose.paragraph2").toString() }} />
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">3. {t("collection.title")}</p>
							<p dangerouslySetInnerHTML={{ __html: t("collection.paragraph1").toString() }} />

							<div className="space-y-2.5 pl-4">
								<p
									className="font-montserrat text-beige"
									dangerouslySetInnerHTML={{ __html: t("collection.ga.title").toString() }}
								/>
								<p dangerouslySetInnerHTML={{ __html: t("collection.ga.paragraph1").toString() }} />
								<p dangerouslySetInnerHTML={{ __html: t("collection.ga.paragraph2").toString() }} />
								<div dangerouslySetInnerHTML={{ __html: t("collection.ga.paragraph3").toString() }} />
							</div>

							<div className="space-y-2.5 pl-4">
								<p
									className="font-montserrat text-beige"
									dangerouslySetInnerHTML={{ __html: t("collection.contactform.title").toString() }}
								/>
								<p
									dangerouslySetInnerHTML={{
										__html: t("collection.contactform.paragraph1").toString(),
									}}
								/>
							</div>

							<div className="space-y-2.5 pl-4">
								<p
									className="font-montserrat text-beige"
									dangerouslySetInnerHTML={{ __html: t("collection.dm.title").toString() }}
								/>
								<p dangerouslySetInnerHTML={{ __html: t("collection.dm.paragraph1").toString() }} />
								<p dangerouslySetInnerHTML={{ __html: t("collection.dm.paragraph2").toString() }} />
							</div>

							<div className="space-y-2.5 pl-4">
								<p
									className="font-montserrat text-beige"
									dangerouslySetInnerHTML={{ __html: t("collection.questionnaire.title").toString() }}
								/>
								<p
									dangerouslySetInnerHTML={{
										__html: t("collection.questionnaire.paragraph1").toString(),
									}}
								/>
								<div dangerouslySetInnerHTML={{ __html: t("collection.ga.paragraph2").toString() }} />
							</div>

							<div className="space-y-2.5 pl-4">
								<p
									className="font-montserrat text-beige"
									dangerouslySetInnerHTML={{ __html: t("collection.socialmedia.title").toString() }}
								/>
								<p
									dangerouslySetInnerHTML={{
										__html: t("collection.socialmedia.paragraph1").toString(),
									}}
								/>
							</div>
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">5. {t("cookiesuse.title")}</p>
							<p dangerouslySetInnerHTML={{ __html: t("cookiesuse.paragraph1").toString() }} />
							<div dangerouslySetInnerHTML={{ __html: t("cookiesuse.paragraph2").toString() }} />
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">6. {t("cookiesuse.title")}</p>
							<div dangerouslySetInnerHTML={{ __html: t("cookiesuse.paragraph1").toString() }} />
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">7. {t("datakept.title")}</p>
							<p dangerouslySetInnerHTML={{ __html: t("datakept.paragraph1").toString() }} />
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">
								8. {t("storesharedisclose.title")}
							</p>
							<p dangerouslySetInnerHTML={{ __html: t("storesharedisclose.paragraph1").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("storesharedisclose.paragraph2").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("storesharedisclose.paragraph3").toString() }} />
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">9. {t("3rdparty.title")}</p>
							<p dangerouslySetInnerHTML={{ __html: t("3rdparty.paragraph1").toString() }} />
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">
								10. {t("legalrights.title")}
							</p>
							<p dangerouslySetInnerHTML={{ __html: t("legalrights.paragraph1").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("legalrights.paragraph2").toString() }} />
							<p dangerouslySetInnerHTML={{ __html: t("legalrights.paragraph3").toString() }} />
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">11. {t("children.title")}</p>
							<p dangerouslySetInnerHTML={{ __html: t("children.paragraph1").toString() }} />
						</div>

						<div className="space-y-2.5">
							<p className="font-montserrat text-md text-beige normal-case">12. {t("contact.title")}</p>
							<div dangerouslySetInnerHTML={{ __html: t("contact.paragraph1").toString() }} />
						</div>
					</div>

					<div className="text-center space-y-2.5 mt-20">
						<p>{t("common:cookies.toggle")}</p>
						<label
							htmlFor="toggle-cookies"
							className="flex items-center w-fit mx-auto space-x-4 cursor-pointer"
						>
							<span>{t("common:cookies.denied")}</span>
							<span className="relative">
								<input
									id="toggle-cookies"
									type="checkbox"
									className="hidden peer"
									defaultChecked={cookieConsent === "granted" ? true : false}
									onChange={() =>
										toggleCookieConsent(cookieConsent === "granted" ? "denied" : "granted")
									}
								/>
								<div className="w-10 h-6 rounded-full shadow-inner bg-red-800 peer-checked:bg-green"></div>
								<div className="absolute transition-all inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-light"></div>
							</span>
							<span>{t("common:cookies.granted")}</span>
						</label>
					</div>
				</section>
			</div>
		</Layout>
	);
}

const DynamicCookiePolicy = dynamic(() => Promise.resolve(CookiePolicy), { ssr: false });
export default DynamicCookiePolicy;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common", "cookies"])),
	},
});
