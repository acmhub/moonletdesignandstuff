import { useTranslation } from "next-i18next";
import SocialMedia from "../social-media";
import Link from "next/link";

function Landing() {
	const { t } = useTranslation("home");

	return (
		<section
			className="relative bg-beige min-h-[700px] w-full flex flex-col items-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: "url('/images/fillers/landing-bg.webp')",
			}}
		>
			<div className="container pt-20 mt-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-10">
					<img
						src="/images/fillers/ipad-logos.webp"
						alt=""
						className="max-md:h-96 h-[600px] mx-auto object-contain"
					/>

					<div className="text-center lg:text-right my-auto">
						<h1 className="font-montserrat text-xl text-white">{t("landing.title")}</h1>
						<p className="font-taviraj my-8">{t("landing.paragraph")}</p>

						<Link
							href="/services"
							className="font-montserrat normal-case text-sm font-normal button flex items-center space-x-2 w-fit mx-auto lg:mr-0 bg-mauve text-white fill-[#bfb5ac] hover:fill-white mt-10"
						>
							<span>{t("landing.button")}</span>
							<svg
								id="a"
								xmlns="http://www.w3.org/2000/svg"
								height={18}
								width={18}
								className="transition-all"
								viewBox="0 0 469.5 500"
							>
								<path
									className="b"
									d="M440.66,221.16c-49.65,0-177.07-138.4-177.07-192.32,0-15.93-12.91-28.84-28.84-28.84s-28.84,12.91-28.84,28.84c0,53.92-127.42,192.32-177.07,192.32-15.93,0-28.84,12.91-28.84,28.84s12.91,28.84,28.84,28.84c49.65,0,177.07,138.4,177.07,192.32,0,15.93,12.91,28.84,28.84,28.84s28.84-12.91,28.84-28.84c0-53.92,127.42-192.32,177.07-192.32,15.93,0,28.84-12.91,28.84-28.84s-12.91-28.84-28.84-28.84Z"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>

			<div className="relative container flex flex-wrap items-center justify-center md:justify-between gap-5 mb-10 md:gap-10 mt-auto max-lg:mt-20">
				<div className="font-montserrat text-sm text-mauve">moonlet design&stuff</div>

				<div>
					<div className="flex items-center justify-center flex-wrap gap-5">
						<SocialMedia fill="var(--mauve)" size="h-5 w-5" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Landing;
