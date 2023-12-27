import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { studioTheme } from "./studio-theme";
import { getDefaultDocumentNode } from "./lib/sanity/sanity.deskStructure";
import Logo from "./components/studio/logo";

export default defineConfig({
	basePath: "/studio",

	name: "Moonlet_Studio",
	title: "Moonlet Studio",

	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",

	plugins: [
		deskTool({
			defaultDocumentNode: getDefaultDocumentNode,
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
	theme: studioTheme,
	studio: {
		components: {
			logo: Logo,
		},
	},
});
