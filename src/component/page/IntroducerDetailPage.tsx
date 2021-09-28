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

  & > label {
    color: ${color.darkGreen};
    font-weight: 900;
  }
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
      </OverviewContainer>
      <DetailContainer>
        <label>案件概要</label>
        <div>{project.concept}</div>
      </DetailContainer>
      <DetailContainer>
        <label>活動をお願いしたい方</label>
        <div>{project.wish_person || "飲食業界とつながりがある方"}</div>
      </DetailContainer>
      <DetailContainer>
        <label>商談成立報酬の目安</label>
        <div>{project.reward}</div>
      </DetailContainer>
      <DetailContainer>
        <label>このサービスの強み</label>
        <div>{project.appeal || "飲食業界で発生する非効率なアナログの顧客体験の研究をDXを用いて改善します"}</div>
      </DetailContainer>
      <DetailContainer>
        <label>企業概要</label>
        <div>{"所在地：青森県"}</div>
        <div>{"従業員：10名"}</div>
      </DetailContainer>
      <DetailContainer>
        <label>会社ホームページのURL</label>
        <div>{"https://chiho-chusho.com"}</div>
      </DetailContainer>
      <DetailContainer> <label>状態</label>
        <div>{project.status}</div>
      </DetailContainer>
      <DetailContainer>
        <label>掲載期限</label>
        <div>{moment(project.deadline).format('YYYY年MM月DD日')}</div>
      </DetailContainer>
      <DetailContainer>
        <label>業種</label>
        <div>{project.category}</div>
      </DetailContainer>
      <DetailContainer>
        <label>掲載日</label>
        <div>{moment(project.created_at).format('YYYY年MM月DD日')}</div>
      </DetailContainer>
      <DetailContainer>
        <label>最終更新日</label>
        <div>{moment(project.updated_at).format('YYYY年MM月DD日')}</div>
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
