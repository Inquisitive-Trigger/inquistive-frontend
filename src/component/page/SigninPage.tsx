import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { Input } from '../atom/Input'
import { FaUser } from 'react-icons/fa'
import { BsFillLockFill } from 'react-icons/bs'
import { Button } from '../atom/Button'
import { Link } from 'react-router-dom'
import { iSigninForm } from '../../app/services/userService'

const SigninWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color.lightGreen};

  & > * {
    width: 80%;
    max-width: 500px;
    margin-top: 10px;
    border-radius: 15px;
    margin: 10px 0;
    text-align: center;
  }
`

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${color.white};
`

type iSigninPage = {
  onSubmit: (signinForm: iSigninForm) => Promise<void>
}

export const SigninPage: React.FC<iSigninPage> = ({
  onSubmit
}) => {
  const [signinForm, setSigninForm] = React.useState<iSigninForm>({
    email: '',
    password: ''
  })

  const handleChangeText = React.useCallback(
    e => {
      const name = e.currentTarget.name
      const value = e.currentTarget.value

      setSigninForm({
        ...signinForm,
        [name]: value
      })
    },
    [signinForm]
  )

  const handleSignin = React.useCallback(
    async () =>{
      await onSubmit(signinForm)
    },
    [signinForm]
  )

  return (
    <SigninWrapper>
      <Title>Culty</Title>
      <Input
        placeholder="メールアドレス"
        size="large"
        prefix={<FaUser />}
        name="email"
        onChange={handleChangeText}
      />
      <Input.Password
        placeholder="パスワード"
        size="large"
        prefix={<BsFillLockFill />}
        name="password"
        onChange={handleChangeText}
      />
      <Button
        backgroundColor={color.darkGreen}
        color={color.white}
        height="40px"
        onClick={handleSignin}
      >
        ログイン
      </Button>
      <div>
        初めての方？<Link to="/signup">新規登録</Link>しましょう
      </div>
    </SigninWrapper>
  )
}

// /session?email=&password=
// Authorization Token {{token}}