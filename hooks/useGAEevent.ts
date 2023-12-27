import { event } from "nextjs-google-analytics";
import useIsCookieConsentGiven from "./useIsCookieConsentGiven";

interface AnalyticsOptions {
	category: string;
	action: string;
	label?: string;
}

const useGoogleAnalytics = () => {
	const [cookieConsent, toggleCookieConsent] = useIsCookieConsentGiven();
	if (!cookieConsent) return { trackEvent: () => {} };

	const trackEvent = ({ category, action, label }: AnalyticsOptions) => {
		event(category, {
			category,
			action,
			label,
		});
	};

	return { trackEvent };
};

export default useGoogleAnalytics;
