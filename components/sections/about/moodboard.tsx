import { i18n, useTranslation } from "next-i18next";
import Image from "next/image";

const boards = [
	{
		front: "/images/moodboard/a_1.webp",
		back: "/images/moodboard/b_1.webp",
	},
	{
		front: "/images/moodboard/a_2.webp",
		back: "/images/moodboard/b_2.webp",
	},
	{
		front: "/images/moodboard/a_3.webp",
		back: "/images/moodboard/b_3.webp",
	},
	{
		front: "/images/moodboard/a_4.webp",
		back: "/images/moodboard/b_4.webp",
	},
	{
		front: "/images/moodboard/a_5.webp",
		back: "/images/moodboard/b_5.webp",
	},
	{
		front: "/images/moodboard/a_6.webp",
		back: "/images/moodboard/b_6.webp",
	},
	{
		front: "/images/moodboard/a_7.webp",
		back: "/images/moodboard/b_7.webp",
	},
	{
		front: "/images/moodboard/a_8.webp",
		back: "/images/moodboard/b_8.webp",
	},
	{
		front: "/images/moodboard/a_9.webp",
		back: "/images/moodboard/b_9.webp",
	},
	{
		front: "/images/moodboard/a_10.webp",
		back: "/images/moodboard/b_10.webp",
	},
	{
		front: "/images/moodboard/a_11.webp",
		back: "/images/moodboard/b_11.webp",
	},
	{
		front: "/images/moodboard/a_12.webp",
		back: "/images/moodboard/b_12.webp",
	},
];

function Moodboard() {
	const { t } = useTranslation("about");
	const locale: any = i18n?.language;

	return (
		<section className="container section-spacing pt-10">
			{locale === "en" ? (
				<h2 className="text-center flex items-center justify-center space-x-4 mb-14">
					<span className="text-6xl text-white font-signature">My</span>
					<span className="font-montserrat text-xl text-beige">moodboard</span>
				</h2>
			) : (
				<h2 className="text-center flex items-center justify-center space-x-4 mb-14">
					<span className="font-montserrat text-xl text-beige">moodboard-ul</span>
					<span className="text-6xl text-white font-signature">meu</span>
				</h2>
			)}

			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-fit mx-auto lg:max-w-nomal lg:mx-auto">
				{boards.map(({ front, back }, i) => (
					<div className="flip-card h-44 w-44 mx-auto" key={i}>
						<div className="relative h-full w-full flip-card-inner">
							<div className="absolute h-44 w-full flip-card-front">
								<Image
									src={front}
									alt="Moodboard"
									className="object-cover"
									sizes="11rem"
									fill
									unoptimized
								/>
							</div>
							<div className="absolute h-44 w-full flip-card-back">
								<Image
									src={back}
									alt="Moodboard"
									className="object-cover"
									sizes="11rem"
									fill
									unoptimized
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Moodboard;
