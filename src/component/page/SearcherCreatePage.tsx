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
          placeholder="食品管理を自動化したい企業募集"
          name="name"
          id="name"
          onChange={e => setProject({ ...project, name: e.target.value })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="concept">案件の概念</label>
        <Input.TextArea
          placeholder="我々のサービスは食品業界の企業をターゲットに据え食品管理にかかるコストを下げるソリューションを最新のIT技術を用いて提案します。今回の案件では〇〇プラン以上にご登録いただけるような企業をご紹介いただきたいと考えています。"
          name="concept"
          id="concept"
          rows={8}
          onChange={e => setProject({ ...project, concept: e.target.value })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="appeal">サービスの強み</label>
        <Input
          placeholder="他社に比べ安価でサービスを提供しております。"
          name="appeal"
          id="appeal"
          onChange={e => setProject({ ...project, appeal: e.target.value })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="wish_person">活動をお願いしたい方</label>
        <Input
          placeholder="食品業界に知り合いの多い方"
          name="wish_person"
          id="wish_person"
          onChange={e => setProject({ ...project, wish_person: e.target.value })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="reward">平均取引金額</label>
        <Input
          placeholder="3000000"
          name="reward"
          id="reward"
          onChange={e => setProject({ ...project, reward: e.target.value })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="company_info">会社概要</label>
        <Input
          placeholder="本社は青森県にあり、従業員は10名程度です。"
          name="company_info"
          id="company_info"
          onChange={e => setProject({ ...project, company_info: e.target.value })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="company_url">会社HPのURL</label>
        <Input
          placeholder="https://shokuhin-automation.co.jp"
          name="company_url"
          id="company_url"
          onChange={e => setProject({ ...project, company_url: e.target.value })}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="email">案件業種</label>
        <Select
          defaultValue="メーカー"
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
