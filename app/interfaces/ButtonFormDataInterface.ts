export interface FormField {
	type: string;
	state: string;
	value: string;
	placeholder: string;
	required: boolean;
}

export interface ButtonFormDataInterface {
	id: number | string;
	eventTitle: string;
	formFields: FormField[];
}
