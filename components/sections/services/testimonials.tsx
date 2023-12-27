import React from "react";
import Feedback from "../feedback";
import { useTranslation } from "next-i18next";

const feedbackData = {
	feedback: "testimonials.services_feedback",
	author: "Cortney Cameron",
	project: "The Nature Therapy Center",
};

function Testimonials() {
	const { t } = useTranslation();
	return (
		<section className="bg-light section-spacing lg:pb-16">
			<div className="container">
				<h2 className="text-center">
					<span className="block font-montserrat text-xl mb-2">{t("testimonials.clientfeedback")}</span>
					<span className="block font-signature text-6xl">- {t("testimonials.process")} -</span>
				</h2>

				<Feedback feedbackData={feedbackData} />
			</div>
		</section>
	);
}

export default Testimonials;
