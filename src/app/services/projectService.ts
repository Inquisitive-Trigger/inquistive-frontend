import axios from 'axios'

axios.defaults.baseURL = 'http://3.113.26.48/'

export type Project = {
  id: number
  name: string
  status: string
  concept: string
  deadline: Date
  reward: string
  created_at: Date
  updated_at: Date
  category: string
  company_name: string
}

export const fetchProjectList = async() => {
  const res = await axios.get('/projects')

  return res.data.projects as Project[]
}

export const searchProjects = async (category: string) => {
  const res = await axios.get(`/projects/search?category=${category}`)

  return res.data.projects as Project[]
}
