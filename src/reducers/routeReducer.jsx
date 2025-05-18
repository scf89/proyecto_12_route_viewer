export function routeReducer(state, action) {
    switch (action.type) {
      case 'ADD_ROUTE':
        return [...state, action.payload]
      case 'CLEAR_ROUTES':
        return []
      default:
        return state
    }
  }
  