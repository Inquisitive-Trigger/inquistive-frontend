import * as React from 'react'
import { useHistory, useParams } from 'react-router'
import { IntroducerIntroducePage } from '../../component/page/IntroducerIntroducePage'
import { ApplicationCompanyForm, applyCompany, createEmptyProject, fetchProject, Project } from '../../app/services/projectService'
import { IntroducerDetailPage } from '../../component/page/IntroducerDetailPage'
import { toast } from 'react-toastify'

export const IntroducerIntroducePageContainer = () => {
  const [project, setProject] = React.useState<Project>(createEmptyProject())
  const { id } = useParams<{ id:string }>()
  const history = useHistory()

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

  const handleApplyCompany = React.useCallback(
    async (applicationCompanyForm: ApplicationCompanyForm) => {
      try {
        await applyCompany(applicationCompanyForm)

        // Notify
        toast.success('紹介登録が成功しました')

        // Redirect
        history.push(`/introducer/project/detail/${project.id}`)
      } catch(e) {
        toast.error('紹介登録が失敗しました')
      }
    },
    [project]
  )


  return <IntroducerIntroducePage
    project={project}
    onApply={handleApplyCompany}
  />
}
