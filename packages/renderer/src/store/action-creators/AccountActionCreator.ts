import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAccount } from '@/models/IAccount';

export const authAccount = createAsyncThunk(
    'account/auth',
    async (account:IAccount , { rejectWithValue }) => {
        try {
            const response = await axios.post<IAccount>('https://localhost:5000/account/auth', account)
            return response.data;
        } catch (e:any) {
            return rejectWithValue(e.message)
        }
    }
);