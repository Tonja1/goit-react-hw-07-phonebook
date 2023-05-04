import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";



axios.defaults.baseURL = 'https://6452a476a2860c9ed411dfc6.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contact/remove',
    async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`/contacts/${id}`);
        toast.success(`This contact is deleted!`);
        return id;
    } catch (error) {
        return rejectWithValue(error);
    }
    }
);

export const addContact = createAsyncThunk(
    'contacts/add',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, number });
            toast.success(`This ${name} contact is added to phonebook!`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);