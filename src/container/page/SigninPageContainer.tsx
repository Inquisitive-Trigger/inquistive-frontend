import axios from 'axios'
import Cookies from 'js-cookie'
import * as React from 'react'
import { fetchSession, iSigninForm } from '../../app/services/userService'
import { SigninPage } from '../../component/page/SigninPage'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../app/hooks'
import { authenticateUser } from '../../app/slices/userSlice'
import { useHistory } from 'react-router'

export const SigninPageContainer = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleSubmit = React.useCallback(
    async (signinForm: iSigninForm) => {
      try {
        const data = await fetchSession(signinForm)
        const user = data?.user

        const token = user?.token

        // Set to axios header
        axios.defaults.headers.common['Authorization'] = `Token ${token}`

        // Set To cookies
        Cookies.set('token', token)

        // Set To Redux
        dispatch(authenticateUser({
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            type: user.purpose ? 'introducer' : 'searcher'
          },
          isAuth: true
        }))

        // Notify
        toast.success('ログインが成功しました')

        // Redirect
        if (Cookies.get('redirect')) {
          history.push(Cookies.get('redirect')!)
          Cookies.remove('redirect')
        }
      } catch {
        toast.error('ログインが失敗しました')
      }
    },
    []
  )
  
  return <SigninPage
    onSubmit={handleSubmit} 
  />
}
