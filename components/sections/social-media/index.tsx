import React from "react";
import socialIcons from "../../../data/social-icons";
import useGoogleAnalytics from "../../../hooks/useGAEevent";

interface SocialMediaProps {
	fill: string;
	size: string;
	isFooter?: boolean;
	hasHoverCircle?: boolean;
}

function SocialMedia({ fill, size, isFooter = false, hasHoverCircle = false }: SocialMediaProps) {
	const { trackEvent } = useGoogleAnalytics();

	return (
		<div
			className={
				isFooter
					? "grid grid-cols-3 sm:grid-cols-6 place-items-center max-w-sm mx-auto gap-5"
					: "relative flex flex-wrap justify-center items-center gap-5"
			}
		>
			{socialIcons.map(({ href, label, draw }) => (
				<a
					href={href}
					className={hasHoverCircle ? "hover:bg-green hover:text-white rounded-full transition p-2.5" : ""}
					aria-label={label}
					key={label}
					target="_blank"
					rel="noopener"
					onClick={() => {
						trackEvent({
							category: "Icon",
							action: label,
						});
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={size}>
						<path style={{ fill: fill }} d={draw} />
					</svg>
				</a>
			))}
		</div>
	);
}

export default SocialMedia;
