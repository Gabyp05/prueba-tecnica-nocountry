export interface Member {
  id: number
  name: string
  role: string
  location: string
  photo: string
}

export interface Insight {
  type: string
  text: string
}

export interface Team {
  id: number
  name: string
  members: Member[]
  insights: Insight[]
}
