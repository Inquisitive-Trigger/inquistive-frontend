import axios from "axios"
import { Project } from "./projectService"
import { User } from "./userService"

axios.defaults.baseURL = 'http://3.113.26.48/'

export type ApplicationCompany = {
  id: number
  name: string
  detail: string
  reason: string
  contact_name: string
  contact_email: string
  phone_number: string
  status_worker: string
  status_project: string
  created_at: Date
  updated_at: Date
  project: Project
  user: User
}

