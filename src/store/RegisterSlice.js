import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    register: [],
    login: []
};

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        addregister: (state, action) => {
            const { firstName, lastName, email, mobile, pass } = action.payload;
            const reg = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: mobile,
                pass: pass
            };
            state.register.push(reg);
            // console.log(reg)
        },
        addLogin: (state, action) => {
            const { email, pass } = action.payload;
            const reg = {
                email: email,
                pass: pass
            };
            state.login.push(reg);
            // console.log(reg)
        }

    }
});

export const { addregister,addLogin } = registerSlice.actions;
export default registerSlice.reducer;
