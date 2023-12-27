import { buildLegacyTheme } from "sanity";

const theme = {
	"--dark": "#1a1a1a",
	"--light": "#e8e8e8",

	"--mauve": "#201827",
	"--beige": "#bfb5ac",
	"--green": "#15803d",
};

export const studioTheme = buildLegacyTheme({
	"--black": theme["--dark"],
	"--white": theme["--light"],

	"--gray": theme["--beige"],
	"--gray-base": theme["--beige"],

	"--component-bg": theme["--dark"],
	"--component-text-color": theme["--light"],

	"--brand-primary": theme["--mauve"],

	"--default-button-color": theme["--light"],
	"--default-button-primary-color": theme["--beige"],
	"--default-button-success-color": theme["--green"],
	"--default-button-warning-color": "#f00",
	"--default-button-danger-color": "#ff0",

	"--state-info-color": theme["--dark"],
	"--state-success-color": theme["--green"],
	"--state-warning-color": "#f00",
	"--state-danger-color": "#ff0",

	"--main-navigation-color": theme["--mauve"],
	"--main-navigation-color--inverted": theme["--beige"],
	"--focus-color": theme["--beige"],
});
