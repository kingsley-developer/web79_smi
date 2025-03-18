import { createSlice } from '@reduxjs/toolkit'

interface AdminState {
    username:string,
    password:string,
    profile: string,
    accesstoken:string
}

const initialAdmin: AdminState = {
    username:"",
    password:"",
    profile: "",
    accesstoken:""
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState:initialAdmin,
  reducers: {
    createAdmin: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const { createAdmin} = adminSlice.actions

export default adminSlice.reducer