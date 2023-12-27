import { defineField, defineType } from "sanity";

export default defineType({
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "tagline",
			title: "Tagline",
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
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),

		defineField({
			name: "main_image",
			title: "Main Image",
			description: "Used on portfolio page",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "main_description",
			title: "Main Description",
			description: "Used on portfolio page",
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
			name: "behance_link",
			title: "Behance Link",
			type: "string",
		}),
		defineField({
			name: "instagram_link",
			title: "Instagram Link",
			type: "string",
		}),

		defineField({
			name: "moodboard",
			title: "Moodboard",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "sketch",
			title: "Sketch",
			type: "image",
			options: {
				hotspot: true,
			},
		}),

		defineField({
			name: "mockups",
			title: "Mockups",
			type: "array",
			of: [{ type: "image" }],
			options: {
				sortable: true,
			},
		}),

		defineField({
			name: "services",
			title: "Services",
			description: "Logo Design, Business Cards, etc.",
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
			name: "description1",
			title: "Description 1",
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
			name: "description2",
			title: "Description 2",
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
			name: "description3",
			title: "Description 3",
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
			name: "description4",
			title: "Description 4",
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
			name: "description5",
			title: "Description 5",
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
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		}),
	],

	preview: {
		select: {
			title: "title",
			subtitle: "tagline.en",
			imageUrl: "main_image.asset.url",
		},
		prepare(selection) {
			return { ...selection };
		},
	},
});
