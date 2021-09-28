import React from 'react'
import styled from 'styled-components'
import { Button } from '../atom/Button'
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

const SearcherIntroduceDetailContainer = styled.div`
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

type iSearcherIntroduceDetailPage = {
  application: ApplicationCompany
  handleApprove: () => void
  handleDeny: () => void
}

export const SearcherIntroduceDetailPage: React.FC<iSearcherIntroduceDetailPage> = ({
  application,
  handleApprove,
  handleDeny
}) => {
  return (
    <SearcherIntroduceDetailContainer>
      <TextDetailContainer>
        <h3 className="project-title">{application.name}</h3>
        <p className="concept">{application.reason}</p>

        <p>紹介者：<b>{application.author?.name}</b></p>
        <p>紹介状態：<StatusText status="approved">{application.status_project}</StatusText></p>
      </TextDetailContainer>
      <Button
        onClick={handleApprove}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="40px 0 0 0"
        backgroundColor={color.lightGreen}
        color={color.white}
      >
        承諾
      </Button>

      <Button
        onClick={handleDeny}
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="20px 0 0 0"
        backgroundColor={color.red}
        color={color.white}
      >
        拒否
      </Button>
    </SearcherIntroduceDetailContainer>
  )
}
