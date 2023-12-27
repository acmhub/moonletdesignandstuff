import { useState } from "react";
import { useTranslation } from "next-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import AnimateSectionTitle from "../../animate/section-title";

const steps = [
	{
		title: "steps.homework.title",
		description: "steps.homework.description",
	},
	{
		title: "steps.moodboard.title",
		description: "steps.moodboard.description",
	},
	{
		title: "steps.sketch.title",
		description: "steps.sketch.description",
	},
	{
		title: "steps.visual.title",
		description: "steps.visual.description",
	},
	{
		title: "steps.collateral.title",
		description: "steps.collateral.description",
	},
	{
		title: "steps.handover.title",
		description: "steps.handover.description",
	},
];

function Steps() {
	const { t } = useTranslation("services");
	const [expandedStep, setExpandedStep] = useState<number | null>(null);

	const handleExpansion = (i: number) => {
		if (i === expandedStep) {
			setExpandedStep(null);
		} else {
			setExpandedStep(i);
		}
	};

	return (
		<section className="section-spacing text-white">
			<div className="container">
				<h1 className="text-center text-white mb-16">
					<AnimateSectionTitle>
						<span className="block font-signature text-6xl mb-2">{t("steps.ourcreative")}</span>
						<span className="block font-montserrat text-beige text-xl">{t("steps.process")}</span>
					</AnimateSectionTitle>
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-y-9">
					{steps.map(({ title, description }, i) => (
						<div className="flex flex-col text-center max-w-xs mx-auto" key={i}>
							<p className="text-4xl text-beige">{i + 1}</p>
							<p className="font-montserrat text-white font-normal normal-case lg:h-20 mb-1 mt-8">
								{t(title)}
							</p>

							<div className="relative">
								<AnimatePresence>
									{expandedStep === i ? (
										<motion.p
											key={i}
											initial="collapsed"
											animate="open"
											exit="collapsed"
											variants={{
												open: { height: "auto" },
												collapsed: { height: 0 },
											}}
											transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
											className={`font-taviraj overflow-hidden ${
												expandedStep !== i && "line-clamp-2"
											}`}
										>
											{t(description)}
										</motion.p>
									) : (
										<p
											className={`absolute top-0 left-0 h-16 w-full font-taviraj ${
												expandedStep !== i && "line-clamp-2"
											}`}
										>
											{t(description)}
										</p>
									)}
								</AnimatePresence>
							</div>

							<div
								className={`flex items-center justify-center group cursor-pointer space-x-8 transition-all durtion-400 py-2
											${expandedStep !== i && "mt-16"}
								`}
								onClick={() => handleExpansion(i)}
							>
								<HiOutlineArrowLongRight
									className={`h-8 w-8 text-beige transition-all duration-300 ${
										expandedStep === i ? "-rotate-90" : "arrow-hover"
									}`}
								/>

								<div className="flex-1 bg-beige h-px w-full" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Steps;
