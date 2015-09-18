import { LOGIN_USER } from '../actions/user'

export default function login (state = [], action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        user: 'Daniel'
      }
    default:
      return state
  }
}
