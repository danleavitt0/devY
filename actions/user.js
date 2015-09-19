export const GET_USER = 'GET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function login (profile) {
  return {
    type: GET_USER,
    profile: profile
  }
}

export function logout () {
  return {
    type: LOGOUT_USER
  }
}
