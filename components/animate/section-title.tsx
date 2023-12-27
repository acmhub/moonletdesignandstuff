import React from "react";
import { motion } from "framer-motion";

type AnimateSectionTitleProps = {
	children: React.ReactNode;
};

const sectionTitleWrapper = {
	hidden: {
		opacity: 0,
		y: -20,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: -0.5,
			staggerChildren: 0.25,
			staggerDirection: -1,
		},
	},
};

const sectionTitleChild = {
	hidden: {
		opacity: 0,
		y: -20,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			type: "spring",
			bounce: 25,
			stiffness: 50,
		},
	},
};

export default function AnimateSectionTitle({ children }: AnimateSectionTitleProps) {
	return (
		<motion.span
			className="block"
			initial="hidden"
			whileInView="animate"
			exit="hidden"
			variants={sectionTitleWrapper}
		>
			{React.Children.map(children, (child, i) => (
				<motion.span className="block" variants={sectionTitleChild} key={i}>
					{child}
				</motion.span>
			))}
		</motion.span>
	);
}
