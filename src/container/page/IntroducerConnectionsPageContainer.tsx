import * as React from 'react'
import { IntroducerConnectionsPage } from '../../component/page/IntroducerConnectionsPage'
import { fetchIntroducerConnections, User } from '../../app/services/userService'
import { toast } from 'react-toastify'

export const IntroducerConnectionsPageContainer = () => {
  const [users, setUsers] = React.useState([] as User[])

  React.useEffect(
    () => {
      (async () => {
        try {
          const rawUsers = await fetchIntroducerConnections()
          setUsers(rawUsers)
        } catch {
          toast.error('つながりのある企業一覧取得が失敗しました')
        }
      })()
    },
    []
  )
  return <IntroducerConnectionsPage users={users} />
}
