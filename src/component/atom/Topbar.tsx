import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { useLocation } from 'react-router-dom'

const TopbarContainer = styled.div`
  background: ${color.lightGreen};
  width: 100%;
  height: 90px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${color.white};
  margin-bottom: 30px;
`

const Title = styled.div`
  font-size: 20px;
`
const TabContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8px;
  justify-content: space-around;
`

const StyledLink = styled(Link)<{ isSelected: boolean }>`
  color: ${color.white};
  padding: 3px 10px;
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
      <Title>Inquisitive</Title>
      <TabContainer>
        <StyledLink to="/introducer/home" isSelected={location.pathname.includes('project')}>Project</StyledLink>
        <StyledLink to="/introducer/status" isSelected={location.pathname.includes('status')}>Status</StyledLink>
      </TabContainer>
    </TopbarContainer>
  )
}

export default Topbar
