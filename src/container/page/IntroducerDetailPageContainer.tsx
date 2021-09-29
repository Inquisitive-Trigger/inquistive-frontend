import * as React from 'react'
import { useHistory, useParams } from 'react-router'
import { createEmptyProject, fetchProjectDetail, Project } from '../../app/services/projectService'
import { IntroducerDetailPage } from '../../component/page/IntroducerDetailPage'
import { toast } from 'react-toastify'
import { useAppSelector } from '../../app/hooks'
import { selectIsAuth } from '../../app/slices/userSlice'
import Cookies from 'js-cookie'

export const IntroducerDetailPageContainer = () => {
  const [project, setProject] = React.useState<Project>(createEmptyProject())
  const { id } = useParams<{ id:string }>()
  const isAuth = useAppSelector(selectIsAuth)
  const history = useHistory()

  React.useEffect(
    () => {
      (async () => {
        try {
          const project = await fetchProjectDetail(Number(id))
          setProject(project)
        } catch {
          toast.error('案件取得が失敗しました')
        }
      })()
    },
    []
  )

  const handleIntroduce = React.useCallback(
    () => {
      if (isAuth){
        history.push(`/introducer/project/${[project.id]}/introduce`)
      }

      Cookies.set('redirect', `/introducer/project/${[project.id]}/introduce`)
      history.push(`/signin`)
    },
    [isAuth, history, project]
  )


  return <IntroducerDetailPage
    project={project}
    isAuth={isAuth}
    onIntroduce={handleIntroduce}
  />
}
