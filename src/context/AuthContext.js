import createDataContext from "./createDataContext"

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        // make api request to signup with email password

        // modify state say auth

        // if fails err message
    };
};
const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to signin

        // update state if success

        // if fails show err message
    };

};

const signout = (dipatch) => {
    return () => {
        // signout
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout},
    { isSignedIn: false }
);


