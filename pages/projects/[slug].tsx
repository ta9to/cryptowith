import React from 'react'
import * as fs from 'fs'
import * as path from 'path'
import * as _ from "lodash"
import { checkMarkdownExist, getProjectsBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import PostBody from '../../components/post-body'
import YouTube from 'react-youtube';
import Layout from '../../components/layout'
import Head from "next/head";
import Container from '../../components/container'

type projectPropsType = {
  data : {
    name : string,
    unit : string,
    description : string,
    webSite : string,
    icon : string,
    features : string[],
    officialVideoId : string
  },
  content : string
}

const Project = ({ data, content } : projectPropsType) => {
  return (
    <Layout>
      <Container>
        <Head>
          <title>{data.name} | CryptoWith</title>
        </Head>
        <div>
          <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
                <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
                  <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Very proud to introduce</p>

                  <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">{data.name} / ({data.unit})</h1>

                  <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">{data.description}</p>

                  <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                    <a href={data.webSite} className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">公式webサイト</a>

                    <a href="#" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Take tour</a>
                  </div>
                </div>
                  <YouTube videoId={data.officialVideoId} className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg" iframeClassName="w-full h-full object-cover object-center" />
              </section>
            </div>
          </div>

          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <div className="mb-10 md:mb-16">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">{data.name}チェーンの主な特徴</h2>

                <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                {
                  data.features.map((feature, index)=>{
                    return (
                      <div className="flex bg-gray-50 border rounded-lg divide-x" key={index}>
                      <div className="flex items-center text-indigo-500 p-2 md:p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
              
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{feature}</h3>
                      </div>
                    </div>    
                    )
                  })
                }
              </div>
            </div>
          </div>

          {
            content &&
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <PostBody content={content} />
            </div>
          }
        </div>
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
  const content = await getMarkdownContent(params.slug)
  return {
    props: {
      data,
      content
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
          slug: chain.slug,
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

const getMarkdownContent = async (slug : string) => {
  if (checkMarkdownExist(slug)) {
    const project = getProjectsBySlug(slug, [
      'title',
      'date',
      'slug',
      'author',
      'content',
      'ogImage',
      'coverImage',
    ])
    const content = await markdownToHtml(project.content || '')
    return content
  }
  return null
}