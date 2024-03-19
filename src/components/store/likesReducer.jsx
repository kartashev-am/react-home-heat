const defaultState = {
    likes: []
}

export const likesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      return {...state, likes: [...state.likes, action.payload]}

    case 'DELETE_LIKE':
      return {likes: state.likes.filter(like => like.id !== action.payload)}

    case 'DELETE_ALL_LIKE':
      return {likes: state.likes.filter(like  => like.id === action.payload)}
      
    default:
      return state
    }
  }