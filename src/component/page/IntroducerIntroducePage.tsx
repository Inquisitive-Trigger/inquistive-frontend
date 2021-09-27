import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { useParams } from 'react-router'
import { Button } from '../atom/Button'
import { Card } from '../atom/Card'
import { Input } from '../atom/Input'

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
}

export const IntroducerIntroducePage: React.FC<iIntroducerIntroducePage> = ({
}) => {
  return (
    <IntroducerIntroduceContainer>
      <Header>
        企業を紹介する
      </Header>

      <CardContainer>
        <CardLabel>対象案件</CardLabel>
        <Card>
          <p className="company-name">株式会社○○</p>
          <h3 className="project-title">新事業立ち上げ</h3>
          <p className="concept">新事業立ち上げのためにサーバ・インフラする会社を探しています。期間は２年間です</p>
        </Card>
      </CardContainer>

      <InputGroup>
        <label htmlFor="companyName">企業名</label>
        <Input
          placeholder="株式会社○○"
          name="companyName"
          id="companyName"
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="email">企業の概念</label>
        <Input.TextArea
          placeholder="株式会社○○○○はサーバ・インフラの専門会社でとても
          優秀な会社"
          name="email"
          id="email"
          rows={8}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="contact-name">営業先担当者名前</label>
        <Input
          placeholder="太郎二郎"
          name="contact-name"
          id="contact-name"
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="email">営業先担当者メールアドレス</label>
        <Input
          placeholder="user@email.com"
          name="email"
          id="email"
        />
      </InputGroup>
      
      <Button
        backgroundColor={color.lightGreen}
        color={color.white}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="20px 0"
      >
        企業を紹介する
      </Button>
    </IntroducerIntroduceContainer>
  )
}
