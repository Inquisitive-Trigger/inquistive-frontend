import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components'
import { color } from '../../utils/color'
import { useHistory, useParams } from 'react-router'
import { CATEGORY_LABEL } from '../../utils/category'
import { Project } from '../../app/services/projectService'
import { Card } from '../atom/Card'

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

type iIntroducerSearchPage = {
  category: keyof typeof CATEGORY_LABEL
  projects: Project[]
}

export const IntroducerSearchPage: React.FC<iIntroducerSearchPage> = ({
  category,
  projects
}) => {
  const history = useHistory()

  return (
    <IntroducerSearchContainer>
      <SectionHeader>案件業種：{CATEGORY_LABEL[category]}</SectionHeader>
      <CardContainer>
        {projects.map(project => (
          <Card key={project.id} onClick={() => history.push(`/introducer/project/detail/${project.id}`)}>
            <p className="company-name">{project.company_name}</p>
            <h3 className="project-title">{project.name}</h3>
            <p className="concept">{project.concept}</p>
          </Card>
        ))}
      </CardContainer>
      
    </IntroducerSearchContainer>
  )
}
