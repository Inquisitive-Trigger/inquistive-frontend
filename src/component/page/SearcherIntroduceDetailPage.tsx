import React from 'react'
import styled from 'styled-components'
import { Button } from '../atom/Button'
import { color } from '../../utils/color'
import { ApplicationCompany } from '../../app/services/applicationService'
import moment from 'moment'

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

const OverviewContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;

  & > .project-title {
    font-weight: 700;
    font-size: 20px;
  }
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

const StatusText = styled.span<{ status: string }>`
  color: ${({ status }) => status === '承諾' ? color.lightGreen : status === '拒否' ? color.red : color.yellow};
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
      <OverviewContainer>
        <h3 className="project-title">{application.name}</h3>
        <p className="concept">{application.reason}</p>
      </OverviewContainer>

      <DetailContainer>
        <label>詳細</label>
        <div>{application.detail}</div>
      </DetailContainer>

      {/* <DetailContainer>
        <label>紹介者</label>
        <div>{application.author.name}</div>
      </DetailContainer> */}

      <DetailContainer>
        <label>掲載日</label>
        <div>{moment(application.created_at).format('YYYY年MM月DD日')}</div>
      </DetailContainer>

      <DetailContainer>
        <label>紹介状態</label>
        <div><StatusText status={application.status_project}>{application.status_project}</StatusText></div>
      </DetailContainer>

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
