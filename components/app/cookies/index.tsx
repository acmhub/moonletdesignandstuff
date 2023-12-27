import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineCookie } from "react-icons/md";
import Link from "next/link";
import CookieOptions from "./cookie-options";
import useIsCookieConsentGiven from "../../../hooks/useIsCookieConsentGiven";

function CookiesBanner() {
	const { t } = useTranslation();
	const [isVisible, setIsVisible] = useState(false);
	const [cookieConsent, toggleCookieConsent] = useIsCookieConsentGiven();

	useEffect(() => {
		const delayBannerAppearance = setTimeout(() => {
			setIsVisible(true);
		}, 1000);

		return () => {
			clearTimeout(delayBannerAppearance);
		};
	}, []);

	const handleConsent = (response: "denied" | "granted") => {
		toggleCookieConsent(response);
		setIsVisible(false);
	};

	const handleCustomisedConsent = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		handleConsent("granted");
		setIsVisible(false);

		let form = new FormData(e.target);
		let formData = Object.fromEntries(form);
		console.log(formData);
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{
						opacity: 0,
						y: 50,
					}}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.33,
							type: "spring",
							bounce: 5,
							stiffness: 75,
						},
					}}
					exit={{
						opacity: 0,
						y: 50,
					}}
					className="fixed bottom-4 left-0 px-4 z-40"
				>
					<div className="container max-w-md w-full bg-beige text-white font-taviraj leading-5 font-normal mx-auto border-2 overflow-hidden p-0 z-40">
						<div className="space-y-5 p-5 pb-0">
							<div className="bg-[#d4c5b6] w-fit rounded-full p-1">
								<MdOutlineCookie className="h-6 w-6" />
							</div>

							<p className="text-light">
								{t("common:cookies.banner_p1")}{" "}
								<Link href="/cookie-policy" className="text-white hover:underline">
									{t("common:cookies.banner_p2")}
								</Link>
							</p>
						</div>

						{/* <form onSubmit={handleCustomisedConsent} className="p-5" id="customised-cookies-form">
							<CookieOptions />
						</form> */}
						<div className="py-2.5" />

						<div className="relative flex flex-wrap">
							<button
								className="button flex-1 text-sm text-center bg-beige active:bf-red-800/80 md:hover:bg-red-800/80 transition-all py-2"
								onClick={() => handleConsent("denied")}
							>
								{t("common:cookies.decline")}
							</button>

							<button
								className="button flex-1 text-sm text-center bg-green hover:brightness-125 transition-all py-2"
								onClick={() => handleConsent("granted")}
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
