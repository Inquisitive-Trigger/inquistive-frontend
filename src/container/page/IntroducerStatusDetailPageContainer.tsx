import * as React from 'react'
import { useHistory, useParams } from 'react-router'
import { createEmptyApplicationCompany, deleteApplicationCompany, fetchApplicationCompany } from '../../app/services/applicationService'
import { IntroducerStatusDetailPage } from '../../component/page/IntroducerStatusDetailPage'
import { toast } from 'react-toastify'
import { useAppSelector } from '../../app/hooks'
import { selectIsAuth } from '../../app/slices/userSlice'

export const IntroducerStatusDetailPageContainer = () => {
  const [applicationCompany, setApplicationCompany] = React.useState(createEmptyApplicationCompany())
  const { companyid } = useParams<{ companyid: string }>()
  const history = useHistory()

  React.useEffect(
    () => {
      (async () => {
        try {
          const data = await fetchApplicationCompany(companyid)
          setApplicationCompany(data)
        } catch(e) {
          console.log(e)
          toast.error('紹介詳細の取得が失敗しました')
        }
      })()    
    },
    []
  )

  const deleteApplication = React.useCallback(
    async () => {
      try {
        // Delete Application
        await deleteApplicationCompany(companyid)
        
        // Notify
        toast.success('紹介詳細の削除が成功しました')

        // Redirect
        history.push('/introducer/status')
      } catch(e) {
        console.log(e)
        toast.error('紹介詳細の取得が失敗しました')
      }
    },
    []
  )

  return <IntroducerStatusDetailPage
    applicationCompany={applicationCompany}
    deleteApplication={deleteApplication}
  />
}
