import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { RxExit } from "react-icons/rx";
import { usePreview } from "../../../../lib/sanity/sanity.preview";
import AnimateSectionTitle from "../../../animate/section-title";
import Project from "./project";

function PortfolioPreview({ query }: { query: string }) {
	const { t } = useTranslation("portfolio");
	const data = usePreview(null, query);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [displayData, setDisplayData] = useState(data.slice(0, 5));

	function handleLoadMore() {
		const newIndex = currentIndex + 5;
		const newData = data.slice(newIndex, newIndex + 5);
		setDisplayData([...displayData, ...newData]);
		setCurrentIndex(newIndex);
	}

	return (
		<section className="container section-spacing">
			<Link
				className="fixed top-0 right-0 bg-mauve text-white hover:brightness-125 transition-all rounded-bl-xl p-4 z-50"
				href="/api/exit-preview"
			>
				<RxExit />
			</Link>

			<h1 className="text-center mb-24">
				<AnimateSectionTitle>
					<span className="text-6xl text-white font-signature block mb-2">{t("takealook")}</span>
					<span className="font-montserrat text-beige text-xl">{t("ourprojects")}</span>
				</AnimateSectionTitle>
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 gap-y-10 lg:gap-y-20">
				{data.map((project: Project, index: number) => (
					<Project project={project} index={index} key={index} />
				))}
			</div>

			{currentIndex + 5 < data.length && (
				<button
					className="button block w-fit mx-auto font-montserrat normal-case text-white border border-beige hover:bg-beige duration-150"
					onClick={handleLoadMore}
				>
					{t("loadmore")}
				</button>
			)}
		</section>
	);
}

export default PortfolioPreview;
