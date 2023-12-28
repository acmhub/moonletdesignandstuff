import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { MdOutlineCookie } from "react-icons/md";
import Checkbox from "../inputs/checkbox";
import useCookieConsent from "../../hooks/useIsCookieConsentGiven";

function CookiesBanner() {
	const { t } = useTranslation();
	const { cookieConsent, toggleCookieConsent } = useCookieConsent();
	const [isVisible, setIsVisible] = useState(false);
	const [checkedOptions, setCheckedOptions] = useState<string[]>(["functionality", "performance"]);

	const handleCheckboxChange = (value: string) => {
		setCheckedOptions((prevOptions) =>
			prevOptions?.includes(value) ? prevOptions.filter((option) => option !== value) : [...prevOptions, value]
		);
	};

	const handleAcceptConsent = () => {
		if (checkedOptions.length === 0) return toast.error(t("common:cookies.select"));

		if (checkedOptions.length === 2) {
			toggleCookieConsent("granted");
		} else {
			toggleCookieConsent(checkedOptions[0]);
		}
	};

	useEffect(() => {
		if (!cookieConsent) {
			const delayBannerAppearance = setTimeout(() => setIsVisible(true), 1000);
			return () => clearTimeout(delayBannerAppearance);
		}
	}, [cookieConsent]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{
						opacity: 0,
						scale: 0.75,
						y: 100,
					}}
					animate={{
						opacity: 1,
						scale: 1,
						y: 0,
						transition: {
							duration: 0.5,
							type: "spring",
							bounce: 5,
							stiffness: 75,
						},
					}}
					exit={{
						opacity: 0,
						scale: 0.5,
						y: 50,
					}}
					className="fixed bottom-4 left-0 px-4 z-40"
				>
					<div className="relative container max-w-md w-full bg-beige shadow-[0px_0px_8px_rgba(0,0,0,0.2)] text-white font-taviraj leading-5 font-normal mx-auto overflow-hidden p-0 z-40">
						<div className="space-y-4 p-4 pb-2">
							<div className="bg-light text-beige w-fit rounded-full p-1">
								<MdOutlineCookie className="h-7 w-7" />
							</div>

							<p className="text-light text-sm">
								{t("common:cookies.banner_p1")}{" "}
								<Link href="/cookie-policy" className="text-white underline">
									{t("common:cookies.banner_p2")}
								</Link>
							</p>
						</div>

						<div className="relative block space-y-2 p-4 pt-2">
							<Checkbox
								label={t("common:cookies.functionality")}
								value="functionality"
								name="preferred_cookies"
								onChange={() => handleCheckboxChange("functionality")}
								checked={checkedOptions.includes("functionality")}
								id="banner-functionality"
							/>
							<Checkbox
								label={t("common:cookies.performance")}
								value="performance"
								name="preferred_cookies"
								onChange={() => handleCheckboxChange("performance")}
								checked={checkedOptions.includes("performance")}
								id="banner-performance"
							/>
						</div>

						<div className="flex flex-wrap border-t divide-x border-neutral-300 divide-neutral-300">
							<button
								className="button flex-1 text-sm text-center active:bg-red-800/80 md:hover:bg-red-800/80 transition-all py-2"
								onClick={() => toggleCookieConsent("denied")}
								type="button"
							>
								{t("common:cookies.decline")}
							</button>

							<button
								className="button flex-1 text-sm text-center active:bg-green md:hover:bg-green transition-all py-2"
								onClick={handleAcceptConsent}
							>
								{t("common:cookies.accept")}
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default CookiesBanner;
