import * as React from 'react'
import styled from 'styled-components'
import { User } from '../../app/services/userService'
import { ChatRows } from '../../container/page/ChatPageContainer'
import { color } from '../../utils/color'
import { Button } from '../atom/Button'
import { Input } from '../atom/Input'
import { SearcherTopbar } from '../atom/SearcherTopbar'

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ChatContainer = styled.div`
  width: 90%;
  max-width: 1080px;
`

const ChatHeader = styled.div`
  font-size: 24px;
  font-weight: 700;
`
const ChatBody = styled.div`
  height: calc(100vh - 200px);

  & .send {
    background-color: ${color.lightGreen};
  }

  & .recieve {
    
  }
`

const ChatInputContainer = styled.div`
  display: flex;
`

type iChatPage = {
  isConnected: boolean
  users: User[]
  currentChats: ChatRows[]
  chatWith?: User
  onExitChat: () => void
  onEnterChat: (usr: User) => void 
  onPrivateMessage: (to: number, message: string) => void
}

export const ChatPage: React.FC<iChatPage> = ({
  isConnected,
  users,
  currentChats,
  onPrivateMessage,
  onEnterChat,
  onExitChat,
  chatWith
}) => {
  const [draft, setDraft] = React.useState('')

  const onSendChat = React.useCallback(
    () => {
      onPrivateMessage(chatWith!.id, draft)
    },
    [draft, chatWith]
  )

  return chatWith ? (
    <>
      <SearcherTopbar />
      <OuterContainer>
        <ChatContainer>
          <ChatHeader>{chatWith!.name}</ChatHeader>
          <ChatBody>{currentChats.map(chat => chat.chat)}</ChatBody>

          <ChatInputContainer>
            <Input
              placeholder="こんにちは！"
              value={draft}
              onChange={e => { setDraft(e.currentTarget.value) }}
            />
            <Button
              backgroundColor={color.lightGreen}
              color={color.white}
              margin="0 0 0 10px"
              onClick={onSendChat}
            >Send</Button>
          </ChatInputContainer>
          
          <Button onClick={onExitChat}>Back</Button>
        </ChatContainer>
      </OuterContainer>
    </>
    ) :
    (
    <div>
      <div>isConnected: {String(isConnected)}</div>
      <div>users: {users.map(user =>
        <div onClick={() => onEnterChat(user)}>{user.email}</div>
      )}</div>
    </div>
  )
}
