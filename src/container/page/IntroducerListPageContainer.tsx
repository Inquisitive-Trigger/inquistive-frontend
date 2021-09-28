import * as React from 'react'
import { fetchProjectList, Project } from '../../app/services/projectService'
import IntroducerListPage from '../../component/page/IntroducerListPage'
import { toast } from 'react-toastify'

export const IntroducerListPageContainer = () => {
  const [projects, setProjects] = React.useState([] as Project[])

  React.useEffect(
    () => {
      (async () => {
        try {
          const projects = await fetchProjectList()
          setProjects(projects)
        } catch {
          toast.error('案件一覧取得が失敗しました')
        }
      })()
    },
    []
  )

  return <IntroducerListPage
    projects={projects}
  />
}
