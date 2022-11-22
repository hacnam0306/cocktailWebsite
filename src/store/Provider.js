import { useReducer } from 'react'
import Context from './Context'
import reducer,{CocktailRecipes} from './reducer'
function Provider({children}){
    const [state,dispatch] = useReducer(reducer,CocktailRecipes)
    return (
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider