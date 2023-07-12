import { Button } from "primereact/button";
import { ButtonFormDataInterface } from "../../interfaces/ButtonFormDataInterface";
import TextField from "../AllFormFields/TextField";
import CalenderField from "../AllFormFields/CalenderField";
import TextArea from "../AllFormFields/TextArea";
import { EnvOptionInterface } from "../../interfaces/interfaces";
import {useState} from 'react'

interface propsInterface{
    eventData: ButtonFormDataInterface;
    formRef: React.RefObject<HTMLFormElement>;
	env: EnvOptionInterface | null
}

const EventForm = ({ eventData, formRef, env }: propsInterface) => {
	const [checked, setChecked] = useState(true);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
        const form = e.currentTarget;
		const data: {dataFor: string, [key: string]: string } = {dataFor:eventData.eventTitle};
		formData.forEach((value, key) => {
			data[key] = value as string;
		});

		form.reset()
		// console.log(`${env?.title}: `, data)
		try{
			const res = await fetch(`/api/playwright?headless=${checked}`, {
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body: JSON.stringify({ envType: env?.title, data: { ...data } })
			})
			const resData = await res.json();
			console.log(resData)
		}
		catch(err){

		}
		finally{
			form.reset()
		}

        // form.reset()
	};

	return (
		<div className="my-3 w-10/12 md:w-full sm:w-full xs:w-full">
			{/*  */}
			<div className="flex items-center my-4">
				<input id="default-checkbox" type="checkbox" onChange={()=>setChecked(!checked)} checked={checked} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
				<label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
					Headless
				</label>
			</div>
			<form onSubmit={handleSubmit} className="w-full grid grid-cols-8  gap-4 sm:grid-cols-4 xs:grid-cols-2" ref={formRef}>
				{eventData?.formFields.map(
					(field, index) =>
						(field.type === "text" ||
							field.type === "number" ||
							field.type === "email") && <TextField key={index} data={field} />
				)}
				{eventData?.formFields.map(
					(field, index) =>
						field.type === "date" && <CalenderField key={index} data={field} />
				)}
				{eventData?.formFields.map(
					(field, index) =>
						field.type === "textarea" && <TextArea key={index} data={field} />
				)}
				<Button
					className="px-5 py-3 bg-[#14b8a6] rounded-md text-white inline-block w-full col-span-2"
					label='Start Task'
					type="submit"
				/>
			</form>
		</div>
	);
};

export default EventForm;

{
	/* <div className="my-3 w-10/12">
            <form className="w-full grid grid-cols-7 gap-4">
                <InputText className="w-full col-span-2" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} placeholder="Flight Number" required />

                <Calendar className="w-full col-span-2" value={date} onChange={(e: CalendarChangeEvent) => setDate(e.value)} placeholder="Departure Local Date" required />

                <InputText className="w-full col-span-2" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} placeholder="Delay Minute" required />

                <Button className="px-5 py-3 bg-[#14b8a6] rounded-md text-white inline-block w-full col-span-" label="Start Task" type="submit"/>
            </form>
        </div> */
}
