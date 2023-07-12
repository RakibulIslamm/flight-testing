import { InputText } from "primereact/inputtext";
import React from "react";
import { BiSearch } from 'react-icons/bi'

interface propsInterface{
    placeholder :string;
    setSearchText: React.Dispatch<React.SetStateAction<string | ''>>
}


const FormSearchField = ({ placeholder, setSearchText }: propsInterface) => {
    
    return (
        <div className="w-6/12 flex items-center gap-5 relative">
            <InputText className="w-full" placeholder={placeholder} onChange={(e)=> setSearchText(e.target.value)} />
            <button className="text-3xl absolute right-2 top-1/2 transform -translate-y-1/2">
                <BiSearch />
            </button>
        </div>

    );
};

export default FormSearchField;