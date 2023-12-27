import { useState } from "react";
import { useTranslation } from "next-i18next";
import Project from "./project";
import AnimateSectionTitle from "../../../animate/section-title";

function DisplayProjects({ projects }: { projects: Project[] }) {
	const { t } = useTranslation("portfolio");

	const [currentIndex, setCurrentIndex] = useState(0);
	const [displayData, setDisplayData] = useState(projects.slice(0, 5));

	function handleLoadMore() {
		const newIndex = currentIndex + 5;
		const newData = projects.slice(newIndex, newIndex + 5);
		setDisplayData([...displayData, ...newData]);
		setCurrentIndex(newIndex);
	}

	return (
		<section className="container section-spacing">
			<h1 className="text-center mb-24">
				<AnimateSectionTitle>
					<span className="text-6xl text-white font-signature block mb-2">{t("takealook")}</span>
					<span className="font-montserrat text-beige text-xl">{t("ourprojects")}</span>
				</AnimateSectionTitle>
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 gap-y-10 lg:gap-y-20">
				{displayData.map((project, index) => (
					<Project project={project} index={index} key={index} />
				))}
			</div>

			{currentIndex + 5 < projects.length && (
				<button
					className="button block w-fit mx-auto font-montserrat normal-case text-white border border-beige hover:bg-beige duration-150 mt-10"
					onClick={handleLoadMore}
				>
					{t("loadmore")}
				</button>
			)}
		</section>
	);
}

export default DisplayProjects;
