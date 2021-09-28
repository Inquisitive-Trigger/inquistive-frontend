import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { useParams } from 'react-router'
import { Button } from '../atom/Button'
import { Card } from '../atom/Card'
import { Input } from '../atom/Input'
import { Project } from '../../app/services/projectService'
import { ApplicationCompany, ApplicationCompanyForm } from '../../app/services/applicationService'

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

const IntroducerIntroduceContainer = styled.div`
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

const CardLabel = styled.div`
  display: block;
  width: 90%;
  max-width: 1080px;
  color: ${color.darkGreen};
  font-weight: 900;
`

const CardContainer = styled.div`
  width: 90%;
  max-width: 1080px;
`

type iIntroducerIntroducePage = {
  project: Project
  onApply: (applicationCompanyForm: ApplicationCompanyForm) => void
  applicationCompany?: ApplicationCompany
  type: 'create' | 'update'
}

export const IntroducerIntroducePage: React.FC<iIntroducerIntroducePage> = ({
  project,
  onApply,
  applicationCompany,
  type
}) => {
  const [applicationForm, setApplicationForm] = React.useState<ApplicationCompanyForm>({
    name: '',
    detail: '',
    reason: '',
    contactEmail: '',
    contactName: '',
    phoneNumber: '',
    projectId: 0
  })

  React.useEffect(
    () => {
      if (applicationCompany) {
        setApplicationForm({
          name: applicationCompany.name,
          detail: applicationCompany.detail,
          reason: applicationCompany.reason,
          contactEmail: applicationCompany.contact_email,
          contactName: applicationCompany.contact_name,
          phoneNumber: applicationCompany.phone_number,
          projectId: project.id
        })
      }
    },
    [applicationCompany]
  )


  const handleChangeText = React.useCallback(
    e => {
      const name = e.currentTarget.name
      const value = e.currentTarget.value

      setApplicationForm({
        ...applicationForm,
        [name]: value
      })
    },
    [applicationForm]
  )

  const handleSubmit = React.useCallback(
    () => {
      onApply({...applicationForm, projectId: project.id})
    },
    [onApply, applicationForm, project]
  )

  return (
    <IntroducerIntroduceContainer>
      <Header>
        {type === 'create' ? '企業を紹介する' : '紹介内容を編集する'}
      </Header>

      <CardContainer>
        <CardLabel>対象案件</CardLabel>
        <Card width="100%">
          <p className="company-name">{project.company_name}</p>
          <h3 className="project-title">{project.name}</h3>
          <p className="concept">{project.concept}</p>
        </Card>
      </CardContainer>

      <InputGroup>
        <label htmlFor="name">企業名</label>
        <Input
          placeholder="株式会社○○"
          name="name"
          id="name"
          onChange={handleChangeText}
          value={applicationForm.name}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="detail">企業の概念</label>
        <Input.TextArea
          placeholder="株式会社○○○○はサーバ・インフラの専門会社でとても
          優秀な会社"
          name="detail"
          id="detail"
          rows={8}
          onChange={handleChangeText}
          value={applicationForm.detail}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="reason">紹介する理由</label>
        <Input.TextArea
          placeholder="株式会社○○○○はサーバ・インフラの専門会社でとても
          優秀な会社"
          name="reason"
          id="reason"
          rows={8}
          onChange={handleChangeText}
          value={applicationForm.reason}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="contactName">営業先担当者名前</label>
        <Input
          placeholder="太郎二郎"
          name="contactName"
          id="contactName"
          onChange={handleChangeText}
          value={applicationForm.contactName}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="contactEmail">営業先担当者メールアドレス</label>
        <Input
          placeholder="user@email.com"
          name="contactEmail"
          id="contactEmail"
          onChange={handleChangeText}
          value={applicationForm.contactEmail}
        />
      </InputGroup>
      
      <Button
        backgroundColor={color.lightGreen}
        color={color.white}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="20px 0"
        onClick={handleSubmit}
      >
        企業を紹介する
      </Button>
    </IntroducerIntroduceContainer>
  )
}
