import * as React from 'react'
import { useParams } from 'react-router'
import { createEmptyProject, fetchProject, Project } from '../../app/services/projectService'
import { IntroducerDetailPage } from '../../component/page/IntroducerDetailPage'
import { toast } from 'react-toastify'

export const IntroducerDetailPageContainer = () => {
  const [project, setProject] = React.useState<Project>(createEmptyProject())
  const { id } = useParams<{ id:string }>()

  React.useEffect(
    () => {
      (async () => {
        try {
          const project = await fetchProject(id)
          setProject(project)
        } catch {
          toast.error('案件取得が失敗しました')
        }
      })()
    },
    []
  )


  return <IntroducerDetailPage
    project={project}
  />
}
