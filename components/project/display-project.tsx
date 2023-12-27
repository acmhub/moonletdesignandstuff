import React from "react";
import { i18n } from "next-i18next";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Layout from "../../components/app";
import AnimateSectionTitle from "../animate/section-title";
import imageUrl from "../../lib/sanity/sanity.image";

interface ProjectProps {
	projects: Project[];
	project: Project;
}

function DisplayProject({ projects, project }: ProjectProps) {
	const { t } = useTranslation();
	let locale: any = i18n?.language;
	const router = useRouter();

	function getAdjacentProject(projects: Project[], currentProject: Project, direction: string) {
		const currentIndex = projects.findIndex((p) => p._id === currentProject._id);
		const adjacentIndex = direction === "prev" ? currentIndex + 1 : currentIndex - 1;

		if (adjacentIndex === -1 || currentIndex === 0) return projects[projects.length - 1];
		if (adjacentIndex === projects.length) return projects[0];

		return projects[adjacentIndex];
	}

	function handleProjectNav(direction: string, currentProject: Project) {
		const adjacentProject = getAdjacentProject(projects, currentProject, direction);
		if (adjacentProject) {
			router.push(`/project/${adjacentProject.slug.current}`);
		}
	}

	return (
		<Layout
			title={project?.title}
			description={project?.main_description[locale]}
			canonical={`https://moonletdesign.com/project/${project?.slug?.current}`}
			page="project"
		>
			<div className="header-gradient" />

			<div className="relative top-spacing pt-36 lg:pt-48 lg:px-0">
				<h1 className="text-center mb-20">
					<AnimateSectionTitle>
						<span className="block font-signature text-white text-6xl mb-2.5">{project?.title}</span>
						<span className="block font-montserrat text-beige uppercase">{project?.tagline[locale]}</span>
					</AnimateSectionTitle>
				</h1>

				<div className="container px-0">
					<div className="relative bg-light section-spacing space-y-14">
						<p className="font-taviraj text-center px-5 md:px-12 mx-auto">
							{project?.description1[locale]}
						</p>

						{project?.moodboard && (
							<div className="relative">
								<p className="absolute top-1/2 -translate-y-1/2 -left-5 lg:left-5 font-montserrat text-beige -rotate-90">
									moodboard
								</p>

								<div className="h-[60vw] md:h-96 w-fit mx-auto border border-mauve">
									<img
										src={imageUrl(project?.moodboard)}
										alt="Moodboard"
										className="h-full w-full object-contain"
									/>
								</div>
							</div>
						)}

						<p className="font-taviraj text-center px-5 md:px-12 mx-auto">
							{project?.description2[locale]}
						</p>

						<div className="relative px-5 md:px-20">
							<p className="absolute top-1/2 -translate-y-1/2 left-5 lg:left-[4.25rem] font-montserrat text-white -rotate-90">
								peek
							</p>
							{project?.sketch && (
								<img
									src={imageUrl(project?.sketch)}
									alt="Design Sketch"
									className="h-full max-h-72 w-full object-cover"
								/>
							)}
						</div>

						<p className="font-taviraj text-center px-5 md:px-12 mx-auto">
							{project?.description3[locale]}
						</p>

						<div>
							{project?.mockups[0] && (
								<img
									src={imageUrl(project?.mockups[0])}
									alt="Design Mockup"
									className="h-full max-h-[35rem] w-full object-cover"
								/>
							)}

							<div className="grid grid-cols-2">
								{project?.mockups[1] && (
									<img
										src={imageUrl(project?.mockups[1])}
										alt="Design Mockup"
										className="h-full max-h-72 object-cover"
									/>
								)}

								{project?.mockups[2] && (
									<img
										src={imageUrl(project?.mockups[2])}
										alt="Design Mockup"
										className="h-full max-h-72 object-cover"
									/>
								)}
							</div>
						</div>

						<p className="font-taviraj text-center px-5 md:px-12 mx-auto">
							{project?.description4[locale]}
						</p>

						{project?.mockups[3] && (
							<img
								src={imageUrl(project?.mockups[3])}
								alt="Design Mockup"
								className="h-full max-h-[27.5rem] w-full object-contain px-12"
							/>
						)}

						{project?.mockups[4] && (
							<img
								src={imageUrl(project?.mockups[4])}
								alt="Design Mockup"
								className="h-full max-h-[27.5rem] w-full object-contain px-12"
							/>
						)}

						<p className="font-taviraj text-center px-5 md:px-12 mx-auto">
							{project?.description5[locale]}
						</p>

						<div className="space-y-4 pt-2">
							{(project?.behance_link || project?.instagram_link) && (
								<p className="font-montserrat text-base text-center">
									<span className="normal-case text-dark">{t("project.findit")}</span>
									{project?.behance_link && (
										<a
											href={project?.behance_link}
											className="inline pl-1.5 hover:underline underline-offset-4 cursor-pointer"
											target="_blank"
											rel="noopener noreferrer"
										>
											behance
										</a>
									)}

									{project?.behance_link && project?.instagram_link && (
										<span className="pl-1.5">|</span>
									)}

									{project?.instagram_link && (
										<a
											href={project?.instagram_link}
											className="inline pl-1.5 hover:underline underline-offset-4 cursor-pointer"
											target="_blank"
											rel="noopener noreferrer"
										>
											instagram
										</a>
									)}
								</p>
							)}
							<p className="font-signature text-6xl text-center">{t("project.thanks")}</p>
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-between text-beige gap-5 my-16 px-8 lg:px-0">
						<div
							className="flex items-center space-x-5 text-beige group cursor-pointer"
							onClick={() => handleProjectNav("prev", project)}
						>
							<HiOutlineArrowLongRight className="h-8 w-8 transition translate-x-1 group-hover:translate-x-0 rotate-180" />
							<span className="font-signature text-6xl max-xs:text-5xl max-xs:mb-0 mb-2">
								{t("project.prev")}
							</span>
						</div>

						<div
							className="flex items-center space-x-6 text-beige group cursor-pointer"
							onClick={() => handleProjectNav("next", project)}
						>
							<span className="font-signature text-6xl max-xs:text-5xl max-xs:mb-0 mb-2">
								{t("project.next")}
							</span>
							<HiOutlineArrowLongRight className="h-8 w-8 arrow-hover" />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default DisplayProject;
