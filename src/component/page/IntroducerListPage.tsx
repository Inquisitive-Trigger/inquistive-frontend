import React from 'react'
import Topbar from '../atom/Topbar'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'

const { Option } = Select

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

const IntroducerListContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputGroup = styled.div`
  width: 90%;
  max-width: 1080px;
  text-align: left;

  & > label {
    color: ${color.darkGreen};
    font-weight: 900;
  }

  & > input, .ant-input-affix-wrapper {
    margin: 10px 0;
    border-radius: 12px;
  }

  & > .ant-select {
    display: block;
    max-width: 1080px;
    margin-top: 10px;
    border-radius: 15px;
    margin: 10px 0;
  }

  & > .ant-select-selector {
    border-radius: 12px;
  }
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


  & > .company-name {

  }

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }

  & > .concept {

  }
`

const IntroducerListPage = () => {
  return (
    <IntroducerListContainer>
      <InputGroup>
        <label htmlFor="email">案件業種</label>
        <Select
          defaultValue="trading"
        >
          <Option value="manufacturer">メーカー</Option>
          <Option value="trading">商社</Option>
          <Option value="distribution">流通・小売</Option>
          <Option value="finance">金融</Option>
          <Option value="infrastructure">サービス・インフラ</Option>
          <Option value="software">ソフトウエア・通信</Option>
          <Option value="ads">広告・出版・マスコミ</Option>
          <Option value="public">官公庁・公社・団体</Option>
        </Select>
      </InputGroup>

      <SectionHeader>最新案件</SectionHeader>
      <CardContainer>
        {datas.map(data => (
          <Card key={data.key}>
            <p className="company-name">{data.companyName}</p>
            <h3 className="project-title">{data.projectName}</h3>
            <p className="concept">{data.concept}</p>
          </Card>
        ))}
      </CardContainer>
      
    </IntroducerListContainer>
  )
}

export default IntroducerListPage
