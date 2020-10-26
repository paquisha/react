import React from 'react'

export const HolaContext = React.createContext()

const HolaProviders = (props) => {

    const hola = 'hola desde el global'

    return (
        <HolaContext.Provider value={hola}>
            {props.children}            
        </HolaContext.Provider>
    )
}

export default HolaProviders
