import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface UserState {
  user: {
    name: string,
    email: string,
    type: string
  },
  isAuth: boolean
}

const initialState: UserState = {
  user: {
    name: '',
    email: '',
    type: ''
  },
  isAuth: false
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    authenticateUser: (state, action: PayloadAction<UserState>) => {
      const { user, isAuth } = action.payload
      state.user = user
      state.isAuth = isAuth
    }
  },
})

export const { authenticateUser } = userSlice.actions

export const selectUser = (state: RootState) => state.userModule.user
export const selectIsAuth = (state: RootState) => state.userModule.isAuth

export const userReducer =  userSlice.reducer
