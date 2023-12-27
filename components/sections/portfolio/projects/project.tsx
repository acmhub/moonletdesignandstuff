import Link from "next/link";
import Image from "next/image";
import imageUrl from "../../../../lib/sanity/sanity.image";
import { i18n } from "next-i18next";

type Props = {
	project: Project;
	index: number;
};

function Project({ project, index }: Props) {
	const locale: any = i18n?.language;
	const { title, main_image, main_description, slug, services } = project;

	return (
		<Link
			href={`/project/${slug?.current}`}
			className="flex flex-col lg:flex-row sm:max-w-xs lg:max-w-full w-full mx-auto"
		>
			<div className={`lg:basis-[60%] ${index % 2 === 0 && "lg:order-last"}`}>
				<div className="relative w-full">
					{main_image && (
						<Image
							src={imageUrl(main_image)}
							alt={title}
							height={384}
							width={640}
							className="object-cover"
							unoptimized
						/>
					)}
				</div>
			</div>

			<div
				className={`lg:basis-[40%] flex flex-col items-center justify-center text-center p-8 
					${index % 2 === 0 ? "bg-beige" : "bg-light"}
				`}
			>
				{title && <h2 className="font-signature text-[3.5rem] text-6xl">{title}</h2>}

				{main_description && main_description[locale] && (
					<p className="font-taviraj my-5">{main_description[locale]}</p>
				)}
				{services && services[locale] && <p className="font-montserrat text-xs">{services[locale]}</p>}
			</div>
		</Link>
	);
}

export default Project;
