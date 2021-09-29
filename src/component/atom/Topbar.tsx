import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { useLocation, useHistory } from 'react-router-dom'
import { Button } from './Button'
import { AiFillFile } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { logout, selectIsAuth } from '../../app/slices/userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Cookies from 'js-cookie'

const TopbarContainer = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${color.white};
  margin-bottom: 30px;
  background: ${color.lightGreen};
`

const TitleContainer = styled.span`
  width: 90%;
  max-width: 1080px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  & button {
    font-size: 12px;
    padding: 3px 20px;
    box-shadow: 0 0 0 0 #444;
  }

`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  & img {
    width: 25px;
    margin-right: 10px;
  }
`

const Topbar = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useAppDispatch()
  
  const isAuth = useAppSelector(selectIsAuth)

  const handleLogout = React.useCallback(
    () => {
      dispatch(logout())
      Cookies.remove('token')
    },
    [dispatch]
  )

  return (
    <TopbarContainer>
      <TitleContainer>
        <Title onClick={() => history.push('/')}>
          <img src="https://culty-icon.s3.ap-northeast-1.amazonaws.com/culty.png" />
          Culty
        </Title>
          {
            isAuth ? <Button
              backgroundColor={color.darkGreen}
              onClick={handleLogout}
            >
              ログアウト
            </Button> : <ButtonContainer>
              <Button
                backgroundColor={color.darkGreen}
                onClick={() => history.push("/signin")}
              >
                ログイン
              </Button>
              <Button
                backgroundColor={color.darkGreen}
                onClick={() => history.push("/signup")}
              >
                新規登録
              </Button>
            </ButtonContainer>
          }
      </TitleContainer>
    </TopbarContainer>
  )
}

export default Topbar
