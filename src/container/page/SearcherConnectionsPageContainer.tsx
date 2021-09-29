import * as React from 'react'
import { SearcherConnectionsPage } from '../../component/page/SearcherConnectionsPage'
import { fetchSearcherConnections, User } from '../../app/services/userService'
import { toast } from 'react-toastify'

export const SearcherConnectionsPageContainer = () => {
  const [users, setUsers] = React.useState([] as User[])

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
  return <SearcherConnectionsPage users={users} />
}
