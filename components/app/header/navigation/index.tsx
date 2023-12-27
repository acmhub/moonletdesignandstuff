import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useGoogleAnalytics from "../../../../hooks/useGAEevent";
import Logo from "./logo";
import NavLinks from "./nav-links";
import LocaleSwitch from "./locale-switch";
import SocialMedia from "../../../sections/social-media";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navigation({ isBookingOver50 }: { isBookingOver50: boolean }) {
	const router = useRouter();
	const { trackEvent } = useGoogleAnalytics();

	let lastScrollTop = useRef(0);
	const [navbarState, setNavbarState] = useState({
		isVisible: true,
		isScrolled: false,
		isToggled: false,
		isMobile: false,
		colorCondition: "text-mauve",
	});
	const { isVisible, isScrolled, isToggled, isMobile, colorCondition } = navbarState;

	const handleToggle = useCallback(() => {
		if (isMobile) {
			setNavbarState((prevState) => ({
				...prevState,
				isScrolled: !isToggled ? true : isScrolled && window.scrollY >= 100 ? true : false,
				isToggled: !isToggled,
			}));
		}
	}, [isToggled, isMobile]);

	useMemo(() => {
		setNavbarState((prevState) => ({
			...prevState,
			colorCondition:
				isScrolled || isToggled
					? "text-beige"
					: router.pathname === "/" && !isScrolled && !isToggled
					? "text-mauve"
					: "text-beige",
		}));
	}, [isScrolled, isToggled, router.pathname]);

	useEffect(() => {
		setNavbarState((prevState) => ({
			...prevState,
			isScrolled: window.scrollY > 0,
		}));

		const handleScroll = () => {
			const currentScroll = window.scrollY;
			setNavbarState((prevState) => ({
				...prevState,
				isScrolled: currentScroll > 0,
			}));

			if (window.scrollY <= 1000) {
				setNavbarState((prevState) => ({
					...prevState,
					isVisible: true,
				}));
			} else if (window.scrollY > lastScrollTop.current) {
				setNavbarState((prevState) => ({
					...prevState,
					isVisible: false,
				}));
			} else if (window.scrollY < lastScrollTop.current) {
				setNavbarState((prevState) => ({
					...prevState,
					isVisible: true,
				}));
			}

			lastScrollTop.current = currentScroll;
		};

		const updateWindowSize = () => {
			setNavbarState((prevState) => ({
				...prevState,
				isMobile: window.innerWidth < 1024,
			}));
		};

		updateWindowSize();

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", updateWindowSize, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updateWindowSize);
		};
	}, []);

	useEffect(() => {
		isToggled ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
	}, [isToggled]);

	return (
		<nav
			className={`fixed top-0 w-full transition-all duration-200 z-50 py-2.5 lg:py-5 lg:px-4
				${isToggled && "bg-transparent shadow-none py-6"}
				${
					isVisible && !isScrolled
						? isBookingOver50
							? "translate-y-[4.5rem]"
							: "translate-y-12 lg:translate-y-20"
						: isScrolled && isVisible
						? "bg-mauve shadow-lg translate-y-0"
						: "-translate-y-full opacity-0"
				}
			`}
		>
			<div className="relative container max-w-7xl mx-auto flex items-center justify-between lg:justify-center z-50">
				<Link
					className={`relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 h-12 w-12 transition-all duration-300 z-50 ${
						isScrolled ? "lg:h-12 lg:w-12" : "lg:h-16 lg:w-16"
					}`}
					href="/"
				>
					<Logo fill={isScrolled || isToggled ? "beige" : router.pathname === "/" ? "mauve" : "beige"} />
				</Link>

				<div
					className={`transition-all ease-in duration-400
						lg:relative lg:top-auto lg:h-auto flex lg:flex-row items-center justify-center lg:ml-10 lg:gap-10 xl:gap-16 space-y-5 lg:space-y-0
						absolute top-full right-0 h-[calc(100vh_-_3.5rem)] w-full max-lg:pb-40 pt-10 lg:py-0 lg:pt-0 px-5 lg:px-0 flex-col max-lg:overflow-y-auto
						${isToggled ? "" : "translate-y-8 lg:translate-y-0 opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"}
					`}
				>
					<NavLinks navbarState={navbarState} />

					<div className="py-1 lg:hidden" />

					<button
						className={`lg:inline-flex lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 nav-link h-5 outline-none p-0 ${navbarState.colorCondition}`}
						onClick={handleToggle}
					>
						<LocaleSwitch />
					</button>

					<div className="lg:hidden pt-8">
						<a
							href="mailto:hello@moonletdesign.com"
							className="block w-fit mx-auto text-sm font-montserrat text-beige mb-10"
							onClick={() => {
								trackEvent({
									category: "Icon",
									action: "Email",
								});
							}}
						>
							hello@moonletdesign.com
						</a>

						<div className="w-fit mx-auto">
							<SocialMedia size="h-5 w-5" fill="var(--beige)" />
						</div>
					</div>
				</div>

				<button className={`${colorCondition} lg:hidden`} onClick={handleToggle}>
					{isToggled ? (
						<AiOutlineClose className="h-6 w-6" aria-label="Toggle menu" />
					) : (
						<AiOutlineMenu className="h-6 w-6" aria-label="Toggle menu" />
					)}
				</button>
			</div>

			<div
				className={`fixed top-0 left-0 h-screen w-full pointer-events-none transition duration-300 z-0 ${
					isToggled && "bg-gradient-to-b from-mauve from-40% to-dark"
				}`}
			/>
		</nav>
	);
}

export default Navigation;
