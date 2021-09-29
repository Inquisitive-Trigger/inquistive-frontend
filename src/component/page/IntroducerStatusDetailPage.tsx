import React from 'react'
import styled from 'styled-components'
import { Button } from '../atom/Button'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { color } from '../../utils/color'
import { ApplicationCompany } from '../../app/services/applicationService'
import { useHistory } from 'react-router'

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

type iIntroducerStatusDetailPage = {
  applicationCompany: ApplicationCompany
  deleteApplication: () => void
}

export const IntroducerStatusDetailPage: React.FC<iIntroducerStatusDetailPage> = ({
  applicationCompany,
  deleteApplication,
}) => {
  const history = useHistory()

  return (
    <IntroducerStatusDetailPageContainer>
      <TextDetailContainer>
        <OverviewContainer>
          <h3 className="project-title">{applicationCompany.name}</h3>
        </OverviewContainer>
        
        <DetailContainer>
          <label>詳細</label>
          <div>{applicationCompany.detail}</div>
        </DetailContainer>

        <DetailContainer>
          <label>紹介理由</label>
          <div>{applicationCompany.reason}</div>
        </DetailContainer>

        <DetailContainer>
          <label>営業先担当者の名前</label>
          <div>{applicationCompany.contact_name}</div>
        </DetailContainer>

        <DetailContainer>
          <label>営業先担当者のメールアドレス</label>
          <div>{applicationCompany.contact_email}</div>
        </DetailContainer>

        <DetailContainer>
          <label>営業先担当者の電話番号</label>
          <div>{applicationCompany.phone_number}</div>
        </DetailContainer>

        <DetailContainer>
          <label>掲載者の承諾状態</label>
          <div>{applicationCompany.status_project}</div>
        </DetailContainer>

        <DetailContainer>
          <label>紹介された企業の承諾状態</label>
          <div>{applicationCompany.status_worker}</div>
        </DetailContainer>
      </TextDetailContainer>
      <Button
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="40px 0 20px 0"
        onClick={() => history.push(`/introducer/status/${applicationCompany.id}/edit`)}
      >
        編集
      </Button>

      <Button
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="0 0 20px 0"
        backgroundColor={color.red}
        color={color.white}
        onClick={deleteApplication}
      >
        取り消し
      </Button>

      <Button
        height="40px"
        width="90%"
        maxWidth="1080px"
        margin="0 0 20px 0"
        onClick={() => history.push('/introducer/status')}
      >
        紹介一覧に戻る
      </Button>
    </IntroducerStatusDetailPageContainer>
  )
}
