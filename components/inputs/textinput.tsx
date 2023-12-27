import { BsAsterisk } from "react-icons/bs";

type Props = {
	name: string;
	label: string;
	id?: string;
	isRequired?: boolean;
};

function TextInput({ name, label, id, isRequired }: Props) {
	return (
		<div className="form-input pb-8">
			<label htmlFor={id ? id : name}>
				{isRequired && <BsAsterisk className="h-2 w-2 text-white inline-block mr-2 mb-2" />}
				{label}
			</label>
			<input type="text" name={name} id={id ? id : name} />
		</div>
	);
}

export default TextInput;
