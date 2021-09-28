import * as React from 'react'
import { useHistory, useParams } from 'react-router'
import { IntroducerIntroducePage } from '../../component/page/IntroducerIntroducePage'
import { createEmptyProject, fetchProject, Project } from '../../app/services/projectService'
import { IntroducerDetailPage } from '../../component/page/IntroducerDetailPage'
import { toast } from 'react-toastify'
import { ApplicationCompany, ApplicationCompanyForm, applyCompany, editApplicationCompany, fetchApplicationCompany } from '../../app/services/applicationService'

export const IntroducerIntroducePageContainer = () => {
  const [project, setProject] = React.useState<Project>(createEmptyProject())
  const [applicationCompany, setApplicationCompany] = React.useState(undefined as ApplicationCompany | undefined)
  const { projectid, companyid } = useParams<{ projectid: string, companyid:string }>()
  const history = useHistory()

  const isUpdate = React.useMemo(() => !!companyid, [companyid])

  React.useEffect(
    () => {
      (async () => {
        try {
          if (projectid) {
            const project = await fetchProject(projectid)
            setProject(project)
          }

          if (companyid) {
            const applicationData = await fetchApplicationCompany(companyid)
            setApplicationCompany(applicationData)
            setProject(applicationData.project)
          }
          
        } catch {
          toast.error('案件取得が失敗しました')
        }
      })()
    },
    []
  )

  const handleCreateApplication = React.useCallback(
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

  const handleUpdateApplication = React.useCallback(
    async (applicationCompanyForm: ApplicationCompanyForm) => {
      try {
        await editApplicationCompany(applicationCompany!.id, applicationCompanyForm)

        // Notify
        toast.success('紹介の更新が成功しました')

        // Redirect
        history.push(`/introducer/status/${applicationCompany!.id}`)
      } catch(e) {
        toast.error('紹介の更新が失敗しました')
      }
    },
    [project, applicationCompany]
  )


  return <IntroducerIntroducePage
    project={project}
    onApply={isUpdate ? handleUpdateApplication : handleCreateApplication}
    applicationCompany={applicationCompany}
    type={isUpdate ? 'update' : 'create'}
  />
}
