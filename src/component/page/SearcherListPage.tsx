import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { FcPlus } from 'react-icons/fc'
import { Card } from '../atom/Card'
import { Project } from '../../app/services/projectService'
import { useHistory } from 'react-router'

const IntroducerSearchContainer = styled.div`
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

const PlusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  & > svg {
    font-size: 20px;
    margin-right: 5px;
  }
`

type iSearcherListPage = {
  projects: Project[]
}

export const SearcherListPage: React.FC<iSearcherListPage> = ({
  projects
}) => {
  const history = useHistory()

  return (
    <IntroducerSearchContainer>
      <SectionHeader>実行中案件</SectionHeader>
      <CardContainer>
        {projects.map((project, index) => (
          <Card
            key={project.id}
            margin="8px 20px"
            animationDelay={index}
            onClick={() => history.push(`/searcher/project/${project.id}`)}
          >
            <p className="company-name">{project.company_name}</p>
            <h3 className="project-title">{project.name}</h3>
            <p className="concept">{project.concept}</p>
          </Card>
        ))}
      </CardContainer>

      <PlusButton onClick={() => history.push("/searcher/create")}>
        <FcPlus/> 新規案件
      </PlusButton>
      
    </IntroducerSearchContainer>
  )
}
