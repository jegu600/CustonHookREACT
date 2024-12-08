import { useState } from "react";

const useCounter = ( valorInicial = 0) => {

    const [counter, setCounter] = useState( valorInicial )

    const sumar = () => {
        setCounter ( counter + 1 ); 
    };

    const restar = () => {
        if(counter === 0)return;
        setCounter ( counter - 1 ); 
    };

    const reset = () => {
        setCounter ( valorInicial ); 
    };

    return{
        counter,
        sumar,
        restar,
        reset
    }

}

export default useCounter;