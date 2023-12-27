import { useState } from "react";
import { useTranslation } from "next-i18next";

interface ValidationRule {
	validate: (value: string) => boolean;
	message: string;
}

interface ValidationRules {
	[key: string]: ValidationRule;
}

interface ValidationErrors {
	[key: string]: string;
}

interface FormValues {
	[key: string]: FormDataEntryValue;
}

interface UseFormValidationProps {
	validationRules: ValidationRules;
}

const useFormValidation = ({ validationRules }: UseFormValidationProps) => {
	const { t } = useTranslation();
	const [errors, setErrors] = useState<ValidationErrors>({});

	const validateForm = (formData: FormValues) => {
		const newErrors: ValidationErrors = {};

		Object.entries(validationRules).forEach(([key, rule]) => {
			const value = formData[key];
			if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
				if (!rule.validate(value.toString())) {
					newErrors[key] = rule.message;
				} else {
					delete newErrors[key];
				}
			}
		});

		setErrors(newErrors);
		updateErrorSpans(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	const updateErrorSpans = (errorObject: ValidationErrors) => {
		Object.keys(errorObject).forEach((fieldName) => {
			const input = document.getElementById(fieldName);
			if (input) {
				const errorSpan = document.getElementById(`${fieldName}-error`);
				const translationKey = errorObject[fieldName];
				const translatedMessage = t(translationKey) || translationKey;

				if (errorSpan) {
					errorSpan.innerHTML = translatedMessage;
				} else {
					createErrorSpan(fieldName, translatedMessage);
				}
			}
		});

		Object.keys(validationRules).forEach((fieldName) => {
			if (!errorObject[fieldName]) {
				removeErrorSpan(fieldName);
			}
		});
	};

	const createErrorSpan = (fieldName: string, message: string) => {
		const input = document.getElementById(fieldName);
		input?.parentElement?.classList.add("error-input");

		if (input) {
			const errorSpan = document.createElement("span");
			errorSpan.innerHTML = message;
			errorSpan.style.color = "red";
			errorSpan.classList.add("absolute", "bottom-0", "left-0");
			errorSpan.id = `${fieldName}-error`;
			input.parentNode?.appendChild(errorSpan);
		}
	};

	const removeErrorSpan = (fieldName: string) => {
		const input = document.getElementById(fieldName);
		input?.parentElement?.classList.remove("error-input");

		const errorSpan = document.getElementById(`${fieldName}-error`);
		if (errorSpan) {
			errorSpan.parentNode?.removeChild(errorSpan);
		}
	};

	return { validateForm, errors };
};

export default useFormValidation;
