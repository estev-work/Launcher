import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState{
    user:IUser;
    isAuth:boolean;
    isLoading:boolean;
    error:string;
}
const initialState: UserState = {
    user: {login:'',password:''},
    isAuth:false,
    isLoading:false,
    error:''
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setLogin(state, action:PayloadAction<string>){
            state.user.login = action.payload;
        },
        setPassword(state, action:PayloadAction<string>){
            state.user.password = action.payload;
        },
        setUserData(state, action:PayloadAction<IUser>){
            state.user.login = action.payload.login;
            state.user.password = action.payload.password;
        }
    }
})

export default userSlice.reducer;