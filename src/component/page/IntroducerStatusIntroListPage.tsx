import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { FcPlus } from 'react-icons/fc'
import { Card } from '../atom/Card'

const datas = [{
  key: 999,
  name: '株式会社○○',
  appeal: 'この会社はすごくて、とりあえずすごい！',
  status: 'approved'
}]

for (let i = 0; i < 3; i++) {
  datas.push({
    key: i,
    name: '株式会社○○',
    appeal: 'この会社はすごくて、とりあえずすごい！',
    status: i % 3 === 0 ? 'approved' : i % 2 === 0 ? 'pending' : 'rejected'
  })
}

const IntroducerSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1080px;
`

const StatusText = styled.p<{ status: string }>`
  color: ${({ status }) => status === 'approved' ? color.lightGreen : status === 'rejected' ? color.red : color.yellow};
  font-weight: 700;
`

type iIntroducerStatusIntroListPage = {
}

export const IntroducerStatusIntroListPage: React.FC<iIntroducerStatusIntroListPage> = ({
}) => {

  const generateStatus = React.useCallback(
    (status: string) => {
      if (status === 'approved') { return '承諾' }
      if (status === 'rejected') { return '拒否' }

      return '返答待ち'
    },
    []
  )

  return (
    <IntroducerSearchContainer>
      <CardContainer>
        {datas.map(data => (
          <Card key={data.key} margin="8px 20px">
            <StatusText status={data.status}>{generateStatus(data.status)}</StatusText>
            <h3 className="project-title">{data.name}</h3>
            <p className="concept">{data.appeal}</p>
          </Card>
        ))}
      </CardContainer>
    </IntroducerSearchContainer>
  )
}
