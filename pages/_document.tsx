import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta property="og:site_name" content="Moonlet Design & Stuff"></meta>
				<meta property="og:title" content="Moonlet Design&Stuff - Visual branding and design" />
				<meta
					property="og:description"
					content="We are a studio where nice stuff is created with the purpose of helping businesses grow through visual branding and design work."
				/>

				<meta property="og:type" content="website" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:locale:alternate" content="ro_RO" />
				<link rel="alternate" hrefLang="x-default" href="https://moonletdesign.com/" />

				{/* FavIcon */}
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
