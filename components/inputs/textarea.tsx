import { BsAsterisk } from "react-icons/bs";

type Props = {
	name: string;
	label: string;
	id?: string;
	isRequired?: boolean;
};

function TextArea({ name, label, id, isRequired }: Props) {
	return (
		<div className="form-input pb-8">
			<label htmlFor={id ? id : name}>
				{isRequired && <BsAsterisk className="h-2 w-2 text-white inline-block mr-2 mb-2" />}
				{label}:
			</label>
			<textarea name={name} id={id ? id : name} className="resize-none h-[14.3rem]" />
		</div>
	);
}

export default TextArea;
