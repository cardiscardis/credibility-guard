import Image from 'next/image'
import Link from 'next/link'
import { AnchorHTMLAttributes, FC } from 'react'

import { useInkathon } from '@scio-labs/use-inkathon'
import { toast } from 'react-hot-toast'

import githubIcon from 'public/icons/github-button.svg'
import telegramIcon from 'public/icons/telegram-button.svg'
import vercelIcon from 'public/icons/vercel-button.svg'
import inkathonLogo from 'public/images/inkathon-logo.png'
import { ConnectButton } from '../../components/web3/connect-button'
import { cn } from '@/utils/cn'

interface StyledIconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
}

const StyledIconLink: React.FC<StyledIconLinkProps> = ({ className, children, ...rest }) => (
  <Link
    className={cn(
      'group opacity-90 transition-all hover:-translate-y-0.5 hover:opacity-100',
      className,
    )}
    {...rest}
  >
    {children}
  </Link>
)

export const HomePageTitle: FC = () => {
  const title = 'Credibility Guard'
  const desc = 'Credibility Guard leverages game theory to create a powerful weapon against fake newss'
  const githubHref = 'https://github.com/joengelh/credibility-guard'
  const deployHref = 'https://github.com/joengelh/credibility-guard#deployment-'
  const telegramHref = 'https://t.me/inkathon'

  return (
    <>
      <div className="flex flex-col items-center text-center font-mono">
        {/* Logo & Title */}
        <div className='flex flex-row w-full items-center justify-between'>
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

        {/* Tagline & Lincks */}
        <p className="mb-2 mt-4 text-gray-400">{desc}</p>
        <p className="mb-8 text-xs text-gray-600">
          Credibility Guard, our decentralized app on Aleph Zero, tackles the fake news dilemma by engaging users in a dynamic truth-seeking process. Users upload suspicious news, initiating a prediction market where bettors stake on its authenticity. Voters, economically incentivized to uphold truth, stake platform tokens. The news uploader pays fees, profiting as more users engage.

Bettors enjoy market-adjusted rates and payouts based on collective predictions, creating a system where accuracy is financially rewarded. Credibility Guard transforms users into guardians of credibility, fostering a transparent information landscape and incentivizing active participation in the fight against misinformation.
          .
        </p>

        {/* Github & Vercel Buttons */}
        <div className="flex select-none space-x-2">
          <StyledIconLink href={githubHref} target="_blank">
            <Image src={githubIcon} priority height={32} alt="Github Repository" />
          </StyledIconLink>
          <StyledIconLink href={deployHref} target="_blank">
            <Image src={vercelIcon} priority height={32} alt="Deploy with Vercel" />
          </StyledIconLink>
          <StyledIconLink href={telegramHref} target="_blank">
            <Image src={telegramIcon} priority height={32} alt="Telegram Group" />
          </StyledIconLink>
        </div>

        <div className="my-14 h-[1px] w-[5rem] max-w-full bg-gray-800" />
      </div>
    </>
  )
}
