export const contactFormValidation = {
	full_name: {
		validate: (value: string) => value.trim() !== "",
		message: "formValidation.full_name",
	},
	email: {
		validate: (value: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value),
		message: "formValidation.email",
	},
	subject: {
		validate: (value: string) => value.trim() !== "",
		message: "formValidation.subject",
	},
	message: {
		validate: (value: string) => value.trim() !== "",
		message: "formValidation.message",
	},
};
