'use client'
import { ButtonFormDataInterface } from '@/app/interfaces/ButtonFormDataInterface';
import { Button } from 'primereact/button';

interface propsInterface{
    data: ButtonFormDataInterface,
    setEventData: React.Dispatch<React.SetStateAction<ButtonFormDataInterface | null>>;
    formRef: React.RefObject<HTMLFormElement>;
}

const EventButton = ({ data, setEventData, formRef }: propsInterface) => {

    const handleButtonClick=()=>{
        setEventData(data)
        if(formRef.current){
            formRef.current.reset()
        }
    }

    return (
        <Button onClick={handleButtonClick} className='w-full xs:text-xs' label={data.eventTitle.toUpperCase()} />
    )
};

export default EventButton;