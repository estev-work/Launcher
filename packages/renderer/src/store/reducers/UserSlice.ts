import {IUser} from "@/models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ErrorEnum} from "@/enums/ErrorEnum";

interface UserState{
    user:IUser;
    isAuth:boolean;
    isLoading:boolean;
    error: false | { type:ErrorEnum, message:string };
}
const initialState: UserState = {
    user: {login:'',password:''},
    isAuth:false,
    isLoading:false,
    error: false
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setLogin(state, action:PayloadAction<string>){
            state.user.login = action.payload;
            state.error = false;
        },
        setPassword(state, action:PayloadAction<string>){
            state.user.password = action.payload;
            state.error = false;
        },
        setUserData(state, action:PayloadAction<IUser>){
            state.user.login = action.payload.login;
            state.user.password = action.payload.password;
            state.isAuth = true;
        },
        logout(state){
            state.user = {login:'',password:''};
            state.isAuth = false;
        },
        auth(state){
            if(state.user.login === ''){
                state.error = {type:ErrorEnum.login, message:'login empty'}
            }
            else if(state.user.password === ''){
                state.error = {type:ErrorEnum.password, message:'password empty'}
            }else {
                state.error = false;
                state.isAuth = true;
            }
        }
    }
})

export default userSlice.reducer;