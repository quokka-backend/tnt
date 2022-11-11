import React from 'react'
import Home from '../src/app/screens/Home'
import getHomeQueryParams, {
  getProjectsQueryParams,
} from '../src/utils/getQueryParams'

const Index = ({ data, project }) => <Home data={data} project={project} />

export default Index

export async function getServerSideProps() {
  const url = process.env.LOCAL_URL
  let data = {}
  let project = {}
  try {
    const res = await fetch(`${url}api/landing-page?${getHomeQueryParams}`)
    const projects = await fetch(`${url}api/projects?${getProjectsQueryParams}`)
    if (res) {
      data = await res.json()
    }
    if (projects) {
      project = await projects.json()
    }
  } catch (error) {
    console.log(error)
    data = {}
  }

  return {
    props: {
      data,
      project,
    },
  }
}
