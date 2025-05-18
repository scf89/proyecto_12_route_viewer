import { createContext, useContext, useReducer } from 'react'
import { routeReducer } from '../reducers/routeReducer'

const RoutesContext = createContext()
const RoutesDispatchContext = createContext()

export function RoutesProvider({ children }) {
  const [routes, dispatch] = useReducer(routeReducer, [])

  return (
    <RoutesContext.Provider value={{ routes }}>
      <RoutesDispatchContext.Provider value={dispatch}>
        {children}
      </RoutesDispatchContext.Provider>
    </RoutesContext.Provider>
  )
}

export const useRoutesState = () => useContext(RoutesContext)
export const useRoutesDispatch = () => useContext(RoutesDispatchContext)
