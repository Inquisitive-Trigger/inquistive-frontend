import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { Input } from '../atom/Input'
import { FaUser } from 'react-icons/fa'
import { BsFillLockFill } from 'react-icons/bs'
import { Button } from '../atom/Button'
import { Link } from 'react-router-dom'

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

const SigninPage = () => {
  return (
    <SigninWrapper>
      <Title>Inquisitive</Title>
      <Input placeholder="メールアドレス"　size="large" prefix={<FaUser />} />
      <Input.Password placeholder="パスワード" size="large" prefix={<BsFillLockFill />} />
      <Button backgroundColor={color.darkGreen} color={color.white} height="40px">ログイン</Button>
      <div>
        初めての方？<Link to="/signup">新規登録</Link>しましょう
      </div>
    </SigninWrapper>
  )
}

export default SigninPage

// /session?email=&password=
// Authorization Token {{token}}