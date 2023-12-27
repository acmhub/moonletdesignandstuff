import { useState } from "react";
import { useTranslation } from "next-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import Checkbox from "../../inputs/checkbox";

const options = [
	{
		label: "common:cookies.functionality",
		value: "functionality",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo amet, nostrum inventore nobis quaerat provident quam officiis adipisci odio eum?",
		required: true,
	},
	{
		label: "common:cookies.performance",
		value: "analytics",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo amet, nostrum inventore nobis quaerat provident quam officiis adipisci odio eum?",
		required: false,
	},
];

function CookieOptions() {
	const { t } = useTranslation();
	const [expandedOption, setExpandedOption] = useState<number | null>(null);

	const handleExpansion = (i: number) => {
		if (i === expandedOption) {
			setExpandedOption(null);
		} else {
			setExpandedOption(i);
		}
	};

	return (
		<div className="space-y-2.5">
			{options.map(({ label, value, description, required }, i) => (
				<div className="overflow-hidden" key={i}>
					<div className="flex items-center justify-between pb-1">
						<div className="shrink-0">
							<Checkbox value={value} label={t(label)} defaultChecked={true} />
						</div>

						<BsChevronDown
							className={`cursor-pointer shrink-0 transition-all ${expandedOption === i && "rotate-180"}`}
							onClick={() => handleExpansion(i)}
						/>
					</div>

					<AnimatePresence>
						{expandedOption === i && (
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
								className="text-sm"
							>
								{description}
							</motion.p>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
}

export default CookieOptions;
