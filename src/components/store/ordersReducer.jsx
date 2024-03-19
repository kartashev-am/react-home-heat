const defaultState = {
    orders: []
}

export const ordersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {...state, orders: [...state.orders, action.payload]}

    case 'DELETE_PRODUCT':
      return {orders: state.orders.filter(order => order.id !== action.payload)}

    case 'DELETE_ALL_PRODUCT':
      return {orders: state.orders.filter(order => order.id === action.payload)}

    case 'INCREASE_QUANTITY':
      return {
        orders: state.orders.map(order => 
        order.id === action.payload
        ? {...order,
          quantity: order.quantity + 1 > 100 ? 100 : order.quantity+1}
        : order
        )
      }

    case 'DESCREASE_QUANTITY':
      return {
        orders: state.orders.map(order => 
        order.id === action.payload
        ? {...order,
          quantity: order.quantity-1 < 2 ? 1 : order.quantity-1}
        : order
        )
      }

    default:
      return state
  }
}
