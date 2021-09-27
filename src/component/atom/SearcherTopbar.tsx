import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { useLocation } from 'react-router-dom'

const TopbarContainer = styled.div`
  background: ${color.lightGreen};
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
`

const Title = styled.div`
  font-size: 20px;
`

export const SearcherTopbar = () => {
  return (
    <TopbarContainer>
      <Title>Inquisitive</Title>
    </TopbarContainer>
  )
}
