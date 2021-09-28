import axios from 'axios'
import { createEmptyProject, Project } from './projectService'
import { createEmptyUser, User } from './userService'

axios.defaults.baseURL = 'http://3.113.26.48/'

export type ApplicationCompany = {
  id: number
  name: string
  author: User
  contact_email: string
  contact_name: string
  created_at: Date
  detail: string
  phone_number: string
  project: Project
  status: string
}

export const createEmptyApplicationCompany = () => ({
  id: 999,
  name: '',
  author: createEmptyUser(),
  contact_email: '',
  contact_name: '',
  created_at: new Date(),
  detail: '',
  phone_number: '',
  project: createEmptyProject()
} as ApplicationCompany)

export const fetchApplicationCompanies = async () => {
  const res = await axios.get('/application_companies')

  return res.data.applicationCompanies as ApplicationCompany[]
}
