import React, { useState } from 'react'
import { Add, Remove } from '@material-ui/icons';

const Tick = () => {
    const [ count, setCount ] = useState( 0 );
    return (

        <div className="container ">
            <button onClick={() => setCount( count + 1 )}>
                <Add />
            </button>
            <h1>{count}</h1>
            <button onClick={() => count === 0 ? setCount( 0 ) : setCount( count - 1 )}>
                <Remove />
            </button>
        </div >
    )
}

export default Tick
