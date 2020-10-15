import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokeReducer from './pokeDucks'
import usuarioReduce, {leerUsuarioActivoAccion} from './usuarioDucks'


const rootReducer = combineReducers({
    pokemones: pokeReducer,
    usuario: usuarioReduce
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk)))
    leerUsuarioActivoAccion()(store.dispatch)
    return store;
}