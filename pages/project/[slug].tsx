import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PreviewSuspense } from "next-sanity/preview";
import { sanityclient } from "../../lib/sanity/sanity.client";
import { DisplayProject, PreviewProject } from "../../components/project";

type Props = {
	preview: boolean;
	projects: Project[];
	project: Project;
	queryParams: { [key: string]: any };
};

const project_query = `*[_type == "project" && slug.current == $slug][0]`;

function ProjectPage({ preview, projects, project, queryParams }: Props) {
	return preview ? (
		<PreviewSuspense fallback={<p className="text-white">loading..</p>}>
			<PreviewProject projects={projects} query={project_query} queryParams={queryParams} />
		</PreviewSuspense>
	) : (
		<DisplayProject projects={projects} project={project} />
	);
}

export default ProjectPage;

export async function getStaticPaths({ locales }: { locales: string[] }) {
	const slugs = await sanityclient.fetch(`*[_type == "project"]{slug}`);

	const paths = slugs.flatMap((slug: { slug: { current: string } }) => {
		return locales.map((locale) => {
			return {
				params: { slug: slug.slug.current },
				locale: locale,
			};
		});
	});

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({
	params,
	preview,
	locale,
}: {
	params: { slug: string };
	preview: boolean;
	locale: string;
}) {
	const { slug } = params;
	const queryParams = { slug: slug ?? `` };

	const projects_query = `*[_type == "project"] | order(publishedAt desc)`;
	const projects = await sanityclient.fetch(projects_query);
	const project = await sanityclient.fetch(`*[_type == "project" && slug.current == $slug][0]`, { slug });

	return {
		props: {
			preview: preview || false,
			projects,
			project,
			queryParams,
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
