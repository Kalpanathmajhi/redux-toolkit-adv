import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//action deipatch 
export const fetchApi = createAsyncThunk("fethApi", async() => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos")
    return response.json();
});

const apiSlice = createSlice({
    name: "apiCall",
    initialState :{
        isLoading: false,
        data:null,
        isError:false,
        errorMessage: '',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApi.pending, (state, action)=> {
            state.isLoading =true;
            state.isError = false;  
            state.errorMessage = ''; 
        })
        builder.addCase(fetchApi.fulfilled, ( state,action) => {
            state.isLoading =false;
            state.data = action.payload;
        });
        builder.addCase(fetchApi.rejected, ( state,action) => {
            console.log("Error", action.payload);
            state.isError = true;
            state.errorMessage = action.error.message; 
            console.log("Error", action.error.message); 
        });
    }
});


export default apiSlice.reducer;