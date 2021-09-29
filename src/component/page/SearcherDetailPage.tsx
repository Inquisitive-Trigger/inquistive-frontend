import React from 'react'
import styled from 'styled-components'
import { Button } from '../atom/Button'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { color } from '../../utils/color'
import { Project } from '../../app/services/projectService'
import { useHistory } from 'react-router'

const datas = [{
  key: 999,
  companyName: '株式会社○○',
  projectName: '新事業立ち上げ',
  concept: '新事業立ち上げのためにサーバ・インフラする会社を探しています。期間は２年間です'
}]

for (let i = 0; i < 30; i++) {
  datas.push({
    key: i,
    companyName: '株式会社○○',
    projectName: '新事業立ち上げ',
    concept: '新事業立ち上げのためにサーバ・インフラする会社を探しています。期間は２年間です'
  })
}

const SearcherDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }
`

const TextDetailContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }
`

const Toolbox = styled.div`
  width: 90%;
  max-width: 1080px;
  text-align: left;
  margin-bottom: 20px;
  font-size: 16px;

  & > .pencil {
    color: ${color.darkGreen};
    margin-right: 20px;
    cursor: pointer;
  }

  & > .trash {
    color: ${color.red};
    cursor: pointer;
  }
`

type iSearcherDetailPage = {
  project: Project
}

export const SearcherDetailPage: React.FC<iSearcherDetailPage> = ({
  project
}) => {
  const history = useHistory()
  return (
    <SearcherDetailContainer>
      <Toolbox>
        <span className="pencil"><FaPencilAlt /></span>
        <span className="trash"><FaTrash /></span>
      </Toolbox>

      <TextDetailContainer>
        <p className="company-name">{project.company_name}</p>
        <h3 className="project-title">{project.name}</h3>
        <p className="concept">{project.concept}</p>
      </TextDetailContainer>
      <Button
        onClick={() => history.push(`/searcher/project/${project.id}/designate`)}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="40px 0 0 0"
      >
        ユーザーを指名して紹介してもらう
      </Button>
      <Button
        onClick={() => history.push(`/searcher/project/${project.id}/introduce`)}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="40px 0 0 0"
      >
        紹介一覧を見る
      </Button>
      <Button
        onClick={() => history.push("/searcher/list")}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="40px 0 0 0"
      >
        案件一覧に戻る
      </Button>
    </SearcherDetailContainer>
  )
}
