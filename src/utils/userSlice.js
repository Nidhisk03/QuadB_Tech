import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
     name:'user',
     initialState:{
          nowPlayingMovies : null, 
       },
     reducers : {
        addUser: (state ,action) =>{
          state.nowPlayingMovies = action.payload;
        },
    

     }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;