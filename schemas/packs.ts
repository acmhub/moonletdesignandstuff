import { defineField, defineType } from "sanity";

export default defineType({
	name: "packs",
	title: "Packs",
	type: "document",
	fields: [
		defineField({
			name: "pack_name",
			title: "Pack Name",
			type: "string",
			hidden: true,
		}),
		defineField({
			name: "pack_image",
			title: "Pack Image",
			type: "image",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "object",
			fields: [
				{
					name: "en",
					title: "English",
					type: "string",
				},
				{
					name: "ro",
					title: "Română",
					type: "string",
				},
			],
		}),
		defineField({
			name: "includes",
			title: "Includes",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "en",
							title: "English",
							type: "string",
						},
						{
							name: "ro",
							title: "Română",
							type: "string",
						},
					],
				},
			],
		}),
		defineField({
			name: "timeline",
			title: "Timeline",
			type: "object",
			fields: [
				{
					name: "en",
					title: "English",
					type: "string",
				},
				{
					name: "ro",
					title: "Română",
					type: "string",
				},
			],
		}),
		defineField({
			name: "price",
			title: "Price",
			type: "string",
		}),
	],
});
