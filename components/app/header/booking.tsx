import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function Booking() {
	const { t } = useTranslation();
	const router = useRouter();

	const currentDate = new Date();
	const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
	const monthName = t(`booking.months.${nextMonth.getMonth()}`);

	return (
		<section
			className={`relative text-beige py-2.5 z-40 overflow-hidden ${router.pathname === "/" && "bg-mauve"}`}
			id="booking"
		>
			<p className="container flex flex-wrap items-center justify-center text-center font-lora text-sm tracking-[0.1em]">
				<span>{t("booking.bookForMonth", { monthName })}</span>
				<Link href="/contact" className="inline-flex items-center group hover:underline ml-2">
					{t("booking.enquireNow")}
					<HiOutlineArrowLongRight className="inline-flex h-6 w-6 ml-2 arrow-hover" />
				</Link>
			</p>
		</section>
	);
}

export default Booking;
