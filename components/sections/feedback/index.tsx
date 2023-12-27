import { useTranslation } from "next-i18next";

type Props = {
	feedbackData: {
		feedback: string;
		author: string;
		project: string;
	};
};

function Feedback({ feedbackData }: Props) {
	const { t } = useTranslation();
	const { feedback, author, project } = feedbackData;

	return (
		<div className="-mt-2.5">
			<div className="flex">
				<div className="h-8 w-8 translate-y-5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.45 21.57">
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_1-2" data-name="Layer 1">
								<path
									style={{ fill: "#fff" }}
									d="M12.29.67c.73.73.24,2.18-2.19,6.07A34.82,34.82,0,0,0,5.72,16c-1,3.4-1.45,3.89-3.16,3.89-3.15,0-3.4-2.43-.72-8.75C5.48,2.61,10.1-1.76,12.77.67Zm13.12,1c.25.49-.73,2.43-2.18,4.37-3.41,4.38-6.08,9.73-6.08,12.4,0,1.95-1,3.16-2.43,3.16a3.38,3.38,0,0,1-1.46-.49c-3.16-1.94.24-12.15,6.08-18.23C21.52.43,24.44-.3,25.17,1.4Z"
								/>
							</g>
						</g>
					</svg>
				</div>

				<div className="flex-1 py-10">
					<p className="font-taviraj text-center indent-5">{t(feedback)}</p>
				</div>

				<div className="h-8 w-8 mt-auto -translate-y-5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.21 22.28">
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_1-2" data-name="Layer 1">
								<path
									className="cls-1"
									style={{ fill: "#fff" }}
									d="M12,.49c3.16,1.94-.25,12.39-6.08,18.71C3.68,21.63.77,22.36,0,20.66-.21,20.17.77,18,2.22,16,5.63,11.42,8.3,5.83,8.3,3.16,8.3,1.21,9.27,0,10.73,0a3.38,3.38,0,0,1,1.46.49ZM22.64,1.7c3.16,0,3.41,2.67.73,9-3.64,8.75-8.26,13.37-10.94,10.94-.73-.73-.24-2.43,2.19-6.56A34.51,34.51,0,0,0,19,5.83c1-3.4,1.45-3.89,3.16-3.89Z"
								/>
							</g>
						</g>
					</svg>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row items-center justify-center text-center -mt-5 space-y-4 lg:space-y-0">
				<p className="text-mauve text-6xl font-signature pt-1">{author}</p>
				<div className="text-6xl font-signature hidden lg:inline-flex mx-5 pb-2">-</div>
				<p className="font-montserrat text-lg normal-case pt-1">{project}</p>
			</div>
		</div>
	);
}

export default Feedback;
