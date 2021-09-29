import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { useLocation, useHistory } from 'react-router-dom'

const StyledTabContainer = styled.div`
    width: 90%;
    max-width: 1080px;
    border: 1px solid ${color.lightGreen};
    margin-bottom: 20px;
    display: flex;
    border-radius: 15px;
  `

  const TabContainer = styled.div<{ isSelected: boolean }>`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    background-color: ${color.white};
    ${({ isSelected }) => isSelected && `background-color: ${color.lightGreen};`}
    padding: 10px 0;
    border-radius: 15px;
    font-weight: 700;
    color: ${({ isSelected }) => isSelected ? color.white : color.lightGreen};
    cursor: pointer;
  `

export const IntroducerTab = () => {
  const location = useLocation()
  const history = useHistory()

  return (
    <StyledTabContainer>
      <TabContainer
        isSelected={location.pathname.includes('project')}
        onClick={() => history.push('/introducer/home')}
      >
        Project
      </TabContainer >

      <TabContainer
        isSelected={location.pathname.includes('status')}
        onClick={() => history.push('/introducer/status')}
      >
        Status
      </TabContainer>
    </StyledTabContainer>
  )
}
