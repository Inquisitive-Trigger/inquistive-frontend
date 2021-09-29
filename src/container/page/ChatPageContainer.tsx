import * as React from 'react'
import { useAppSelector } from '../../app/hooks'
import { fetchSearcherConnections, User } from '../../app/services/userService'
import { selectUser } from '../../app/slices/userSlice'
import { ChatIcon } from '../../component/organism/ChatIcon'
import { ChatPage } from '../../component/page/ChatPage'
import { fetchIntroducerConnections } from '../../app/services/userService'
import { toast } from 'react-toastify'


const URL = 'wss://j6rwmmhnl5.execute-api.ap-northeast-1.amazonaws.com/production'

export type ChatRows = {
  with: number,
  chat: React.ReactNode
}

type iChatPageContainer = {
  socket: React.RefObject<WebSocket>
}

export const ChatPageContainer: React.FC<iChatPageContainer> = ({
  socket
}) => {
  const currentUser = useAppSelector(selectUser)

  const [isConnected, setIsConnected] = React.useState(false)
  const [members, setMembers] = React.useState<string[]>([])
  const [users, setUsers] = React.useState<User[]>([])

  const [chatRows, setChatRows] = React.useState<ChatRows[]>([])

  const [currentChats, setCurrentChats] = React.useState<ChatRows[]>([])
  const [chatWith, setChatWith] = React.useState<User | undefined>(undefined)

  const [isShowing, setIsShowing] = React.useState(false)
  const [knownUsers, setKnownUsers] = React.useState([] as User[])

  React.useEffect(
    () => {
      (async () => {
        try {
          if (currentUser.type === 'introducer') {
            const users = await fetchIntroducerConnections()
            setKnownUsers(users)
          }

          if (currentUser.type === 'searcher') {
            const users = await fetchSearcherConnections()
            setKnownUsers(users)
          }
        } catch {
          toast.error('つながりのある企業一覧取得が失敗しました')
        }
      })()
    },
    []
  )


  const onSocketOpen = React.useCallback(
    () => {
      socket.current?.send(JSON.stringify({
        action: 'setUser',
        user: currentUser,
      }))
      setIsConnected(true)
    },
    [currentUser, socket]
  )

  const onSocketClose = React.useCallback(
    () => {
      setIsConnected(false)
    },
    []
  )

  const onSocketMessage = React.useCallback(
    dataStr => {
      const data = JSON.parse(dataStr)

      if (data.users) {
        console.log(data.users)
        setUsers(data.users.filter((user: User) => user?.id !== currentUser?.id))
      }

      if (data.privateMessage) {
        const message = data.privateMessage
        setChatRows(oldArray => [
          ...oldArray, {
          with: message.with,
          chat: <div className="receive">{message.message}</div>
        }])
          
        console.log(chatRows)
      }
    },
    [chatRows]
  )

  const onConnect = React.useCallback(
    () => {
      if (socket.current?.readyState !== WebSocket.OPEN) {
        // @ts-ignore
        socket.current = new WebSocket(URL)
        socket.current.addEventListener('open', onSocketOpen)
        socket.current.addEventListener('close', onSocketClose)
        socket.current.addEventListener('message', e => {
          onSocketMessage(e.data)
        })

      }
    },
    []
  )

  React.useEffect(
    () => {
      onConnect()

      return () => { onDisconnect() }
    },
    []
  )

  React.useEffect(
    () => {
      if (chatWith) {
        setCurrentChats(chatRows.filter(
          row => row.with === chatWith.id
        ))
      }
    },
    [chatRows, chatWith]
  )

  const onEnterChat = React.useCallback(
    (user: User) => {
      console.log(user.id)
      console.log(currentUser.id)
      console.log(chatRows)
      setChatWith(user)
      setCurrentChats(chatRows.filter(
        row => row.with === user.id
      ))
      console.log(chatRows.filter(
        row => row.with === user.id
      ))
    },
    [chatRows]
  )

  const onExitChat = React.useCallback(
    () => {
      setChatWith(undefined)
      setCurrentChats([])
    },
    []
  )

  const onSendPrivateMessage = React.useCallback(
    (to: number, message: string) => {
      // Send to Socket
      socket.current?.send(JSON.stringify({
        action: 'sendPrivate',
        message,
        to,
        from: currentUser.id
      }))

      // Chat Rows
      setChatRows(oldArray => [
        ...oldArray, {
          with: to,
          chat: <div className="send">{message}</div>
        }])    
    },
    [currentUser]
  )

  const onDisconnect = React.useCallback(
    () => {
      socket.current?.close()
      console.log('disconnect')
    },
    [isConnected]
  )

  return isShowing ? (
    <ChatPage
      isConnected={isConnected}
      onlineUsers={users}
      knownUsers={knownUsers}
      currentChats={currentChats}
      onEnterChat={onEnterChat}
      onExitChat={onExitChat}
      onPrivateMessage={onSendPrivateMessage}
      chatWith={chatWith}
      onCloseOverlay={() => setIsShowing(false)}
    />
  ) : (
    <ChatIcon onClick={() => setIsShowing(true)}/>
  )
}
