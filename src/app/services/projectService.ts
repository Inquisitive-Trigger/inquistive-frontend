import axios from 'axios'

axios.defaults.baseURL = 'http://3.113.26.48/'

export type Project = {
  id: number
  name: string
  status: string
  concept: string
  deadline?: Date
  reward: string
  created_at: Date
  updated_at: Date
  category: string
  company_name: string
  wish_person: string
  appeal: string
  company_info: string
  company_url: string
}

export const createEmptyProject = () => ({
  id: 999,
  name: '',
  status: '',
  concept: '',
  deadline: new Date(),
  reward: '',
  created_at: new Date(),
  updated_at: new Date(),
  category: '',
  company_name: '',
  wish_person: '',
  appeal: '',
  company_info: '',
  company_url: ''
}) 

export const fetchProjectList = async() => {
  const res = await axios.get('/projects')

  return res.data.projects as Project[]
}

export const fetchProjectDetail = async(id: number) => {
  const res = await axios.get(`/projects/${id}`)

  return res.data.project as Project
}

export const searchProjects = async (category: string) => {
  const res = await axios.get(`/projects/search?category=${category}`)

  return res.data.projects as Project[]
}

export const createProject = async(project: Project) => {
  const res = await axios.post('/projects/', {
    name: project.name,
    concept: project.concept,
    appeal: project.appeal,
    wish_person: project.wish_person,
    reward: project.reward,
    company_info: project.company_info,
    company_url: project.company_url,
    category: project.category
  })

  return res.data.project as Project
}

export const fetchProject = async (id: string) => {
  const res = await axios.get(`/projects/${id}`)

  return res.data.project as Project
}

export const fetchApplicationFromProject = async(id: string) => {
  const res = await axios.get(`/projects/${id}/application_companies`)

  return res.data.applicationCompanies
}
