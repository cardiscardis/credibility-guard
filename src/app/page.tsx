'use client'

import { useEffect } from 'react'

import { useInkathon } from '@scio-labs/use-inkathon'
import { toast } from 'react-hot-toast'

import { HomeTopBar } from './components/home-top-bar'
import { HomePageTitle } from '@/app/components/home-page-title'
import { ChainInfo } from '@/components/web3/chain-info'
// import { ConnectButton } from '@/components/web3/connect-button'
// import { GreeterContractInteractions } from '@/components/web3/greeter-contract-interactions'
import { News } from '@/components/web3/news'

export default function HomePage() {
  // Display `useInkathon` error messages (optional)
  const { error } = useInkathon()
  useEffect(() => {
    if (!error) return
    toast.error(error.message)
  }, [error])

  return (
    <>
      <div className="container relative flex grow flex-col items-center justify-center py-10">
        {/* Top Bar */}
        <HomeTopBar />

        {/* Title */}
        <HomePageTitle />

        {/* Connect Wallet Button */}
        {/* <ConnectButton /> */}

        <div className="mt-12 flex w-full flex-wrap items-start justify-center gap-4">
          {/* Chain Metadata Information */}
          <ChainInfo />

          {/* Greeter Read/Write Contract Interactions */}
          {/* <GreeterContractInteractions /> */}
          <News />          
        </div>
      </div>
    </>
  )
}
