import React from 'react'
import styled from 'styled-components'
import { Button } from '../atom/Button'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { color } from '../../utils/color'

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

const IntroducerStatusDetailPageContainer = styled.div`
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

const StatusText = styled.span<{ status: string }>`
  color: ${({ status }) => status === 'approved' ? color.lightGreen : status === 'rejected' ? color.red : color.yellow};
  font-weight: 700;
`

type iIntroducerStatusDetailPage = {
}

export const IntroducerStatusDetailPage: React.FC<iIntroducerStatusDetailPage> = ({
}) => {



  return (
    <IntroducerStatusDetailPageContainer>
      <TextDetailContainer>
        <h3 className="project-title">株式会社○○○○</h3>
        <p className="concept">
          アピールアピールアピールアピールアピールアピールアピールアピールアピール
          アピールアピールアピールアピールアピール
        </p>

        <p>紹介状態：<StatusText status="approved">承諾</StatusText></p>
      </TextDetailContainer>
      <Button
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="40px 0 0 0"
      >
        編集
      </Button>

      <Button
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="20px 0 0 0"
        backgroundColor={color.red}
        color={color.white}
      >
        取り消し
      </Button>
    </IntroducerStatusDetailPageContainer>
  )
}
