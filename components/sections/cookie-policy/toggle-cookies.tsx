import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import useIsCookieConsentGiven from "../../../hooks/useIsCookieConsentGiven";
import Checkbox from "../../inputs/checkbox";

function ToggleCookies() {
	const { t } = useTranslation("cookies");
	const { cookieConsent, toggleCookieConsent } = useIsCookieConsentGiven();
	const [activeCookie, setActiveCookie] = useState<string | null>(null);
	const [checkedOptions, setCheckedOptions] = useState<string[]>([]);

	const handleCheckboxChange = (value: string) => {
		setCheckedOptions((prevOptions) =>
			prevOptions?.includes(value) ? prevOptions.filter((option) => option !== value) : [...prevOptions, value]
		);
	};

	useEffect(() => {
		if (cookieConsent) {
			setActiveCookie(cookieConsent);
			setCheckedOptions(
				cookieConsent === "granted"
					? Array("functionality", "performance")
					: cookieConsent === "denied"
					? []
					: Array(cookieConsent)
			);
		}
	}, [cookieConsent, activeCookie]);

	const handleToggleCookies = () => {
		if (checkedOptions.length === 2 && activeCookie !== "granted") toggleCookieConsent("granted");
		if (checkedOptions.length !== 2 && activeCookie === "granted") toggleCookieConsent(checkedOptions[0]);

		if (activeCookie === "denied" && checkedOptions.length === 1) {
			toggleCookieConsent(checkedOptions[0]);
		} else if (activeCookie === "denied" && checkedOptions.length === 2) {
			toggleCookieConsent("granted");
		} else if (activeCookie !== "denied" && checkedOptions.length === 0) {
			toggleCookieConsent("denied");
		}

		if (activeCookie === null && checkedOptions.length > 0) {
			toggleCookieConsent(checkedOptions.length === 2 ? "granted" : checkedOptions[0]);
		}
	};

	return (
		<section className="section-spacing space-y-10">
			<div className="space-y-2">
				<p className="font-taviraj">{t("toggle.current_state")}</p>
				<p
					className={`font-montserrat 
                        ${cookieConsent === null && "text-beige"} 
                        ${cookieConsent === "denied" && "text-red-800"}
                    `}
				>
					{cookieConsent === null
						? t("toggle.not_decided")
						: cookieConsent === "granted"
						? t("toggle.all_granted")
						: cookieConsent === "denied"
						? t("toggle.denied")
						: cookieConsent === "functionaity"
						? t("toggle.functionality_only")
						: t("toggle.performance_only")}
				</p>
			</div>

			<div className="block font-montserrat text-beige uppercase space-y-5">
				<Checkbox
					label={t("common:cookies.functionality")}
					value="functionality"
					name="preferred"
					onChange={() => handleCheckboxChange("functionality")}
					checked={checkedOptions.includes("functionality") || checkedOptions.includes("granted")}
					id="policy-functionality"
				/>
				<Checkbox
					label={t("common:cookies.performance")}
					value="performance"
					name="preferred"
					onChange={() => handleCheckboxChange("performance")}
					checked={checkedOptions.includes("performance") || checkedOptions.includes("granted")}
					id="policy-performance"
				/>
			</div>

			<div className="flex items-center justify-center flex-wrap w-fit mx-auto gap-5">
				{activeCookie !== "denied" && (
					<button
						className="button block w-fit mx-auto font-montserrat text-sm font-normal normal-case text-white hover:bg-red-800/80 border border-transparent hover-border-red-800/80 duration-150"
						onClick={() => toggleCookieConsent("denied")}
					>
						{t("toggle.disable")}
					</button>
				)}

				<button
					className="button block w-fit mx-auto font-montserrat text-sm font-normal normal-case text-white border border-beige hover:bg-beige duration-150 max-sm:order-first"
					onClick={checkedOptions.length === 0 ? () => toggleCookieConsent("granted") : handleToggleCookies}
				>
					{checkedOptions.length === 0 ? t("toggle.activate") : t("toggle.apply")}
				</button>
			</div>
		</section>
	);
}

export default ToggleCookies;
