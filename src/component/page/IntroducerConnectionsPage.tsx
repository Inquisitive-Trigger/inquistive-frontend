import React from 'react'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { Card } from '../atom/Card'
import { User } from '../../app/services/userService'
import { useHistory } from 'react-router'
import { BsFillChatDotsFill } from 'react-icons/bs'


const IntroducerConnectionsContainer = styled.div`
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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  max-width: 1080px;
`

const CardContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const UserNameH3 = styled.h3`
  font-weight: 900;
  font-size: 24px;
`

const demoUsers = [
  { id: 1, name: "matsumoto" },
  { id: 2, name: "matsumoto" },
  { id: 3, name: "matsumoto" },
  { id: 4, name: "matsumoto" },
  { id: 5, name: "matsumoto" },
  { id: 6, name: "matsumoto" },
  { id: 7, name: "matsumoto" },
  { id: 8, name: "matsumoto" },
]

type iIntroducerConnectionsPage  ={
  users: User[]
}

export const IntroducerConnectionsPage: React.FC<iIntroducerConnectionsPage> = ({
  users
}) => {
  const history = useHistory()

  return (
    <IntroducerConnectionsContainer>
      <SectionHeader>つながりのある企業一覧</SectionHeader>
      <CardContainer>
        {users.map(user => (
          <Card
            key={user.id}
            margin="8px 20px"
          >
            <CardContentContainer>
              <UserNameH3>{user.name}</UserNameH3>
              <BsFillChatDotsFill size={"2em"} />
            </CardContentContainer>
          </Card>
        ))}
      </CardContainer>
    </IntroducerConnectionsContainer>
  )
}
