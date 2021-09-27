import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { FcPlus } from 'react-icons/fc'
import { Card } from '../atom/Card'

const datas = [{
  key: 999,
  companyName: '株式会社○○',
  projectName: '新事業立ち上げ',
  concept: '新事業立ち上げのためにサーバ・インフラする会社を探しています。期間は２年間です'
}]

for (let i = 0; i < 2; i++) {
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

const PlusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  & > svg {
    font-size: 20px;
    margin-right: 5px;
  }
`

type iSearcherListPage = {
}

export const SearcherListPage: React.FC<iSearcherListPage> = ({
}) => {

  return (
    <IntroducerSearchContainer>
      <SectionHeader>実行中案件</SectionHeader>
      <CardContainer>
        {datas.map(data => (
          <Card key={data.key} margin="8px 20px">
            <p className="company-name">{data.companyName}</p>
            <h3 className="project-title">{data.projectName}</h3>
            <p className="concept">{data.concept}</p>
          </Card>
        ))}
      </CardContainer>

      <PlusButton>
        <FcPlus/> 新規案件
      </PlusButton>
      
    </IntroducerSearchContainer>
  )
}
