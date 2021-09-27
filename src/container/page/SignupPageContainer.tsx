import * as React from 'react'
import { iRegistrationForm } from '../../app/services/userService'
import { SignupPage } from '../../component/page/SignupPage'

export const SignupPageContainer = () => {
  const handleSignup = React.useCallback(
    (registrationForm: iRegistrationForm) => {
      console.log(registrationForm)
    },
    []
  )

  return <SignupPage
    onSubmit={handleSignup}
  />
}
