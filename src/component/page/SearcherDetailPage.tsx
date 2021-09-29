import React from 'react'
import styled from 'styled-components'
import { Button } from '../atom/Button'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { color } from '../../utils/color'
import { Project } from '../../app/services/projectService'
import { useHistory } from 'react-router'
import moment from 'moment'

const SearcherDetailContainer = styled.div`
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

type iSearcherDetailPage = {
  project: Project
}

export const SearcherDetailPage: React.FC<iSearcherDetailPage> = ({
  project
}) => {
  const history = useHistory()
  return (
    <SearcherDetailContainer>
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
        <div>{project.wish_person}</div>
      </DetailContainer>
      <DetailContainer>
        <label>商談成立報酬の目安</label>
        <div>{`${Number(project.reward) * 0.005}円`}</div>
      </DetailContainer>
      <DetailContainer>
        <label>このサービスの強み</label>
        <div>{project.appeal}</div>
      </DetailContainer>
      <DetailContainer>
        <label>企業概要</label>
        <div>{project.company_info}</div>
      </DetailContainer>
      <DetailContainer>
        <label>会社ホームページのURL</label>
        <div>{project.company_url}</div>
      </DetailContainer>
      <DetailContainer> <label>状態</label>
        <div>{project.status}</div>
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
        onClick={() => history.push(`/searcher/project/${project.id}/designate`)}
        backgroundColor={color.lightGreen}
        color={color.white}
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
        margin="20px 0 0 0"
      >
        紹介一覧を見る
      </Button>
      <Button
        onClick={() => history.push("/searcher/list")}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="20px 0 20px 0"
      >
        案件一覧に戻る
      </Button>
    </SearcherDetailContainer>
  )
}
