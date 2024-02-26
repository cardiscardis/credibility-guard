'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useInkathon } from '@scio-labs/use-inkathon'
import inkathonLogo from 'public/images/inkathon-logo.png'
import { HiOutlineExternalLink } from 'react-icons/hi'

import { ConnectButton } from '@/components/web3/connect-button'

export const HomeTopBar: FC = () => {
  const title = 'Credibility Guard'
  const desc =
    'Credibility Guard leverages game theory to create a powerful weapon against fake newss'
  const githubHref = 'https://github.com/joengelh/credibility-guard'
  const deployHref = 'https://github.com/joengelh/credibility-guard#deployment-'
  const telegramHref = 'https://t.me/inkathon'
  return (
    <>
      {/* Logo & Title */}
      <div className="flex w-full flex-row items-center justify-between">
        <Link
          href={githubHref}
          target="_blank"
          // className="group"
          className="group flex cursor-pointer items-center gap-4 rounded-3xl px-3.5 py-1.5 transition-all hover:bg-gray-900"
        >
          <Image src={inkathonLogo} priority width={60} alt="ink!athon Logo" />
          <h1 className="text-[2.5rem] font-black tracking-tighter">{title}</h1>
        </Link>

        {/* Connect Wallet Button */}
        <ConnectButton />
      </div>
    </>
  )
}

/**
 * <Link
        href="https://www.youtube.com/watch?v=SoNLZfsd0mQ"
        className="absolute left-0 right-0 top-0 z-10 flex items-center justify-center whitespace-pre-wrap bg-zinc-900 px-2 py-3 text-center text-sm font-semibold text-white/75 hover:text-white"
      >
        <div className="mr-2 rounded bg-[#ee391c] px-1.5 py-0.5 text-xs font-bold text-white">
          <span className="mr-1 hidden sm:inline">VIDEO</span>▶
        </div>
        <div className="font-bold">
          <span className="hidden sm:inline">Watch the sub0 ink!athon workshop (45 min)</span>
          <span className="inline sm:hidden">sub0 ink!athon workshop</span>
        </div>
        <HiOutlineExternalLink className="ml-1.5" />
      </Link>
 */
