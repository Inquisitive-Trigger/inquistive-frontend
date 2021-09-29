import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { useLocation } from 'react-router-dom'
import { Button } from './Button'
import { AiFillFile } from 'react-icons/ai'

const TopbarContainer = styled.div`
  width: 100%;
  height: 100px;
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
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;

  & > button {
    font-size: 12px;
    padding: 0 20px;
    box-shadow: 0 0 0 0 #444;
  }
`

const Title = styled.div`
  font-size: 20px;
`
const TabContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8px;
  justify-content: space-around;
  background-color: ${color.white};
`

const StyledLink = styled(Link)<{ isSelected: boolean }>`
  color: ${color.white};
  padding: 5px 15px;
  border-radius: 15px;
  ${({ isSelected }) => isSelected && `background-color: ${color.darkGreen};`}

  &:link {
    color: ${color.white};
  }

  &:visited {
    color: ${color.white};
  } 
`

const Topbar = () => {
  const location = useLocation()

  return (
    <TopbarContainer>
      <TitleContainer>
        <Title>Inquisitive</Title>
        <ButtonContainer>
          <Button backgroundColor={color.darkGreen}>ログイン</Button>
          <Button backgroundColor={color.darkGreen}>新規登録</Button>
        </ButtonContainer>
      </TitleContainer>
      <TabContainer>
        <StyledLink to="/introducer/home" isSelected={location.pathname.includes('project')}>Project</StyledLink>
        <StyledLink to="/introducer/status" isSelected={location.pathname.includes('status')}>Status</StyledLink>
      </TabContainer>
    </TopbarContainer>
  )
}

export default Topbar
