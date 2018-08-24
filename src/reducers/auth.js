const initialAuthState = {
  isLoggedIn: false,
  IS_SHOW_LOADING: false,
  USER_TOKEN: null
};
export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case "LoginSuccess":
      return { ...state, isLoggedIn: true, USER_TOKEN: action.params.token };
    case "Logout":
      return { ...state, isLoggedIn: false, USER_TOKEN: null };
    default:
      return state;
  }
}
