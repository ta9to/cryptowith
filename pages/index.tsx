import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Crypto from '../types/crypto'
import {CashIcon, ChevronRightIcon} from "@heroicons/react/solid";
import {ScaleIcon} from "@heroicons/react/outline";

type Props = {
    allCryptos: Crypto[]
}

const transactions = [
    {
        id: 1,
        name: 'Payment to Molly Sanders',
        href: '#',
        amount: '$20,000',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
    },
    // More transactions...
]

const statusStyles = {
    success: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800',
}

const cards = [
    { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
    // More items...
]

function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
}

const Index = ({ allCryptos }: Props) => {
    return (
        <>
            <Layout>
                <Head>
                    <title>仮想通貨 | CryptoWith</title>
                </Head>
                <Container>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
                        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Card */}
                            {cards.map((card) => (
                                <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
                                    <div className="p-5">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">{card.name}</dt>
                                                    <dd>
                                                        <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-5 py-3">
                                        <div className="text-sm">
                                            <a href={card.href} className="font-medium text-rose-700 hover:text-cyan-900">
                                                View all
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
                        仮想通貨
                    </h2>

                    {/* Activity list (smallest breakpoint only) */}
                    <div className="shadow sm:hidden">
                        <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                            {allCryptos.map((crypto) => (
                                <li key={crypto.name}>
                                    <span className="block px-4 py-4 bg-white hover:bg-gray-50">
                        <span className="flex items-center space-x-4">
                          <span className="flex-1 flex space-x-2 truncate">
                            <span className="flex flex-col text-gray-500 text-sm truncate">
                                                    <span className="flex items-center">
                                                        <span className="h-10 w-10 flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" src={crypto.icon} alt="" />
                                                        </span>
                                                        <span className="ml-4">
                                                            <span className="font-medium text-gray-900"><a href={`/projects/${crypto.name}`}>{crypto.name}</a></span>
                                                            <span className="text-gray-500">{crypto.unit}</span>
                                                        </span>
                                                    </span>
                            </span>
                          </span>
                          <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <nav
                            className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
                            aria-label="Pagination"
                        >
                            <div className="flex-1 flex justify-between">
                                <a
                                    href="#"
                                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                                >
                                    Previous
                                </a>
                                <a
                                    href="#"
                                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                                >
                                    Next
                                </a>
                            </div>
                        </nav>
                    </div>

                    {/* Activity table (small breakpoint and up) */}
                    <div className="hidden sm:block">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col mt-2">
                                <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead>
                                        <tr>
                                            <th
                                                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                scope="col"
                                            >
                                                名前
                                            </th>
                                            <th
                                                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                scope="col"
                                            >
                                                説明
                                            </th>
                                            <th
                                                className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                scope="col"
                                            >
                                                値段
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        {allCryptos.map((crypto) => (
                                            <tr key={crypto.name} className="bg-white">
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" src={crypto.icon} alt="" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="font-medium text-gray-900"><a href={`/projects/${crypto.name}`}>{crypto.name}</a></div>
                                                            <div className="text-gray-500">{crypto.unit}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
                                                    <span className="text-gray-900 font-medium">{crypto.description}</span>
                                                </td>
                                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                    <span className="text-gray-900 font-medium">{crypto.unit_price}</span>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    {/* Pagination */}
                                    <nav
                                        className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                        aria-label="Pagination"
                                    >
                                        <div className="hidden sm:block">
                                            <p className="text-sm text-gray-700">
                                                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                                <span className="font-medium">20</span> results
                                            </p>
                                        </div>
                                        <div className="flex-1 flex justify-between sm:justify-end">
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                            >
                                                Previous
                                            </a>
                                            <a
                                                href="#"
                                                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                            >
                                                Next
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export default Index

export const getStaticProps = async () => {
    const allCryptos = [
        {
            unit: 'BTC',
            name: 'bitcoin',
            icon: '/assets/cryptos/Bitcoin.png',
            description: 'Bitcoin is an experimental digital currency that enables instant payments to anyone, anywhere in the world.',
            public_youtube_url: 'https://youtu.be/Rtrqb-FgKCs',
            unit_price: '¥2,502,365.63',
            total_market_price: '¥47,466,745,510,992',
        },
        {
            unit: 'ETH',
            name: 'ethereum',
            icon: '/assets/cryptos/Ethereum.png',
            description: 'Ethereum is a global, open-source platform for decentralized applications.',
            public_youtube_url: 'https://youtu.be/j23HnORQXvs',
            unit_price: '¥2,502,365.63',
            total_market_price: '¥47,466,745,510,992',
        },
        {
            unit: 'DOT',
            name: 'polkadot',
            icon: '/assets/cryptos/Polkadot.png',
            description: 'Polkadot empowers blockchain networks to work together under the protection of shared security.',
            public_youtube_url: 'https://youtu.be/s75_OZ7vtk8',
            unit_price: '¥2,502,365.63',
            total_market_price: '¥47,466,745,510,992',
        },
    ]
    return {
        props: { allCryptos },
    }
}
