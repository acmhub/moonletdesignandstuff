import React from "react";
import { i18n } from "next-i18next";
import Link from "next/link";
import { RxExit } from "react-icons/rx";
import { useRouter } from "next/router";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Layout from "../../components/app";
import AnimateSectionTitle from "../animate/section-title";
import imageUrl from "../../lib/sanity/sanity.image";
import { usePreview } from "../../lib/sanity/sanity.preview";

function PreviewProject({
	projects,
	query,
	queryParams,
}: {
	projects: Project[];
	query: string;
	queryParams: { [key: string]: any };
}) {
	const project = usePreview(null, query, queryParams);
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
		console.log(adjacentProject);
		if (adjacentProject) {
			router.push(`/project/${adjacentProject.slug.current}`);
		}
	}

	return (
		<Layout title={project?.title} page="project">
			<div className="header-gradient" />

			<div className="relative top-spacing pt-36 lg:pt-48 lg:px-0">
				<Link
					className="fixed top-0 right-0 bg-mauve text-white hover:brightness-125 transition-all rounded-bl-xl p-4 z-50"
					href="/api/exit-preview"
				>
					<RxExit />
				</Link>

				<h1 className="text-center mb-20">
					<AnimateSectionTitle>
						<span className="block font-signature text-white text-6xl mb-2.5">{project?.title}</span>
						<span className="block font-montserrat text-beige uppercase">
							{project?.tagline && project?.tagline[locale]}
						</span>
					</AnimateSectionTitle>
				</h1>

				<div className="container px-0">
					<div className="relative bg-light section-spacing space-y-14">
						<p className="font-taviraj text-center px-5 md:px-12 mx-auto">
							{project?.description1 && project?.description1[locale]}
						</p>

						<div className="relative">
							<p className="absolute top-1/2 -translate-y-1/2 -left-5 lg:left-5 font-montserrat text-beige -rotate-90">
								moodboard
							</p>

							{project?.moodboard && (
								<img
									src={imageUrl(project?.moodboard)}
									alt="Moodboard"
									className="h-[60vw] md:h-96 w-fit mx-auto object-contain border border-mauve"
								/>
							)}
						</div>

						<p className="font-taviraj text-center px-5 md:px-12 mx-auto">
							{project?.description2 && project?.description2[locale]}
						</p>

						<div className="relative px-5 md:px-20">
							<p className="absolute top-1/2 -translate-y-1/2 -left-1 lg:left-10 font-montserrat text-beige -rotate-90">
								sketches
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
							{project?.description3 && project?.description3[locale]}
						</p>

						<div>
							{project?.mockups && project?.mockups[0] && (
								<img
									src={imageUrl(project?.mockups[0])}
									alt="Design Mockup"
									className="h-full max-h-[35rem] w-full object-cover"
								/>
							)}

							<div className="grid grid-cols-2">
								{project?.mockups && project?.mockups[1] && (
									<img
										src={imageUrl(project?.mockups[1])}
										alt="Design Mockup"
										className="h-full max-h-72 object-cover"
									/>
								)}

								{project?.mockups && project?.mockups[2] && (
									<img
										src={imageUrl(project?.mockups[2])}
										alt="Design Mockup"
										className="h-full max-h-72 object-cover"
									/>
								)}
							</div>
						</div>

						<p className="font-taviraj text-center px-5 md:px-12 mx-auto">
							{project?.description4 && project?.description4[locale]}
						</p>

						{project?.mockups && project?.mockups[3] && (
							<img
								src={imageUrl(project?.mockups[3])}
								alt="Design Mockup"
								className="h-full max-h-[27.5rem] w-full object-contain px-12"
							/>
						)}

						{project?.mockups && project?.mockups[4] && (
							<img
								src={imageUrl(project?.mockups[4])}
								alt="Design Mockup"
								className="h-full max-h-[27.5rem] w-full object-contain px-12"
							/>
						)}

						<p className="font-taviraj text-center px-5 md:px-12 mx-auto">
							{project?.description5 && project?.description5[locale]}
						</p>

						<div className="space-y-4 pt-2">
							<p className="font-montserrat text-base text-center">
								<span className="normal-case text-dark">Find it on</span>
								<a
									href={project?.link}
									className="inline pl-1.5 hover:underline underline-offset-4 cursor-pointer"
									target="_blank"
									rel="noopener noreferrer"
								>
									behance
								</a>
							</p>

							<p className="font-signature text-6xl text-center">Thanks for reading</p>
						</div>
					</div>

					<div className="flex items-center justify-between text-beige my-16 px-8 lg:px-0">
						<div
							className="flex items-center space-x-5 text-beige group cursor-pointer"
							onClick={() => handleProjectNav("prev", project)}
						>
							<HiOutlineArrowLongRight className="h-8 w-8 transition translate-x-1 group-hover:translate-x-0 rotate-180" />
							<span className="font-signature text-6xl mb-2">Prev</span>
						</div>

						<div
							className="flex items-center space-x-6 text-beige group cursor-pointer"
							onClick={() => handleProjectNav("next", project)}
						>
							<span className="font-signature text-6xl mb-2">Next</span>
							<HiOutlineArrowLongRight className="h-8 w-8 arrow-hover" />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default PreviewProject;
