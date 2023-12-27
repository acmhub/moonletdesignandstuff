import React, { useRef, useEffect, useState } from "react";
import { HiOutlineChevronUp } from "react-icons/hi";

function BackToTop() {
	let lastScrollTop = useRef(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY <= 1000) {
				setIsVisible(false);
			} else if (scrollY + window.innerHeight >= document.body.scrollHeight - 500) {
				setIsVisible(true);
			} else if (window.scrollY > lastScrollTop.current) {
				setIsVisible(false);
			} else if (window.scrollY < lastScrollTop.current) {
				setIsVisible(true);
			}

			lastScrollTop.current = window.scrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isVisible]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div
			className={`fixed bottom-5 right-5 border border-beige text-beige mix-blend-difference duration-200 ease-in-out cursor-pointer z-30 p-1 ${
				isVisible
					? "opacity-100 translate-y-0 pointer-events-auto"
					: "opacity-0 translate-y-5 pointer-events-none"
			}`}
			onClick={scrollToTop}
		>
			<HiOutlineChevronUp className="h-7 w-7" />
		</div>
	);
}

export default React.memo(BackToTop);
