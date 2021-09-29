import * as React from 'react'
import { useParams } from 'react-router'
import { SearcherIntroduceDetailPage } from '../../component/page/SearcherIntroduceDetailPage'
import {
  fetchApplicationCompany,
  approveApplicationComapny,
  denyApplicationComapny,
  ApplicationCompany
} from '../../app/services/applicationService'
import { toast } from 'react-toastify'

export const SearcherIntroduceDetailPageContainer = () => {
  const [application, setApplication] = React.useState({} as ApplicationCompany)

  const params: { id: string, introduceid: string } = useParams()

  React.useEffect(
    () => {
      (async () => {
        try {
          const applicationCompany = await fetchApplicationCompany(params.introduceid)
          setApplication(applicationCompany)
        } catch {
          toast.error('紹介詳細取得が失敗しました')
        }
      })()
    },
    []
  )

  const handleApprove = async () => {
    try {
      const applicationCompany = await approveApplicationComapny(params.introduceid)
      setApplication(applicationCompany)
      toast.success('紹介の承認が成功しました')
    } catch {
      toast.error('紹介の承認が失敗しました')
    }
  }

  const handleDeny = async () => {
    try {
      const applicationCompany = await denyApplicationComapny(params.introduceid)
      setApplication(applicationCompany)
    } catch {
      toast.error('紹介の承認が失敗しました')
    }
  }

  return <SearcherIntroduceDetailPage
    application={application}
    handleApprove={handleApprove}
    handleDeny={handleDeny}
  />
}
