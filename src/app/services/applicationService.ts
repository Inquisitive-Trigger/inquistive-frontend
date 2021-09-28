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
  reason: string
  phone_number: string
  project: Project
  status_project: string
  status_worker: string
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

export const fetchApplicationCompany = async (id: string) => {
  const res = await axios.get(`/application_companies/${id}`)

  return res.data.applicationCompany as ApplicationCompany
}

export const approveApplicationComapny = async (id: string) => {
  const res = await axios.post(`/application_companies/${id}/project_approvals`)
  console.log(res.data)

  return res.data.applicationCompany as ApplicationCompany
}

export const deleteApplicationCompany = async (id: string) => {
  await axios.delete(`/application_companies/${id}`)
}
export const denyApplicationComapny = async (id: string) => {
  const res = await axios.post(`/application_companies/${id}/project_denials`)

  return res.data.applicationCompany as ApplicationCompany
}

export type ApplicationCompanyForm = {
  name: string
  detail: string
  reason: string
  contactName: string
  contactEmail: string
  phoneNumber: string
  projectId: number
}

export const applyCompany = async (applicationCompanyForm: ApplicationCompanyForm) => {
  const res = await axios.post('/application_companies', applicationCompanyForm)

  return res.data.application_companies
}

export const editApplicationCompany = async (application_id: number, applicationCompanyForm: ApplicationCompanyForm) => {
  await axios.put(`/application_companies/${application_id}`, applicationCompanyForm)
}