import * as React from 'react'
import styled from 'styled-components'
import { BsChatDotsFill } from 'react-icons/bs'
import { color } from '../../utils/color'

const StyledChatIconContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  background-color: ${color.lightGreen};
  width: 50px;
  height: 50px;
  color: ${color.white};
  font-size: 20px;
  z-index: 5;
  cursor: pointer;
`

type iChatIcon = {
  onClick: () => void
}

export const ChatIcon: React.FC<iChatIcon> = ({
  onClick
}) => {
  return (
    <StyledChatIconContainer onClick={onClick}>
      <BsChatDotsFill />
    </StyledChatIconContainer>
  )
}
