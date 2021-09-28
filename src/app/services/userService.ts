// POST /session?email=&password=
// Authorization Token {{token}}

import axios from "axios"

// POST http://localhost:3000/user?name=testuser2&email=test2@example.com&password=hogehoge&type=false
axios.defaults.baseURL = 'http://3.113.26.48/'

export type User = {
  id: number
  name: string
  email: string
  created_at: Date
  purpose: boolean
  updated_at: Date
}

export const createEmptyUser = () => ({
  id: 999,
  name: '',
  email: '',
  created_at: new Date(),
  purpose: false,
  updated_at: new Date()
})

export type iSigninForm = {
  email: string,
  password: string
}

export type User = {
  id: number
  name: string
  email: string
  created_at: Date
  updated_at: Date
  password: string
  token: string
  purpose: boolean
}

export const fetchSession = async ({
  email, 
  password
}: iSigninForm) => {
  const res = await axios.post('/session', {
    email,
    password
  })

  return res.data
}

export type iRegistrationForm = {
  name: string
  password: string
  email: string
  type: boolean
}

export const registerUser = async ({
  name,
  email, 
  password,
  type
}: iRegistrationForm) => {
  const res = await axios.post('/user', {
    name,
    email,
    password,
    type
  })

  return res.data
}
