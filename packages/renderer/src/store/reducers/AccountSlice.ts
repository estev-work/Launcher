import {IAccount} from "@/models/IAccount";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { authAccount } from '@/store/action-creators/AccountActionCreator';

interface AccountState{
    account:IAccount;
    isAuth:boolean;
    isLoading:boolean;
    error: string;
}
const initialState: AccountState = {
    account: {login:'',password:''},
    isAuth:false,
    isLoading:false,
    error: ''
}
export const accountSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:{
        [authAccount.fulfilled.type]: (state, action: PayloadAction<IAccount>) => {
            state.account = action.payload;
            state.isLoading = false;
            state.error = '';
            state.isAuth = true;
        },
        [authAccount.pending.type]: (state) => {
            state.isLoading = true;
        },
        [authAccount.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default accountSlice.reducer;