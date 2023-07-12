import { Calendar } from 'primereact/calendar';
import { FormField } from '../../interfaces/ButtonFormDataInterface';

const CalenderField = ({data}:{data:FormField}) => {
    const {placeholder, required, state} = data
    return (
        <Calendar className="w-full col-span-2" name={state} placeholder={placeholder} required={required} />
    );
};

export default CalenderField;