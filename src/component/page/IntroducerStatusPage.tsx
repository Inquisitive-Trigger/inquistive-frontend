import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { AiFillCheckCircle, AiFillMinusCircle } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'

const datas = [{
  key: 999,
  companyName: '株式会社○○',
  projectName: '新事業立ち上げ',
  concept: '新事業立ち上げのためにサーバ・インフラする会社を探しています。期間は２年間です',
  approved: 23,
  pending: 2,
  rejected: 103
}]

for (let i = 0; i < 30; i++) {
  datas.push({
    key: i,
    companyName: '株式会社○○',
    projectName: '新事業立ち上げ',
    concept: '新事業立ち上げのためにサーバ・インフラする会社を探しています。期間は２年間です',
    approved: 3,
    pending: 5,
    rejected: 100
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
  margin-top: 20px;
  font-weight: 900;
  text-align: left;
  font-size: 24px;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  max-width: 1080px;
`

const Card = styled.div`
  border: 1px solid gray;
  margin: 8px 20px;
  padding: 10px 15px;
  border-radius: 25px;
  max-width: 500px;

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }
`

const StatusIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & > svg {
    font-size: 24px;
    margin-right: 10px;
  }

  &.approved > svg { color: ${color.lightGreen}; }
  &.pending > svg { color: ${color.yellow}; }
  &.rejected > svg { color: ${color.red}; }

`


type iIntroducerStatusPage = {
}

export const IntroducerStatusPage: React.FC<iIntroducerStatusPage> = ({
}) => {

  return (
    <IntroducerSearchContainer>
      <SectionHeader>企業を紹介状態</SectionHeader>
      <CardContainer>
        {datas.map(data => (
          <Card key={data.key}>
            <p className="company-name">{data.companyName}</p>
            <h3 className="project-title">{data.projectName}</h3>
            <p className="concept">{data.concept}</p>
            <StatusIconContainer className="approved">
              <AiFillCheckCircle /> 承諾 {data.approved} 件
            </StatusIconContainer>
            <StatusIconContainer className="pending">
              <AiFillMinusCircle /> 返答待ち {data.pending} 件
            </StatusIconContainer>
            <StatusIconContainer className="rejected">
              <MdCancel /> 拒否 {data.rejected} 件
            </StatusIconContainer>
          </Card>
        ))}
      </CardContainer>
      
    </IntroducerSearchContainer>
  )
}
