import React, { useState} from 'react';

const Contador = () =>{
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Veces clikeadas {count}</p>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
}

export default Contador;  