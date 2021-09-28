import axios from 'axios'
import * as React from 'react'
import { iRegistrationForm, registerUser } from '../../app/services/userService'
import { SignupPage } from '../../component/page/SignupPage'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

export const SignupPageContainer = () => {
  const handleSignup = React.useCallback(
    async (registrationForm: iRegistrationForm) => {
      try {
        const data = await registerUser(registrationForm)

        const token = data.token

        // Set to axios header
        axios.defaults.headers.common['Authorization'] = `Token ${token}`

        // Set To cookies
        Cookies.set('token', token)

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
