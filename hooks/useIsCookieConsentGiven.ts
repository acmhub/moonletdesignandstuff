import { useState, useEffect } from "react";
import { consent } from "nextjs-google-analytics";
import Cookies from "js-cookie";

const useCookieConsent = () => {
	const [cookieConsent, setCookieConsent] = useState<string | null>(null);

	const clearCookies = () => {
		const cookies = Cookies.get();
		for (const cookie in cookies) {
			if (cookie !== "cookie_consent") {
				Cookies.remove(cookie);
			}
		}
	};

	useEffect(() => {
		const initialConsent = Cookies.get("cookie_consent");
		if (initialConsent) {
			setCookieConsent(initialConsent);
			consent({
				arg: "update",
				params: {
					ad_storage: initialConsent === "granted" || initialConsent === "performance" ? "granted" : "denied",
					analytics_storage:
						initialConsent === "granted" || initialConsent === "performance" ? "granted" : "denied",
				},
			});
		}
	}, []);

	const toggleCookieConsent = (response: string) => {
		Cookies.set("cookie_consent", String(response), { expires: 21 });
		setCookieConsent(response);

		if (response === "denied") clearCookies();
		consent({
			arg: "update",
			params: {
				ad_storage: response === "granted" || response === "performance" ? "granted" : "denied",
				analytics_storage: response === "granted" || response === "performance" ? "granted" : "denied",
			},
		});

		let timeout;
		clearTimeout(timeout);
		timeout = setTimeout(() => window.location.reload(), 200);
	};

	return { cookieConsent, toggleCookieConsent };
};

export default useCookieConsent;
