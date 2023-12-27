import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import faqs from "../../../data/faqs";

function FAQ() {
	const { t } = useTranslation("contact");
	const router = useRouter();
	const { faq } = router.query;
	const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

	useEffect(() => {
		if (faq) {
			let elem = document.getElementById(faq as string);
			if (elem) window.scrollTo({ top: elem.getBoundingClientRect().top, left: 0, behavior: "smooth" });
		}
	}, [faq]);

	const handleExpansion = (i: number) => {
		i === expandedFaq ? setExpandedFaq(null) : setExpandedFaq(i);
	};

	return (
		<section className="relative section-spacing" id="faq">
			<div
				className="absolute top-0 left-0 h-full w-full bg-cover bg-top bg-fixed z-0"
				style={{
					backgroundImage: "url(/images/fillers/clipboard_clips.webp)",
				}}
			/>

			<div className="relative container">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
					<div className="col-span-1 lg:col-span-4 text-center lg:text-left">
						<p className="font-montserrat text-mauve text-xxl mb-5">FAQ</p>

						<h2 className="text-white font-taviraj font-normal text-4xl space-y-2">
							{t("faq.frequentlyasked")
								.split(" ")
								.map((e) => (
									<span className="block" key={e}>
										{e} <br />
									</span>
								))}
						</h2>
					</div>

					<div className="col-span-1 lg:col-span-8 lg:mt-5">
						{faqs.map(({ question, answer }, i) => (
							<div className="overflow-hidden border-b p-5" key={i}>
								<div className="flex items-center cursor-pointer" onClick={() => handleExpansion(i)}>
									<HiOutlineArrowLongRight
										className={`h-8 w-8 text-green mr-8 transition-all ${
											expandedFaq === i && "rotate-90"
										}`}
									/>

									<p className="flex-1 font-taviraj">{t(question)}</p>
								</div>

								<div className={`${expandedFaq === i ? "max-h-max pt-5" : "max-h-0 opacity-0"}`}>
									<p
										className="font-taviraj font-normal leading-6 pl-16"
										dangerouslySetInnerHTML={{ __html: t(answer).toString() }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default FAQ;
