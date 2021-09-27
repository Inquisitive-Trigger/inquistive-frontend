import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { useParams } from 'react-router'

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

type iIntroducerSearchPage = {
  category: string
}

export const IntroducerSearchPage: React.FC<iIntroducerSearchPage> = ({
  category
}) => {

  return (
    <IntroducerSearchContainer>
      <SectionHeader>案件業種：{category}</SectionHeader>
      <CardContainer>
        {datas.map(data => (
          <Card key={data.key}>
            <p className="company-name">{data.companyName}</p>
            <h3 className="project-title">{data.projectName}</h3>
            <p className="concept">{data.concept}</p>
          </Card>
        ))}
      </CardContainer>
      
    </IntroducerSearchContainer>
  )
}
