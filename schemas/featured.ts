import { defineField, defineType } from "sanity";

export default defineType({
	name: "featured",
	title: "Featured",
	type: "document",
	fields: [
		defineField({
			name: "project",
			title: "Project",
			type: "reference",
			to: [{ type: "project" }],
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
		}),
		defineField({
			name: "overlay",
			title: "Overlay",
			type: "string",
			options: {
				list: [
					{ title: "Dark", value: "dark" },
					{ title: "Light", value: "light" },
				],
				layout: "radio",
			},
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		}),
	],

	preview: {
		select: {
			title: "project.title",
			imageUrl: "image.asset.url",
		},
		prepare(selection) {
			return { ...selection };
		},
	},
});
