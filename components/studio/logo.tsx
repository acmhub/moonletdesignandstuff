import Image from "next/image";

function Logo(props: any) {
	const { renderDefault } = props;

	return (
		<div className="flex items-center p-2.5">
			<div className="relative h-10 w-10">
				<Image src="/images/logo/logo-beige.svg" alt=" " className="object-contain" fill />
			</div>
			<>{renderDefault(props)}</>
		</div>
	);
}

export default Logo;
