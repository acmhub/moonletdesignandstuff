import React, { useState, useRef } from "react";
import { useTranslation } from "next-i18next";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import useGoogleAnalytics from "../../../hooks/useGAEevent";
import useFormValidation from "../../../hooks/useFormValidation";
import AnimateSectionTitle from "../../animate/section-title";
import { contactFormValidation } from "../../../data/validation-rules";
import Checkbox from "../../inputs/checkbox";
import TextInput from "../../inputs/textinput";
import TextArea from "../../inputs/textarea";

function Form({ pack }: { pack: string }) {
	const { t } = useTranslation("contact");
	const { trackEvent } = useGoogleAnalytics();

	const { validateForm } = useFormValidation({ validationRules: contactFormValidation });
	const formEl = useRef<HTMLFormElement | null>(null);
	const [checkedPacks, setCheckedPacks] = useState<string[]>([]);
	const [isOtherChecked, setIsOtherChecked] = useState(false);

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const isChecked = e.target.checked;

		if (isChecked) {
			setCheckedPacks([...checkedPacks, value]);
		} else {
			setCheckedPacks(checkedPacks.filter((item) => item !== value));
		}

		if (e.target.value === "other_pack") setIsOtherChecked(!isOtherChecked);
	};

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		let form = new FormData(e.target);
		let formData = Object.fromEntries(form);
		formData["interested_in"] = checkedPacks.join(", ");

		if (validateForm(formData)) {
			const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
			const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
			const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

			if (formEl.current) {
				const response = await emailjs.sendForm(serviceId, templateId, formEl.current, userId);
				console.log(response);

				if (response.status === 200) {
					trackEvent({
						category: "Contact Form",
						action: "Email",
					});
					toast.success(t("email-sent"));
					e.target.reset();
				} else {
					toast.success(t("email-error"));
				}
			}
		} else {
			const formInputWithError: HTMLInputElement | null = document.querySelector(".form-input.error-input");

			if (formInputWithError) {
				const inputOrTextareaInsideParent = formInputWithError
					.closest(".form-input")
					?.querySelector("input, textarea") as HTMLElement;
				if (inputOrTextareaInsideParent) {
					inputOrTextareaInsideParent.focus();
				}
			}
		}
	};

	return (
		<section className="relative container text-white">
			<h2 className="text-center mb-16">
				<AnimateSectionTitle>
					<span className="font-signature text-6xl text-white block mb-2">{t("form.fillout")}</span>
					<span className="font-montserrat text-xl text-beige">{t("form.contactform")}</span>
				</AnimateSectionTitle>
			</h2>

			<form
				className="max-w-[90vw] mx-auto lg:max-w-none lg:mx-0"
				id="contact-form"
				onSubmit={handleSubmit}
				ref={formEl}
			>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
					<div className="col-span-1 space-y-5">
						<TextInput name="full_name" label={t("form.fullname") + ":"} isRequired />
						<TextInput name="company_name" label={t("form.company") + ":"} />
						<TextInput name="business_industry" label={t("form.industry") + ":"} />

						<div className="hidden lg:block">
							<p className="font-montserrat text-[15px] normal-case text-beige mb-5">
								{t("form.interested")}:
							</p>

							<div className="font-montserrat text-beige uppercase space-y-5">
								<Checkbox
									value="Base Pack"
									label={t("form.base")}
									onChange={handleCheckboxChange}
									defaultChecked={pack === "base"}
								/>
								<Checkbox
									value="Essential Pack"
									label={t("form.essential")}
									onChange={handleCheckboxChange}
									defaultChecked={pack === "essential"}
								/>
								<Checkbox
									value="Extra Pack"
									label={t("form.extra")}
									onChange={handleCheckboxChange}
									defaultChecked={pack === "extra"}
								/>

								<Checkbox value="other_pack" label={t("form.other")} onChange={handleCheckboxChange} />
								{isOtherChecked && <TextInput name="other_interest" label="" />}
							</div>
						</div>
					</div>

					<div className="col-span-1 space-y-5">
						<TextInput name="email" label={t("form.email") + ":"} isRequired />
						<TextInput name="subject" label={t("form.subject") + ":"} isRequired />
						<TextInput name="source" label={t("form.source") + ":"} />
						<TextArea name="message" label={t("form.message")} isRequired />

						<div className="lg:hidden">
							<p className="font-montserrat text-[15px] normal-case text-beige mb-5">
								{t("form.interested")}
							</p>

							<div className="font-montserrat text-beige uppercase space-y-5">
								<Checkbox
									value="Base Pack"
									label={t("form.base")}
									onChange={handleCheckboxChange}
									defaultChecked={pack === "base"}
								/>
								<Checkbox
									value="Essential Pack"
									label={t("form.essential")}
									onChange={handleCheckboxChange}
									defaultChecked={pack === "essential"}
								/>
								<Checkbox
									value="Extra Pack"
									label={t("form.extra")}
									onChange={handleCheckboxChange}
									defaultChecked={pack === "extra"}
								/>

								<Checkbox value="other_pack" label={t("form.other")} onChange={handleCheckboxChange} />
								{isOtherChecked && <TextInput name="other interest" label="" />}
							</div>
						</div>
					</div>
				</div>

				<button
					className="block font-montserrat font-normal text-white text-sm button hover:bg-beige border border-beige w-fit mx-auto mt-14 duration-150"
					type="submit"
				>
					{t("form.send")}
				</button>
			</form>
		</section>
	);
}

export default Form;
