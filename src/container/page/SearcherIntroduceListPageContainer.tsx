import * as React from 'react'
import { useParams } from 'react-router'
import { SearcherIntroduceListPage } from '../../component/page/SearcherIntroduceListPage'
import { ApplicationCompany } from '../../app/services/applicationService'
import { fetchApplicationFromProject, fetchProjectDetail, Project } from '../../app/services/projectService'
import { toast } from 'react-toastify'

export const SearcherIntroduceListPageContainer = () => {
  const [applications, setApplications] = React.useState([] as ApplicationCompany[])
  const [project, setProject] = React.useState({} as Project)

  const params: { id: string } = useParams()

  React.useEffect(
    () => {
      (async () => {
        try {
          const applicationCompanies = await fetchApplicationFromProject(params.id)
          setApplications(applicationCompanies)

          const rawProject = await fetchProjectDetail(Number(params.id))
          setProject(rawProject)
        } catch {
          toast.error('紹介一覧取得が失敗しました')
        }
      })()
    },
    []
  )
  return <SearcherIntroduceListPage applications={applications} project={project}/>
}
