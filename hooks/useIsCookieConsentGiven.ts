import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { consent } from "nextjs-google-analytics";

const useCookieConsent = (): ["denied" | "granted" | undefined, (response: "denied" | "granted") => void] => {
	const router = useRouter();
	const [cookieConsent, setCookieConsent] = useState<"denied" | "granted" | undefined>(
		(Cookies.get("cookie_consent") as "denied" | "granted" | undefined) || undefined
	);

	const removeAllCookies = () => {
		const cookies = Cookies.get();
		for (const cookie in cookies) {
			if (cookie !== "cookie_consent") {
				Cookies.remove(cookie);
			}
		}
	};

	useEffect(() => {
		const existingConsent = Cookies.get("cookie_consent");

		if (existingConsent === "granted") {
			setCookieConsent("granted");
		} else {
			removeAllCookies();
		}
	}, []);

	useEffect(() => {
		const existingConsent = Cookies.get("cookie_consent");

		if (cookieConsent || existingConsent === undefined) {
			consent({
				arg: "update",
				params: {
					ad_storage: cookieConsent ? "granted" : "denied",
					analytics_storage: cookieConsent ? "granted" : "denied",
				},
			});
		}
	}, [router.pathname, cookieConsent]);

	const toggleCookieConsent = (response: "denied" | "granted") => {
		consent({
			arg: "update",
			params: {
				ad_storage: response,
				analytics_storage: response,
			},
		});

		if (response === "denied") {
			removeAllCookies();
			Cookies.set("cookie_consent", response);
		} else {
			const twoWeeksFromNow = new Date();
			twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
			Cookies.set("cookie_consent", response, { expires: twoWeeksFromNow });
		}

		setCookieConsent(response);

		let timeout;
		clearTimeout(timeout);
		timeout = setTimeout(() => window.location.reload(), 200);
	};

	return [cookieConsent, toggleCookieConsent];
};

export default useCookieConsent;
