import React from 'react'
import styled from 'styled-components'
import { Project } from '../../app/services/projectService'
import { color } from '../../utils/color'
import { Button } from '../atom/Button'
import moment from 'moment'
import { useHistory } from 'react-router'

const IntroducerDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }
`

const OverviewContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }
`

const DetailContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  margin-top: 20px;
  line-height: 2;
`

type iIntroducerDetailPage = {
  project: Project
}

export const IntroducerDetailPage: React.FC<iIntroducerDetailPage> = ({
  project
}) => {
  const history = useHistory()

  return (
    <IntroducerDetailContainer>
      <OverviewContainer>
        <p className="company-name">{project.company_name}</p>
        <h3 className="project-title">{project.name}</h3>
        <p className="concept">{project.concept}</p>
      </OverviewContainer>
      <DetailContainer>
        <div>状態：{project.status}</div>
        <div>期限：{moment(project.deadline).format('YYYY年MM月DD日')}</div>
        <div>報酬：{project.reward}</div>
        <div>業種：{project.category}</div>
        <div>作成日：{moment(project.created_at).format('YYYY年MM月DD日')}</div>
        <div>最終更新日：{moment(project.updated_at).format('YYYY年MM月DD日')}</div>
      </DetailContainer>
      <Button
        backgroundColor={color.lightGreen}
        color={color.white}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="40px 0 0 0"
        onClick={() => history.push(`/introducer/project/${[project.id]}/introduce`)}
      >
        企業を紹介する
      </Button>
    </IntroducerDetailContainer>
  )
}
