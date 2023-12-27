import { definePreview } from "next-sanity/preview";
import { dataset, projectId } from "./sanity.client";

function onPublicAccessOnly() {}

if (!projectId || !dataset) throw new Error("Missing projectId or dataset.");

export const usePreview = definePreview({
	projectId,
	dataset,
	onPublicAccessOnly,
});
