import * as React from 'react'
import { SearcherDesignatePage } from '../../component/page/SearcherDesignatePage'
import { fetchSearcherConnections, User } from '../../app/services/userService'
import { fetchProjectDetail, Project } from '../../app/services/projectService'
import { toast } from 'react-toastify'
import { useParams } from 'react-router'
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../../app/slices/userSlice'

export const SearcherDesignatePageContainer = () => {
  const [users, setUsers] = React.useState([] as User[])
  const [project, setProject] = React.useState({} as Project)

  const currentUser = useAppSelector(selectUser)

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

  return <SearcherDesignatePage users={users} project={project} currentUser={currentUser} />
}
