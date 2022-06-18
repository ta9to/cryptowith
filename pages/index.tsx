import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import Link from 'next/link'

// const tabs = [
//   { name: 'Recent', href: '#', current: true },
//   { name: 'Most Liked', href: '#', current: false },
//   { name: 'Most Answers', href: '#', current: false },
// ]

// function classNames(...classes:any) {
//   return classes.filter(Boolean).join(' ')
// }

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>CryptoWith</title>
        </Head>
        <Container>
          {/*{allPosts.length > 0 && <MoreStories posts={allPosts} />}*/}
        {/*  <div className="px-4 sm:px-0">*/}
        {/*  <div className="sm:hidden">*/}
        {/*    <label htmlFor="question-tabs" className="sr-only">*/}
        {/*      Select a tab*/}
        {/*    </label>*/}
        {/*    <select*/}
        {/*        id="question-tabs"*/}
        {/*        className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"*/}
        {/*        defaultValue={tabs.find((tab) => tab.current).name}*/}
        {/*    >*/}
        {/*      {tabs.map((tab) => (*/}
        {/*          <option key={tab.name}>{tab.name}</option>*/}
        {/*      ))}*/}
        {/*    </select>*/}
        {/*  </div>*/}
        {/*  <div className="hidden sm:block">*/}
        {/*    <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">*/}
        {/*      {tabs.map((tab, tabIdx) => (*/}
        {/*          <a*/}
        {/*              key={tab.name}*/}
        {/*              href={tab.href}*/}
        {/*              aria-current={tab.current ? 'page' : undefined}*/}
        {/*              className={classNames(*/}
        {/*                  tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',*/}
        {/*                  tabIdx === 0 ? 'rounded-l-lg' : '',*/}
        {/*                  tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',*/}
        {/*                  'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'*/}
        {/*              )}*/}
        {/*          >*/}
        {/*            <span>{tab.name}</span>*/}
        {/*            <span*/}
        {/*                aria-hidden="true"*/}
        {/*                className={classNames(*/}
        {/*                    tab.current ? 'bg-rose-500' : 'bg-transparent',*/}
        {/*                    'absolute inset-x-0 bottom-0 h-0.5'*/}
        {/*                )}*/}
        {/*            />*/}
        {/*          </a>*/}
        {/*      ))}*/}
        {/*    </nav>*/}
        {/*  </div>*/}
        {/*</div>*/}
          <div>{/*<div className="mt-4">*/}
            <h1 className="sr-only">Recent questions</h1>
            <ul role="list" className="space-y-4">
              {allPosts.map((post) => (
                  <li key={post.slug} className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                    <Link href={`/posts/${post.slug}`}>
                      <a>
                        <article aria-labelledby={'question-title-' + post.slug}>
                      <div>
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={post.author.picture} alt="" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                {post.author.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                <time dateTime={post.date}>{post.date}</time>
                            </p>
                          </div>
                          {/*<div className="flex-shrink-0 self-center flex">*/}
                          {/*  <Menu as="div" className="relative inline-block text-left">*/}
                          {/*    <div>*/}
                          {/*      <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">*/}
                          {/*        <span className="sr-only">Open options</span>*/}
                          {/*        <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />*/}
                          {/*      </Menu.Button>*/}
                          {/*    </div>*/}

                          {/*    <Transition*/}
                          {/*        as={Fragment}*/}
                          {/*        enter="transition ease-out duration-100"*/}
                          {/*        enterFrom="transform opacity-0 scale-95"*/}
                          {/*        enterTo="transform opacity-100 scale-100"*/}
                          {/*        leave="transition ease-in duration-75"*/}
                          {/*        leaveFrom="transform opacity-100 scale-100"*/}
                          {/*        leaveTo="transform opacity-0 scale-95"*/}
                          {/*    >*/}
                          {/*      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                          {/*        <div className="py-1">*/}
                          {/*          <Menu.Item>*/}
                          {/*            {({ active }) => (*/}
                          {/*                <a*/}
                          {/*                    href="#"*/}
                          {/*                    className={classNames(*/}
                          {/*                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                          {/*                        'flex px-4 py-2 text-sm'*/}
                          {/*                    )}*/}
                          {/*                >*/}
                          {/*                  <StarIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                          {/*                  <span>Add to favorites</span>*/}
                          {/*                </a>*/}
                          {/*            )}*/}
                          {/*          </Menu.Item>*/}
                          {/*          <Menu.Item>*/}
                          {/*            {({ active }) => (*/}
                          {/*                <a*/}
                          {/*                    href="#"*/}
                          {/*                    className={classNames(*/}
                          {/*                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                          {/*                        'flex px-4 py-2 text-sm'*/}
                          {/*                    )}*/}
                          {/*                >*/}
                          {/*                  <CodeIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                          {/*                  <span>Embed</span>*/}
                          {/*                </a>*/}
                          {/*            )}*/}
                          {/*          </Menu.Item>*/}
                          {/*          <Menu.Item>*/}
                          {/*            {({ active }) => (*/}
                          {/*                <a*/}
                          {/*                    href="#"*/}
                          {/*                    className={classNames(*/}
                          {/*                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                          {/*                        'flex px-4 py-2 text-sm'*/}
                          {/*                    )}*/}
                          {/*                >*/}
                          {/*                  <FlagIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                          {/*                  <span>Report content</span>*/}
                          {/*                </a>*/}
                          {/*            )}*/}
                          {/*          </Menu.Item>*/}
                          {/*        </div>*/}
                          {/*      </Menu.Items>*/}
                          {/*    </Transition>*/}
                          {/*  </Menu>*/}
                          {/*</div>*/}
                        </div>
                        <h2 id={'question-title-' + post.slug} className="mt-4 text-base font-medium text-gray-900">
                          {post.title}
                        </h2>
                      </div>
                      <div
                          className="mt-2 text-sm text-gray-700 space-y-4"
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                      {/*<div className="mt-6 flex justify-between space-x-8">*/}
                      {/*  <div className="flex space-x-6">*/}
                      {/*      <span className="inline-flex items-center text-sm">*/}
                      {/*        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">*/}
                      {/*          <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />*/}
                      {/*          <span className="font-medium text-gray-900">{question.likes}</span>*/}
                      {/*          <span className="sr-only">likes</span>*/}
                      {/*        </button>*/}
                      {/*      </span>*/}
                      {/*    <span className="inline-flex items-center text-sm">*/}
                      {/*        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">*/}
                      {/*          <ChatAltIcon className="h-5 w-5" aria-hidden="true" />*/}
                      {/*          <span className="font-medium text-gray-900">{question.replies}</span>*/}
                      {/*          <span className="sr-only">replies</span>*/}
                      {/*        </button>*/}
                      {/*      </span>*/}
                      {/*    <span className="inline-flex items-center text-sm">*/}
                      {/*        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">*/}
                      {/*          <EyeIcon className="h-5 w-5" aria-hidden="true" />*/}
                      {/*          <span className="font-medium text-gray-900">{question.views}</span>*/}
                      {/*          <span className="sr-only">views</span>*/}
                      {/*        </button>*/}
                      {/*      </span>*/}
                      {/*  </div>*/}
                      {/*  <div className="flex text-sm">*/}
                      {/*      <span className="inline-flex items-center text-sm">*/}
                      {/*        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">*/}
                      {/*          <ShareIcon className="h-5 w-5" aria-hidden="true" />*/}
                      {/*          <span className="font-medium text-gray-900">Share</span>*/}
                      {/*        </button>*/}
                      {/*      </span>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                    </article>

                      </a>
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
