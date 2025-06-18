import { useReducer } from "react";

const initialState = {
    contador: 0,
}

type actionType = 
    |  { type: 'incrementar' }
    |  { type: 'disminuir'}
    |  { type: 'custom', payload: number}

const contadorReducer = ( state: typeof initialState, action: actionType ) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state, //extrae todas las propiedades q tiene state creando una nueva variable
                contador: state.contador + 1 
            }
        case 'disminuir':
            return {
                ...state, //extrae todas las propiedades q tiene state creando una nueva variable
                contador: state.contador - 1 
            }
        case 'custom':
            return {
                ...state, //extrae todas las propiedades q tiene state creando una nueva variable
                contador: action.payload
            }
        default:
            return state
    }
}

const ContadorRed = () => {

    const [{ contador }, dispach] = useReducer(contadorReducer, initialState);

  return (
    <>
        <h2>Contador: { contador }</h2>
        <button 
            className="btn btn-outline-primary"
            onClick={() => dispach({ type: 'incrementar' }) }>
            +1
        </button>
        <button 
            className="btn btn-outline-success"
            onClick={() => dispach({ type: 'disminuir' }) }>
            -1
        </button>
        <button 
            className="btn btn-outline-danger"
            onClick={() => dispach({ type: 'custom', payload:100 }) }>
            100
        </button>
    </>
  )
}

export default ContadorRed