import React from 'react'
import * as fs from 'fs'
import * as path from 'path'
import * as _ from "lodash"

type projectPropsType = {
  data : {
    name : string,
    unit : string,
    description : string,
    webSite : string
  }
}

const Project = ({ data } : projectPropsType) => {
  return (
    <div>
      {data.name}
      <li>{data.unit}</li>
      <li>{data.description}</li>
      <li>{data.webSite}</li>
    </div>
  )
}

export default Project

type staticPropsType = {
  params: {
    slug: string,
  },
}

export async function getStaticProps({ params } : staticPropsType) {
  const data = getDataBySlug(params.slug)
  return {
    props: {
      data
    },
  }
}

export async function getStaticPaths() {
  const jsonPath = path.join(process.cwd(), 'data', 'blockchain.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const chains = JSON.parse(jsonText)
  return {
    paths: _.map(chains, function(chain){
      return {
        params: {
          slug: chain.name,
        },
      } 
    }),
    fallback: false,
  }
}

const getDataBySlug = (slug : string) => {
  const jsonPath = path.join(process.cwd(), 'data', 'blockchain.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const chains = JSON.parse(jsonText)

  return chains[slug]
}