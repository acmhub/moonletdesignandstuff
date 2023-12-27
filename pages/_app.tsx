import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { lora, montserrat, signature, taviraj } from "../lib/fonts";
import { Toaster } from "react-hot-toast";

import "../styles/tailwind.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>
				{`
					:root {
						--font-lora: ${lora.style.fontFamily};
						--font-montserrat: ${montserrat.style.fontFamily};
						--font-signature: ${signature.style.fontFamily};
						--font-taviraj: ${taviraj.style.fontFamily};
					}
				`}
			</style>
			<Component {...pageProps} />
			<Toaster position="bottom-center" reverseOrder={false} />
		</>
	);
}

export default appWithTranslation(App);
