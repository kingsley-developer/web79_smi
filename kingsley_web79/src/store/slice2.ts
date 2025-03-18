import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    username:string,
    password:string,
    profile: string,
    accesstoken:string
}

const initialUser: UserState = {
    username:"",
    password:"",
    profile: "",
    accesstoken:""
}

export const userSlice = createSlice({
  name: 'admin',
  initialState:initialUser,
  reducers: {
    createUser: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const { createUser} = userSlice.actions

export default userSlice.reducer