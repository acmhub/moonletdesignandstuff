import { useRouter } from "next/router";
import Link from "next/link";

function LocaleSwitch() {
	const router = useRouter();
	const { pathname, query, asPath } = router;
	const { locales, locale: activeLocale } = router;

	return (
		<div className="h-5 overflow-hidden">
			<div
				className={`transition-transform duration-200 ${
					activeLocale === "en" ? "-translate-y-6" : "translate-y-0"
				}`}
			>
				{locales?.map((locale) => (
					<Link
						className="block h-6"
						href={{ pathname, query }}
						as={asPath}
						locale={locale}
						key={"locale-" + locale}
					>
						{locale}
					</Link>
				))}
			</div>
		</div>
	);
}

export default LocaleSwitch;
