import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { useParams } from 'react-router'
import { Button } from '../atom/Button'

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

const IntroducerDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }
`

const TextDetailContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }
`

type iIntroducerDetailPage = {
}

export const IntroducerDetailPage: React.FC<iIntroducerDetailPage> = ({
}) => {

  return (
    <IntroducerDetailContainer>
      <TextDetailContainer>
        <p className="company-name">株式会社○○</p>
        <h3 className="project-title">新事業立ち上げ</h3>
        <p className="concept">新事業立ち上げのためにサーバ・インフラする会社を探しています。期間は２年間です</p>
      </TextDetailContainer>
      <Button
        backgroundColor={color.lightGreen}
        color={color.white}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="40px 0 0 0"
      >
        企業を紹介する
      </Button>
    </IntroducerDetailContainer>
  )
}
