// define action
export const GET_USER = 'GET_USER';

// define action creator
export function getUser(user) {
  return {
    type: GET_USER,
    payload: user
  };
}
