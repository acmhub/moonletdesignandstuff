import React, { useState } from "react";

type Props = {
	value: string;
	label: string;
	name?: string;
	id?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	checked?: boolean;
};

function Checkbox({ value, label, name, id, onChange, checked }: Props) {
	const [isChecked, setIsChecked] = useState(checked || false);
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		if (onChange) {
			setIsChecked(event.target.checked);
			onChange(event);
		}
	};

	return (
		<label className="checkbox path flex items-center w-fit cursor-pointer z-40" htmlFor={id}>
			<input
				type="checkbox"
				name={name}
				value={value}
				onChange={handleChange}
				checked={isChecked || checked || false}
				id={id}
			/>
			<svg viewBox="0 0 21 21">
				<path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
			</svg>
			<span className="text-[15px] pl-2.5">{label}</span>
		</label>
	);
}

export default Checkbox;
