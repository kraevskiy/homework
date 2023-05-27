export const logInReducer = (state) => {
	state.isLoggedIn = true;
}

export const logOutReducer = (state) => {
	state.isLoggedIn = false;
}
