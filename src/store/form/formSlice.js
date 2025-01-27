import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loginForm: {
        module: 'React Mod7',
        username: '',
        email: '',
        password: 'mod7USIP-MIJAIL',
        isLoggedIn: false
    },
}

export const formSlice = createSlice({

    name: 'formRed',
    initialState,
    reducers: {
        setFormLogin: (state, action) => {
            state.loginForm.username = action.payload.username;
            state.loginForm.email = action.payload.email;
            state.loginForm.isLoggedIn = true;

        },
        cleanFormLogin: (state) => {
            state.loginForm = {
                username: '',
                password: '',
                module: '',
                email: '',
                isLoggedIn: false
            };
        }
    },

});
export const { setFormLogin, cleanFormLogin } = formSlice.actions;
export default formSlice.reducer