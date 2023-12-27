"use client";

import Head from "next/head";
import { NextStudioHead } from "next-sanity/studio/head";
import { NextStudio } from "next-sanity/studio";
import config from "../../sanity.config";

export default function StudioPage() {
	return (
		<>
			<Head>
				<NextStudioHead />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<NextStudio config={config} />
		</>
	);
}
