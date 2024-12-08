import { useState } from 'react';

const useForm = ( inicialForm = {} ) => {

    const [ formState, setFormState ] = useState( inicialForm );

    const onInputChance = ({target})=>{
        const { name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    } 

    const onResetForm = () => {
        setFormState ( inicialForm ) ; 
    };
    
    return {
        ...formState,
        onInputChance,
        onResetForm
    }
}
export default useForm;