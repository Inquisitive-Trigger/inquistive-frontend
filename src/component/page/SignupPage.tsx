import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { Input } from '../atom/Input'
import { Button } from '../atom/Button'
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
  width: 100%;
  font-size: 36px;
  font-weight: 600;
  color: ${color.white};
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 40px;
    margin-right: 15px;
  }
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

  const [isDisabledSubmit, setIsDisabledSubmit] = React.useState(true)
  
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
    [registrationForm]
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
      <Title>
        <img src="https://culty-icon.s3.ap-northeast-1.amazonaws.com/culty.png" />
        Culty
      </Title>
      <InputGroup>
        <label htmlFor="email">?????????????????????</label>
        <Input
          placeholder="user@email.com"
          name="email"
          id="email"
          onChange={handleChangeText}
          value={registrationForm.email}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="password" >???????????????</label>
        <Input.Password
          placeholder="??????????????????"
          size="large"
          name="password"
          id="password"
          onChange={handleChangeText}
          value={registrationForm.password}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="name" >??????</label>
        <Input
          placeholder="???????????? / ????????????????????????"
          name="name"
          id="name"
          onChange={handleChangeText}
          value={registrationForm.name}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="purpose">??????</label>
        <Select
          placeholder="?????????????????????????????????"
          onChange={handleChangePurpose}
        >
          <Option value="true">????????????????????????</Option>
          <Option value="false">????????????????????????</Option>
        </Select>
      </InputGroup>

      <div>
        <Checkbox onChange={handleCheckRule} /> ????????????????????????????????????
      </div>
      <Button
        backgroundColor={color.darkGreen}
        color={color.white}
        height="40px"
        disabled={isDisabledSubmit}
        onClick={handleSubmit}
      >
        ??????
      </Button>
    </SigninWrapper>
  )
}
