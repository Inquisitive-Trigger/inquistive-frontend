import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { Input } from '../atom/Input'
import { FaUser } from 'react-icons/fa'
import { BsFillLockFill } from 'react-icons/bs'
import { Button } from '../atom/Button'
import { Link } from 'react-router-dom'
import { Checkbox } from 'antd'
import { Select } from 'antd'
import { iRegistrationForm } from '../../app/services/userService'

const { Option } = Select

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

const InputGroup = styled.div`
  text-align: left;

  & > label {
    color: ${color.white};
    font-weight: 900;
  }

  & > input, .ant-input-affix-wrapper {
    margin: 10px 0;
    border-radius: 12px;
  }

  & > .ant-select {
    display: block;
    max-width: 500px;
    margin-top: 10px;
    border-radius: 15px;
    margin: 10px 0;
  }

  & > .ant-select-selector {
    border-radius: 12px;
  }

`

type iSignupPage = {
  onSubmit: (registrationForm: iRegistrationForm) => void
}

export const SignupPage:React.FC<iSignupPage> = ({
  onSubmit
}) => {
  const [registrationForm, setRegistrationForm] = React.useState<iRegistrationForm>({
    email: '',
    password: '',
    name: '',
    type: false
  })

  const [isDisabledSubmit, setIsDisabledSubmit] = React.useState(false)
  
  const handleChangeText = React.useCallback(
    e => {
      const name = e.currentTarget.name
      const value = e.currentTarget.value

      setRegistrationForm({
        ...registrationForm,
        [name]: value
      })
    },
    [registrationForm]
  )

  const handleChangePurpose = React.useCallback(
    value => {
      setRegistrationForm({
        ...registrationForm,
        type: value === 'true' ? true : false
      })
    },
    []
  )

  const handleCheckRule = React.useCallback(
    e => {
      setIsDisabledSubmit(!e.target.checked)
    },
    []
  )

  const handleSubmit = React.useCallback(
    () => {
      onSubmit(registrationForm)
    },
    [registrationForm]
  )

  return (
    <SigninWrapper>
      <Title>Inquisitive</Title>
      <InputGroup>
        <label htmlFor="email">メールアドレス</label>
        <Input
          placeholder="user@email.com"
          name="email"
          id="email"
          onChange={handleChangeText}
          value={registrationForm.email}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="password" >パスワード</label>
        <Input.Password
          placeholder="１２文字以上"
          size="large"
          name="password"
          id="password"
          onChange={handleChangeText}
          value={registrationForm.password}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="name" >名前</label>
        <Input
          placeholder="二郎太郎 / 株式会社○○○○"
          name="name"
          id="name"
          onChange={handleChangeText}
          value={registrationForm.name}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="email" >メールアドレス</label>
        <Select
          placeholder="目的を選択してください"
          onChange={handleChangePurpose}
        >
          <Option value="true">企業を紹介したい</Option>
          <Option value="false">企業と出会いたい</Option>
        </Select>
      </InputGroup>

      <div>
        <Checkbox onChange={handleCheckRule} /> 私は利用規約に同意します
      </div>
      <Button
        backgroundColor={color.darkGreen}
        color={color.white}
        height="40px"
        disabled={isDisabledSubmit}
        onClick={handleSubmit}
      >
        登録
      </Button>
    </SigninWrapper>
  )
}
