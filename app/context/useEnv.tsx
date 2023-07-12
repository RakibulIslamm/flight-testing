import { useContext } from "react";
import { EnvContextValueInterface, EnvContext } from "./ContextProvider";


const useEnv = () =>{
    const {selectedEnv, setSelectedEnv} = useContext(EnvContext) as EnvContextValueInterface
    return {
        selectedEnv, setSelectedEnv
    }
}

export default useEnv