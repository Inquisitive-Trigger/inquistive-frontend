import React from 'react'
import { Select, DatePicker } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { Button } from '../atom/Button'
import { Input } from '../atom/Input'
import { Project } from '../../app/services/projectService'

const { Option } = Select

const InputGroup = styled.div`
  width: 90%;
  margin: 12px 0;
  max-width: 1080px;
  text-align: left;

  & > label {
    color: ${color.darkGreen};
    font-weight: 900;
  }

  & > input, .ant-input-affix-wrapper, textarea, .ant-picker {
    margin: 10px 0;
    border-radius: 12px;
  }

  & > .ant-select, .ant-picker {
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

const SearcherCreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }
`

const Header = styled.h1`
  width: 90%;
  max-width: 1080px;
  font-size: 20px;
  font-weight: 700;
`

type iSearcherCreatePage = {
  handleSubmit: (project: Project) => void
}

export const SearcherCreatePage: React.FC<iSearcherCreatePage> = ({
  handleSubmit
}) => {
  const [project, setProject] = React.useState({} as Project)
  return (
    <SearcherCreateContainer>
      <Header>
        新規案件
      </Header>

      <InputGroup>
        <label htmlFor="name">案件名</label>
        <Input
          placeholder="スパープロジェクト"
          name="name"
          id="name"
          onChange={e => setProject({ ...project, name: e.target.value })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="concept">案件の概念</label>
        <Input.TextArea
          placeholder="超人社会を作るプロジェクト"
          name="concept"
          id="concept"
          rows={8}
          onChange={e => setProject({ ...project, concept: e.target.value })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="deadline">期限</label>
        <DatePicker
          placeholder="期限を選択してください"
          name="deadline"
          id="deadline"
          size="large"
          onChange={e => setProject({ ...project, deadline: e?.toDate() })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="reward">報酬</label>
        <Input
          placeholder="300万円"
          name="reward"
          id="reward"
          onChange={e => setProject({ ...project, reward: e.target.value })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="email">案件業種</label>
        <Select
          defaultValue="trading"
          onSelect={e => setProject({ ...project, category: e })}
        >
          <Option value="メーカー">メーカー</Option>
          <Option value="商社">商社</Option>
          <Option value="流通・小売">流通・小売</Option>
          <Option value="金融">金融</Option>
          <Option value="サービス・インフラ">サービス・インフラ</Option>
          <Option value="ソフトウエア・通信">ソフトウエア・通信</Option>
          <Option value="広告・出版・マスコミ">広告・出版・マスコミ</Option>
          <Option value="官公庁・公社・団体">官公庁・公社・団体</Option>
        </Select>
      </InputGroup>
      
      <Button
        onClick={() => handleSubmit(project)}
        backgroundColor={color.lightGreen}
        color={color.white}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="20px 0"
      >
        案件を作成する
      </Button>
    </SearcherCreateContainer>
  )
}
