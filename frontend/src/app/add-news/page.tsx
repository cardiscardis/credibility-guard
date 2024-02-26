'use client'

import Head from 'next/head'
import { useState } from 'react'

import { toast } from 'react-hot-toast'

import Footer from '../components/footer'
import Header2 from '../components/header2'
import { HomeTopBar } from '../components/home-top-bar'

const initialNews = [
  {
    id: 0,
    nameInput: 'Malcolm Lockyer',
    emailInput: 'malcomlocker@gmail.com',
    newsInput: 'The Sliding movie won 4 grammies for the Mr. Bones character',
    positive: 150,
    negative: 50,
    isClaimed: false,
    isVoted: false,
  },
  {
    id: 1,
    nameInput: 'Angel Woman',
    emailInput: 'angelwoman@yahoo.com',
    newsInput: 'The Eagles can sour into escape velocity and vanishes',
    positive: 102,
    negative: 250,
    isClaimed: false,
    isVoted: false,
  },
  {
    id: 2,
    nameInput: 'Shining Star',
    emailInput: 'shiningstar@gmail.com',
    newsInput: 'Earth, Wind, and Fire are present in all matter and can be scientifically proven',
    positive: 8,
    negative: 24,
    isClaimed: false,
    isVoted: false,
  },
]

export default function Contact() {
  const [news, setNews] = useState(initialNews)
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [newsInput, setNewsInput] = useState('')

  const onChange = (e: any) => {
    console.log(e.target.name, e.target.value)
    if (e.target.name === 'name') setNameInput(e.target.value)
    if (e.target.name === 'email') setEmailInput(e.target.value)
    if (e.target.name === 'message') setNewsInput(e.target.value)
  }

  const onUpload = () => {
    if (!nameInput && !emailInput && !newsInput) return
    const currentTotalNews: any = [...news]
    const len = currentTotalNews.length
    const currentNews: any = {
      nameInput,
      emailInput,
      newsInput,
      id: len,
      positive: 0,
      negative: 0,
      isClaimed: false,
      isVoted: false,
    }
    currentTotalNews.push(currentNews)
    setNews(currentTotalNews)
    setNameInput('')
    setEmailInput('')
    setNewsInput('')
    toast.success('News added successfully!')
  }

  const voteTrue = (item: any) => {
    const currentTotalNews: any = [...news]
    const itemCopy = { ...item }
    console.log('before', itemCopy)
    itemCopy.positive = Number(itemCopy.positive) + 1
    itemCopy.isVoted = true
    console.log('after', itemCopy)
    currentTotalNews[item.id] = itemCopy
    setNews(currentTotalNews)
  }

  const voteFalse = (item: any) => {
    const currentTotalNews: any = [...news]
    const itemCopy = { ...item }
    console.log('before', itemCopy)
    itemCopy.negative = Number(itemCopy.negative) + 1
    itemCopy.isVoted = true
    console.log('after', itemCopy)
    currentTotalNews[item.id] = itemCopy
    setNews(currentTotalNews)
  }

  const claimReward = (item: any) => {
    const currentTotalNews: any = [...news]
    item.isClaimed = true
    currentTotalNews[item.id] = item
    setNews(currentTotalNews)
  }

  return (
    <div className="bg-black  text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTopBar />
      <Header2 />
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto px-5 pb-16 pt-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-semibold text-white sm:text-5xl">
              Get Started
            </h1>
            <p className="mx-auto text-base font-semibold leading-relaxed lg:w-2/3">
              Upload news here for betting, voting and reward claiming...
            </p>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label htmlFor="name" className="text-sm font-semibold leading-7 text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded border border-gray-300 bg-black bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    onChange={onChange}
                    value={nameInput}
                  ></input>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label htmlFor="email" className="text-sm font-semibold leading-7 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={onChange}
                    className="w-full rounded border border-gray-300 bg-black bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    value={emailInput}
                  ></input>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label htmlFor="message" className="text-sm font-semibold leading-7 text-white">
                    News
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={onChange}
                    className="h-32 w-full resize-none rounded border border-gray-300 bg-black bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    value={newsInput}
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  onClick={onUpload}
                  className="mx-auto flex rounded border-0 bg-white px-8 py-2 text-lg text-black"
                >
                  Upload
                </button>
              </div>
              <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
                <a className="text-indigo-500">contact@credibilityguard.com</a>
                <p className="my-5 leading-normal">Mountain View, California, United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto px-5 pb-16 pt-8">
          <div className="mb-12 flex w-full flex-col text-center">
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Uploader Name</th>
                  <th>Uploader Email</th>
                  <th>News</th>
                  <th>No of Votes</th>
                  <th>No of true votes</th>
                  <th>No of false votes</th>
                  <th>Status</th>
                  <th>Vote true</th>
                  <th>Vote false</th>
                  <th>Claim</th>
                </tr>
              </thead>
              <tbody>
                {news && news.length
                  ? news.map((n, i) => (
                      <tr key={'news' + i}>
                        <td className="mx-auto">{n.nameInput}</td>
                        <td className="mx-auto">{n.emailInput}</td>
                        <td className="mx-auto">{n.newsInput}</td>
                        <td className="mx-auto">{Number(n.positive) + Number(n.negative)}</td>
                        <td className="mx-auto">{n.positive}</td>
                        <td className="mx-auto">{n.negative}</td>
                        <td>
                          <p className="mx-auto w-32 rounded border-0 bg-yellow-200 px-2 py-2 text-lg text-black">
                            {n.isVoted ? 'Voted' : 'Not Voted'}
                          </p>
                        </td>
                        <td>
                          <button
                            onClick={() => voteTrue(n)}
                            className="mx-1 flex rounded border-0 bg-green-600 px-8 py-2 text-lg text-black"
                            disabled={n.isVoted}
                          >
                            True
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => voteFalse(n)}
                            className="mx-1 flex rounded border-0 bg-red-600 px-8 py-2 text-lg text-black"
                            disabled={n.isVoted}
                          >
                            False
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => claimReward(n)}
                            className="mx-1 flex rounded border-0 bg-white px-8 py-2 text-lg text-black"
                            disabled={n.isClaimed}
                          >
                            {n.isClaimed ? 'Claimed' : 'Claim'}
                          </button>
                        </td>
                      </tr>
                    ))
                  : null}
                {/* <tr>
      <td>Angel Woman</td>
      <td>angelwoman@yahoo.com</td>
      <td>The Eagles can sour into escape velocity and vanishes</td>
      <td>352</td>
      <td>102</td>
      <td>250</td>
      <td><button className="flex mx-auto text-black bg-green-600 border-0 py-2 px-8 rounded text-lg">True</button></td>
      <td><button className="flex mx-auto text-black bg-red-600 border-0 py-2 px-8 rounded text-lg">False</button></td>
      <td><button className="flex mx-auto text-black bg-white border-0 py-2 px-8 rounded text-lg">Claim</button></td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>shiningstar@gmail.com</td>
      <td>Earth, Wind, and Fire are present in all matter and can be scientifically proven</td>
      <td>32</td>
      <td>8</td>
      <td>24</td>
      <td><button className="flex mx-auto text-black bg-green-600 border-0 py-2 px-8 rounded text-lg">True</button></td>
      <td><button className="flex mx-auto text-black bg-red-600 border-0 py-2 px-8 rounded text-lg">False</button></td>
      <td><button className="flex mx-auto text-black bg-white border-0 py-2 px-8 rounded text-lg">Claim</button></td>
    </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <br />
      <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center"></div>

      <Footer />
    </div>
  )
}

export function TableStripped() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    First
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Last
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td className="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>
                <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td colSpan={2} className="whitespace-nowrap px-6 py-4 text-center">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
