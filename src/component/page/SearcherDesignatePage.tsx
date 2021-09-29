import React from 'react'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { User } from '../../app/services/userService'
import { Project } from '../../app/services/projectService'
import { useHistory } from 'react-router'
import { Select } from 'antd'
import { Input } from '../atom/Input'
import { Button } from '../atom/Button'

const { Option } = Select

const SearcherConnectionsContainer = styled.div`
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

const DetailContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  margin-top: 20px;
  line-height: 2;

  & > label {
    color: ${color.darkGreen};
    font-weight: 900;
  }
`
const InputGroup = styled.div`
  width: 90%;
  margin: 12px 0;
  max-width: 1080px;
  text-align: left;

  & > label {
    color: ${color.darkGreen};
    font-weight: 900;
  }

  & > input, .ant-input-affix-wrapper, textarea {
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

type iSearcherDesignatesPage  ={
  users: User[]
  project: Project
  currentUser: User
  handleSubmit: (to: number, message: string) => void
}

type iForm = {
  userId: number
  body: string
}

export const SearcherDesignatePage: React.FC<iSearcherDesignatesPage> = ({
  users, project, currentUser, handleSubmit 
}) => {
  const history = useHistory()

  const [form, setForm] = React.useState<iForm>({
    userId: -1,
    body: '' 
  })

  React.useEffect(() => {
    setForm({
      ...form,
      body: `お世話になっております。${currentUser.name}と申します。
${project.name}の件について紹介を依頼させていただきたくご連絡させていただきました。紹介という形でお力添えいただけるとありがたいです。
よろしくお願いいたします。
http://inquisitive-trigger-frontend-bucket.s3-website-ap-northeast-1.amazonaws.com/introducer/project/detail/${project.id}`
    })
  }, [users, project, currentUser])

  console.log(form.body)

  const handleChangeUser = React.useCallback(
    value => {
      setForm({
        ...form,
        userId: value
      })
    },
    [form]
  )

  const handleChangeBody = React.useCallback(
    e => {
      setForm({
        ...form,
        body: e.currentTarget.value 
      })
    },
    [form]
  )

  return (
    <SearcherConnectionsContainer>
      <SectionHeader>ユーザーを指名して紹介を依頼する</SectionHeader>
      <DetailContainer>
        <label>どのユーザーに依頼しますか？</label>
      </DetailContainer>
      <InputGroup>
        <Select
          placeholder="ユーザーを選んでください"
          onChange={handleChangeUser}
        >
        {users.map(user => (
          <Option value={user.id}>{user.name}</Option>
        ))}
        </Select>
      </InputGroup>
      <DetailContainer>
        <label>この文章でよろしいですか？</label>
      </DetailContainer>
      <InputGroup>
        <Input.TextArea
          placeholder=""
          name="concept"
          id="concept"
          rows={8}
          onChange={handleChangeBody}
          value={form.body}
        />
      </InputGroup>
      <Button
        onClick={() => handleSubmit(form.userId, form.body)}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="40px 0 0 0"
        backgroundColor={color.lightGreen}
        color={color.white}
      >
        依頼する
      </Button>
      <Button
        onClick={() => history.push(`/searcher/project/${project.id}`)}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="20px 0 0 0"
      >
        案件詳細に戻る
      </Button>
    </SearcherConnectionsContainer>
  )
}
