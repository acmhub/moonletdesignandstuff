import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Booking = dynamic(() => import("./booking"));
const Navigation = dynamic(() => import("./navigation"));

function Header() {
	const bookingRef = useRef<HTMLDivElement | null>(null);
	const [isBookingOver50, setIsBookingOver50] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		const checkBookingHeight = () => {
			if (bookingRef.current) {
				const bookingHeight = bookingRef.current.clientHeight;
				setIsBookingOver50(bookingHeight > 50);
			}
		};

		setTimeout(() => {
			checkBookingHeight();
		}, 100);
	}, [router.locale]);

	return (
		<header>
			<div ref={bookingRef}>
				<Booking />
			</div>

			<Navigation isBookingOver50={isBookingOver50} />
		</header>
	);
}

export default Header;
