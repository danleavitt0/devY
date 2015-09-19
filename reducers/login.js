import { GET_USER, LOGOUT_USER } from '../actions/user'

export default function login (state = [], action) {
  switch (action.type) {
    case GET_USER:
      return [{
        user: action.profile
      }, ...state]
    case LOGOUT_USER:
      localStorage.removeItem('userToken')
      return [{
        user: ''
      }, ...state]
    default:
      return state
  }
}
