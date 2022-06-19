import React from 'react'
import * as fs from 'fs'
import * as path from 'path'
import * as _ from "lodash"
import Layout from '../../components/layout'
import Head from "next/head";
import Container from '../../components/container'

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
    <Layout>
      <Head>
        <title>{data.name} | CryptoWith</title>
      </Head>
      <Container>
        {data.name}
        <li>{data.unit}</li>
        <li>{data.description}</li>
        <li>{data.webSite}</li>
      </Container>
    </Layout>
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