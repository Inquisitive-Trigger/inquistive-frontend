import React from 'react'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { Card } from '../atom/Card'
import { ApplicationCompany } from '../../app/services/applicationService'
import { useHistory } from 'react-router'
import { Project } from '../../app/services/projectService'

const IntroducerSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionHeader = styled.div`
  width: 90%;
  max-width: 1080px;
  color: ${color.darkGreen};
  font-weight: 900;
  text-align: left;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  max-width: 1080px;
  width: 100%;
`

const StatusText = styled.span<{ status: string }>`
  color: ${color.white};
  background-color: ${({ status }) => status === '承認' ? color.lightGreen : status === '拒否' ? color.red : color.yellow};
  font-weight: 700;
  font-size: 14px;
  margin-right: 10px;
  padding: 4px 8px;
  border-radius: 12px;
`

const EmptyMessageContainer = styled.div`
  margin-top: 20px;
  color: ${color.lightGray};
`


type iSearcherIntroduceListPage = {
  applications: ApplicationCompany[]
  project: Project
}

export const SearcherIntroduceListPage: React.FC<iSearcherIntroduceListPage> = ({
  applications,
  project
}) => {
  const history = useHistory()

  return (
    <IntroducerSearchContainer>
      <SectionHeader>"{project.name}"の紹介一覧</SectionHeader>
      <CardContainer>
        {applications.length !== 0 ? applications.map(application => (
          <Card 
            key={application.id}
            margin="8px 20px"
            onClick={() => history.push(`/searcher/project/${application.project.id}/introduce/${application.id}`)}
          >
            <h3 className="project-title">
              <StatusText status={application.status_project}>{application.status_project}</StatusText>
              {application.name}
            </h3>
            <p className="concept">{application.reason}</p>
          </Card>
        )) : <EmptyMessageContainer>まだ紹介は届いていません。</EmptyMessageContainer>}
      </CardContainer>
    </IntroducerSearchContainer>
  )
}
