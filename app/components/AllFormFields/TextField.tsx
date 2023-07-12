import { InputText } from "primereact/inputtext";
import { FormField } from "../../interfaces/ButtonFormDataInterface";

const TextField = ({data}:{data:FormField}) => {
    const {type, placeholder, required, state} = data
    return (
        <InputText className="w-full col-span-2 px-4" name={state} type={type} placeholder={placeholder} required={required} />
    );
};

export default TextField;