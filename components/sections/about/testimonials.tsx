import { useTranslation } from "next-i18next";
import Feedback from "../feedback";

const feedbackData = {
	feedback: "testimonials.about_feedback",
	author: "Clifton Lee",
	project: "Lucid Multimedia",
};

function Testimonials() {
	const { t } = useTranslation();

	return (
		<section className="bg-light section-spacing lg:pb-16">
			<div className="container">
				<h2 className="text-center">
					<span className="block font-montserrat text-xl mb-2">{t("testimonials.clientfeedback")}</span>
					<span className="block font-signature text-6xl">- {t("testimonials.working")} -</span>
				</h2>

				<Feedback feedbackData={feedbackData} />
			</div>
		</section>
	);
}

export default Testimonials;
