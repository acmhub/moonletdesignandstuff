import localFont from "next/font/local";

export const lora = localFont({ src: "../public/fonts/Lora-BoldItalic.ttf", weight: "400", variable: "--font-lora" });

export const montserrat = localFont({
	src: [
		{
			path: "../public/fonts/montserrat/Montserrat-Regular.otf",
			weight: "300",
		},
		{
			path: "../public/fonts/montserrat/Montserrat-Medium.otf",
			weight: "400",
		},
		{
			path: "../public/fonts/montserrat/Montserrat-SemiBold.otf",
			weight: "500",
		},
		{
			path: "../public/fonts/montserrat/Montserrat-Bold.otf",
			weight: "600",
		},
	],
	variable: "--font-montserrat",
});

export const signature = localFont({
	src: "../public/fonts/RetroSignature.otf",
	weight: "400",
	variable: "--font-signature",
});

export const taviraj = localFont({
	src: [
		{
			path: "../public/fonts/taviraj/Taviraj-Regular.ttf",
			weight: "400",
		},
		{
			path: "../public/fonts/taviraj/Taviraj-Medium.ttf",
			weight: "500",
		},
		{
			path: "../public/fonts/taviraj/Taviraj-SemiBold.ttf",
			weight: "600",
		},
	],
	variable: "--font-taviraj",
});
