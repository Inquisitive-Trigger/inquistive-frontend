import React from 'react'
import Topbar from '../atom/Topbar'
import { Button, Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { Project } from '../../app/services/projectService'
import { useHistory } from 'react-router'
import { Card } from '../atom/Card'
import { IntroducerTab } from '../atom/IntroducerTab'

const { Option } = Select

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
  column-gap: 30px;
  margin-top: 15px;
  max-width: 1080px;
  width: 100%;
`

type iIntroducerListPage = {
  projects: Project[]
  isAuth: boolean
}

const IntroducerListPage: React.FC<iIntroducerListPage> = ({
  projects,
  isAuth
}) => {
  const history = useHistory()

  const handleCategoryChange = React.useCallback(
    value => {
      history.push(`/introducer/project/search/${value}`)
    },
    [history]
  )

  return (
    <IntroducerListContainer>
      {isAuth && <>
        <IntroducerTab />
      </>}

      <InputGroup>
        <label htmlFor="email">案件業種</label>
        <Select onChange={handleCategoryChange} placeholder="カテゴリを選択してください">
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
        {projects.map((project, index) => (
          <Card key={project.id} animationDelay={index} onClick={() => history.push(`/introducer/project/detail/${project.id}`)}>
            <p className="company-name">{project.company_name}</p>
            <h3 className="project-title">{project.name}</h3>
            <p className="concept">{project.concept}</p>
          </Card>
        ))}
      </CardContainer>
    </IntroducerListContainer>
  )
}

export default IntroducerListPage
