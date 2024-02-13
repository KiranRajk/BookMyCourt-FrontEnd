import {createSlice} from '@reduxjs/toolkit'
const INITIAL_STATE = {
       user: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState : INITIAL_STATE,
    reducers:{
        setUser : (state,action) =>{
            state.user = action.payload
        }
    }
})
//createSlice(): This function generates a Redux slice, which is a portion of the application state and a set of reducers to manage that state. It helps to organize your Redux logic in a more modular and concise way.

export const {setUser}= userSlice.actions
export default userSlice.reducer
