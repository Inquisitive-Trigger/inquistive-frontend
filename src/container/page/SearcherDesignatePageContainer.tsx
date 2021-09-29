import * as React from 'react'
import { SearcherDesignatePage } from '../../component/page/SearcherDesignatePage'
import { fetchSearcherConnections, User } from '../../app/services/userService'
import { fetchProjectDetail, Project } from '../../app/services/projectService'
import { toast } from 'react-toastify'
import { useParams } from 'react-router'
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../../app/slices/userSlice'
import { ChatRows } from '../../App'

type iSearcherDesignatePageContainer = {
  socket: React.RefObject<WebSocket>
  chatRows: ChatRows[]
  setChatRows: (chatRows: ChatRows[]) => void
}

export const SearcherDesignatePageContainer: React.FC<iSearcherDesignatePageContainer> = ({ socket, chatRows, setChatRows }) => {
  const [users, setUsers] = React.useState([] as User[])
  const [project, setProject] = React.useState({} as Project)

  const currentUser = useAppSelector(selectUser)

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
      // @ts-ignore
      setChatRows(oldArray => [
        ...oldArray, {
          with: to,
          chat: <div className="send">{message}</div>
        }])    
    },
    [currentUser]
  )

  const handleSubmit = (to: number, message: string) => {
    try {
      onSendPrivateMessage(to, message)
      toast.success('案件依頼が成功しました')
    } catch {
      toast.error('案件依頼が失敗しました')
    }
  }

  const params: { id: string } = useParams()

  React.useEffect(
    () => {
      (async () => {
        try {
          const rawUsers = await fetchSearcherConnections()
          setUsers(rawUsers)
        } catch {
          toast.error('つながりのあるユーザー一覧取得が失敗しました')
        }
      })()
    },
    []
  )

  React.useEffect(
    () => {
      (async () => {
        try {
          const rawProject = await fetchProjectDetail(Number(params.id))
          setProject(rawProject)
        } catch {
          toast.error('案件取得が失敗しました')
        }
      })()
    },
    []
  )

  return (
    <SearcherDesignatePage
      users={users}
      project={project}
      currentUser={currentUser}
      handleSubmit={handleSubmit}
    />
  )
}
