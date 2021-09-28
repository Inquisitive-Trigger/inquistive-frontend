import * as React from 'react'
import { createProject, Project } from '../../app/services/projectService'
import { SearcherCreatePage } from '../../component/page/SearcherCreatePage'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'

export const SearcherCreatePageContainer = () => {
  const history = useHistory()

  const handleSubmit = async (project: Project) => {
    try {
      await createProject(project)
      history.push('/searcher/list')
    } catch {
      toast.error('案件作成が失敗しました')
    }
  }

  return <SearcherCreatePage handleSubmit={handleSubmit} />
}
