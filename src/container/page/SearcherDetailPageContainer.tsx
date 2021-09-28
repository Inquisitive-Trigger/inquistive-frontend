import * as React from 'react'
import { useParams } from 'react-router'
import { fetchProjectDetail, Project } from '../../app/services/projectService'
import { SearcherDetailPage } from '../../component/page/SearcherDetailPage'
import { toast } from 'react-toastify'

export const SearcherDetailPageContainer = () => {
  const [project, setProject] = React.useState({} as Project)

  const params: { id: string } = useParams()

  React.useEffect(
    () => {
      (async () => {
        try {
          const rawProject = await fetchProjectDetail(Number(params.id))
          setProject(rawProject)
        } catch {
          toast.error('案件詳細取得が失敗しました')
        }
      })()
    },
    []
  )

  return <SearcherDetailPage project={project} />
}
