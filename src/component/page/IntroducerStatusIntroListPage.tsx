import React from 'react'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { Card } from '../atom/Card'
import { ApplicationCompany } from '../../app/services/applicationService'
import { useHistory } from 'react-router'
import { IntroducerTab } from '../atom/IntroducerTab'
import { IoMdClipboard } from 'react-icons/io'

const IntroducerSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1080px;
  width: 100%;
`

const ProjectInfoContainer = styled.div`
  display: flex;
  align-items: center;

  & > .icon {
    font-size: 24px;
    margin-right: 10px;
    line-height: 0;
  }
`

const StatusText = styled.span<{ status: string }>`
  color: ${color.white};
  background-color: ${({ status }) => status === '承諾' ? color.lightGreen : status === '拒否' ? color.red : color.yellow};
  font-weight: 700;
  font-size: 14px;
  margin-right: 10px;
  padding: 4px 8px;
  border-radius: 12px;
`

type iIntroducerStatusIntroListPage = {
  applicationCompanies: ApplicationCompany[]
}

export const IntroducerStatusIntroListPage: React.FC<iIntroducerStatusIntroListPage> = ({
  applicationCompanies
}) => {
  const history = useHistory()

  return (
    <IntroducerSearchContainer>
      <IntroducerTab />
      <CardContainer>
        {applicationCompanies.map((data, index) => (
          <Card
            key={data.id}
            margin="8px 20px"
            animationDelay={index}
            onClick={() => history.push(`/introducer/status/${data.id}`)}
          >
            <h3 className="project-title">
              <StatusText status={data.status_project}>{data.status_project}</StatusText>
              {data.name}
            </h3>
            <p className="concept">{data.detail}</p>
            <ProjectInfoContainer>
              <span className="icon"><IoMdClipboard /></span>
              {data.project.name}
            </ProjectInfoContainer>
          </Card>
        ))}
      </CardContainer>
    </IntroducerSearchContainer>
  )
}
