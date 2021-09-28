import * as React from 'react'
import { useParams } from 'react-router'
import { Project, searchProjects } from '../../app/services/projectService'
import { IntroducerSearchPage } from '../../component/page/IntroducerSearchPage'
import { CATEGORY_LABEL } from '../../utils/category'
import { toast } from 'react-toastify'

export const IntroducerSearchPageContainer = () => {
  const { category } = useParams<{ category: keyof typeof CATEGORY_LABEL }>()

  const [projects, setProjects] = React.useState([] as Project[])

  React.useEffect(
    () => {
      (async () => {
        try {
          const projects = await searchProjects(CATEGORY_LABEL[category])
          setProjects(projects)
        } catch {
          toast.error('案件一覧取得が失敗しました')
        }
      })()
    },
    []
  )

  return <IntroducerSearchPage
    category={category}
    projects={projects}
  />
}
