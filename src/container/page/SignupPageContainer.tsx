import axios from 'axios'
import * as React from 'react'
import { iRegistrationForm, registerUser } from '../../app/services/userService'
import { SignupPage } from '../../component/page/SignupPage'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../app/hooks'
import { authenticateUser } from '../../app/slices/userSlice'

export const SignupPageContainer = () => {
  const dispatch = useAppDispatch()

  const handleSignup = React.useCallback(
    async (registrationForm: iRegistrationForm) => {
      try {
        const data = await registerUser(registrationForm)

        const user = data.user
        const token = user.token

        // Set to axios header
        axios.defaults.headers.common['Authorization'] = `Token ${token}`

        // Set To cookies
        Cookies.set('token', token)

        // Set To Redux
        dispatch(authenticateUser({
          user: {
            name: user.name,
            email: user.email,
            type: user.purpose ? 'introducer' : 'searcher'
          },
          isAuth: true
        }))

        // Notify
        toast.success('登録が成功しました')
      } catch(e) {
        toast.error('登録が失敗しました')
      }
    },
    []
  )

  return <SignupPage
    onSubmit={handleSignup}
  />
}
