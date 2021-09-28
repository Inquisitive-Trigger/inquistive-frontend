import * as React from 'react'
import { useParams } from 'react-router'
import { ApplicationCompany, fetchApplicationCompanies } from '../../app/services/applicationService'
import { IntroducerStatusIntroListPage } from '../../component/page/IntroducerStatusIntroListPage'
import { toast } from 'react-toastify'

export const IntroducerStatusIntroListPageContainer = () => {
  const [applicationCompanies, setApplicationCompanies] = React.useState([] as ApplicationCompany[])

  React.useEffect(
    () => {
      (async () => {
        try {
          const data = await fetchApplicationCompanies()
          setApplicationCompanies(data)
        } catch(e) {
          console.log(e)
          toast.error('登録が失敗しました')
        }
      })()    
    },
    []
  )

  return <IntroducerStatusIntroListPage
    applicationCompanies={applicationCompanies}
  />
}
