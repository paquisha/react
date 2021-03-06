import axios from 'axios'


//constantes
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}


//types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'
const POKE_INFO_EXITO = 'POKE_INFO_EXITO'

//reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return{...state, ...action.payload}
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case POKE_INFO_EXITO:
            return {...state, unPokemon: action.payload}            
        default:
            return state
    }
}

//acciones

export const unPokeDetalleAccion = (url) => async (dispatch) =>{

    if(url === undefined){
        url = 'https://pokeapi.co/api/v2/pokemon/141/'
    }

    if(localStorage.getItem(url)){
        dispatch({
            type: POKE_INFO_EXITO,
            payload: JSON.parse(localStorage.getItem(url))
        })
        return
    }

    try {
        const res = await axios.get(url)
        dispatch({
            type: POKE_INFO_EXITO,
            payload: {
                nombre: res.data.name,
                ancho: res.data.weigth,
                alto: res.data.height,
                foto: res.data.sprites.front_default
            }
        })
        localStorage.setItem(url, JSON.stringify({
            nombre: res.data.name,
            ancho: res.data.weigth,
            alto: res.data.height,
            foto: res.data.sprites.front_default
        }))               
    } catch (error) {        
        console.log(error)
    }
}

export const obtenerPokemonesAccion = () => async (dispatch, getState) =>{

    if(localStorage.getItem('offset=0')){
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    }

    const {offset} = getState().pokemones
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem('offset=0', JSON.stringify(res.data))                
    } catch (error) {
        console.log(error);        
    }
}


export const siguientePokemonAccion = () => async (dispatch, getState) =>{

   const next = getState().pokemones.next

   if(localStorage.getItem(next)){
       dispatch({
           type: OBTENER_POKEMONES_EXITO,
           payload: JSON.parse(localStorage.getItem(next))
       })
       return
   }

    try {
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem('offset=0', JSON.stringify(res.data))        
    } catch (error) {
        console.log(error)        
    }
}

export const anteriorPokemonAccion = () => async(dispatch, getState) =>{
    const {previous} = getState().pokemones

    if(localStorage.getItem(previous)){
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(previous))
        })
    }
    
    try {
        const res = await axios.get(previous)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem(previous, JSON.stringify(res.data))        
    } catch (error) {
        console.log(error)        
    }
}