import { InputTextarea } from "primereact/inputtextarea";
import { FormField } from "../../interfaces/ButtonFormDataInterface";

const TextArea = ({data}:{data:FormField}) => {
    const {value, placeholder, required, state} = data;
    return (
        <InputTextarea className="w-full col-span-2" name={state} value={value} placeholder={placeholder} required={required} />
    );
};

export default TextArea;