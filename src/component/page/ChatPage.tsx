import * as React from 'react'
import styled from 'styled-components'
import { User } from '../../app/services/userService'
import { ChatRows } from '../../container/page/ChatPageContainer'
import { color } from '../../utils/color'
import { Button } from '../atom/Button'
import { Input } from '../atom/Input'
import { SearcherTopbar } from '../atom/SearcherTopbar'
import { AiOutlineClose } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { sleep } from '../../utils/tools'
import { BiChevronLeft } from 'react-icons/bi'

const Overlay = styled.div<{ animation: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: ${color.white};
  z-index: 5;
  animation: ${({ animation }) => animation === 'in' ?
    'slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both' :
    animation === 'out' && 'slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
  };
  
  @keyframes slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out-top {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-1000px);
      opacity: 0;
    }
  }

`

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ChatContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  margin-top: 30px;
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

const ChatListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

const ChatList = styled.div`
  display: flex;
  width: calc(100% - 20px);
  padding: 20px 0;
  border-bottom: 1px solid ${color.lightGray};
  cursor: pointer;

  & .name {
    font-weight: 700;
  }

  & .status {
    font-size: 12px;
  }

  & .Online {
    color: ${color.lightGreen};
    font-weight: 700;
  }

  & .Offline {
    color: ${color.lightGray};
  }
`

const StyledChatIconContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  background-color: ${color.red};
  width: 50px;
  height: 50px;
  color: ${color.white};
  font-size: 20px;
  z-index: 6;
  cursor: pointer;
`

const ProfileIconContainer = styled.div`
  width: 60px;
  height: 40px;
  line-height: 0;
  font-size: 40px;
`

type iChatPage = {
  isConnected: boolean
  onlineUsers: User[]
  currentChats: ChatRows[]
  chatWith?: User
  knownUsers: User[]
  onExitChat: () => void
  onEnterChat: (usr: User) => void 
  onPrivateMessage: (to: number, message: string) => void
  onCloseOverlay: () => void
}

export const ChatPage: React.FC<iChatPage> = ({
  isConnected,
  onlineUsers,
  knownUsers,
  currentChats,
  onPrivateMessage,
  onEnterChat,
  onExitChat,
  chatWith,
  onCloseOverlay
}) => {
  const [draft, setDraft] = React.useState('')
  const [animation, setAnimation] = React.useState('in')

  const onSendChat = React.useCallback(
    () => {
      onPrivateMessage(chatWith!.id, draft)
    },
    [draft, chatWith]
  )

  const handleCloseOverlay = React.useCallback(
    async () => {
      setAnimation('out')
      await sleep(500)
      onCloseOverlay()
    },
    [onCloseOverlay]
  )

  return <>
    <Overlay animation={animation} onAnimationEnd={() => { setAnimation('none') }}>
      {
        chatWith ? (
        <>
          <OuterContainer>
            <ChatContainer>
              <ChatHeader>
                <BiChevronLeft />
                {chatWith!.name}
              </ChatHeader>
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
        (<>
          <StyledChatIconContainer onClick={handleCloseOverlay}>
            <AiOutlineClose />
          </StyledChatIconContainer>
          <OuterContainer>
            <ChatListContainer>
              {knownUsers.map(user =>
                <ChatList onClick={() => onEnterChat(user)} key={user.id}>
                  <ProfileIconContainer>
                    <BiUserCircle />
                  </ProfileIconContainer>
                  <div>
                    <span className="name">{user.name}<br /></span>
                    <span className={`status ${!!onlineUsers.find(onlineUser => onlineUser.id === user.id) ? 'Online' : 'Offline'}`}>
                      {!!onlineUsers.find(onlineUser => onlineUser.id === user.id) ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </ChatList>
              )}
            </ChatListContainer>
          </OuterContainer>
        </>)
      }
    </Overlay>
  </>
}
