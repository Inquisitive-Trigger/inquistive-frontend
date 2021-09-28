import React from 'react'
import styled from 'styled-components'
import { Button } from '../atom/Button'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { color } from '../../utils/color'
import { ApplicationCompany } from '../../app/services/applicationService'

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
  color: ${({ status }) => status === '承諾' ? color.lightGreen : status === '拒否' ? color.red : color.yellow};
  font-weight: 700;
`

type iIntroducerStatusDetailPage = {
  applicationCompany: ApplicationCompany
  deleteApplication: () => void
}

export const IntroducerStatusDetailPage: React.FC<iIntroducerStatusDetailPage> = ({
  applicationCompany,
  deleteApplication
}) => {
  return (
    <IntroducerStatusDetailPageContainer>
      <TextDetailContainer>
        <h3 className="project-title">{applicationCompany.name}</h3>
        <h3>詳細</h3>
        <p className="concept">{applicationCompany.detail}</p>
        
        <h3>紹介理由</h3>
        <p className="concept">{applicationCompany.reason}</p>

        <p>営業先担当者の名前： {applicationCompany.contact_name}</p>
        <p>営業先担当者のメールアドレス： {applicationCompany.contact_email}</p>
        <p>営業先担当者の電話番号： {applicationCompany.phone_number}</p>

        <p>掲載者の承諾状態：<StatusText status={applicationCompany.status_project}>{applicationCompany.status_project}</StatusText></p>
        <p>紹介された企業の承諾状態：<StatusText status={applicationCompany.status_worker}>{applicationCompany.status_worker}</StatusText></p>

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
        onClick={deleteApplication}
      >
        取り消し
      </Button>
    </IntroducerStatusDetailPageContainer>
  )
}
