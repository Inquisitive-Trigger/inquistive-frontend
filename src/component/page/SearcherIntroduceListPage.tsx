import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { FcPlus } from 'react-icons/fc'
import { Card } from '../atom/Card'
import { ApplicationCompany } from '../../app/services/applicationService'

const datas = [{
  key: 999,
  name: '株式会社○○',
  appeal: 'この会社はすごくて、とりあえずすごい！',
  status: 'approved'
}]

for (let i = 0; i < 3; i++) {
  datas.push({
    key: i,
    name: '株式会社○○',
    appeal: 'この会社はすごくて、とりあえずすごい！',
    status: i % 3 === 0 ? 'approved' : i % 2 === 0 ? 'pending' : 'rejected'
  })
}

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
`

const StatusText = styled.p<{ status: string }>`
  color: ${({ status }) => status === 'approved' ? color.lightGreen : status === 'rejected' ? color.red : color.yellow};
  font-weight: 700;
`

type iSearcherIntroduceListPage = {
  applications: ApplicationCompany[]
}

export const SearcherIntroduceListPage: React.FC<iSearcherIntroduceListPage> = ({
  applications
}) => {

  const generateStatus = React.useCallback(
    (status: string) => {
      if (status === 'approved') { return '承諾' }
      if (status === 'rejected') { return '拒否' }

      return '返答待ち'
    },
    []
  )

  return (
    <IntroducerSearchContainer>
      <SectionHeader>"{applications.length !== 0 && applications[0].project.name}"の紹介一覧</SectionHeader>
      <CardContainer>
        {applications.length !== 0 && applications.map(application => (
          <Card key={application.id} margin="8px 20px">
            <StatusText status={application.status_project}>{generateStatus(application.status_project)}</StatusText>
            <h3 className="project-title">{application.name}</h3>
            <p className="concept">{application.reason}</p>
          </Card>
        ))}
      </CardContainer>
    </IntroducerSearchContainer>
  )
}
