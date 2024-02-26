import Image from 'next/image'

import topLogo from 'public/images/pngegg.png'

export default function IndexPage() {
  return (
    <div className="relative h-screen w-screen bg-gradient-to-tr from-red-500 to-purple-400">
      <img
        className="absolute inset-0 h-full w-full object-cover mix-blend-multiply brightness-50 filter"
        alt="main background image"
        src="https://source.unsplash.com/random"
      />
      <div className="absolute inset-x-0 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 pt-24 text-center sm:px-6 md:pt-32">
        <Image
          src={topLogo}
          priority
          width={260}
          alt="TopLogo"
          layout="fixed"
          className="rounded-full"
        />
        <div className="py-8 md:py-16">
          <h1 className="font-primary mb-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl md:leading-tight">
            Our decentralized app on Aleph Zero, tackles the fake news dilemma{' '}
          </h1>
          <p className="font-secondary text-palette-light mb-8 text-base md:text-lg lg:text-xl">
            Credibility Guard transforms users into guardians of credibility, fostering a
            transparent information landscape and incentivizing active participation in the fight
            against misinformation.
          </p>
          {/* <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "} */}
          <a
            className="mr-2 mt-2 inline-flex transform items-center rounded-lg border bg-transparent bg-white px-14 py-3 font-medium text-black transition duration-500 ease-in-out md:mr-4"
            href="/"
          >
            <span className="justify-center">Get Started</span>
          </a>
          <a
            className="mt-2 rounded-md border border-gray-600 bg-black px-14 py-3 font-semibold text-gray-800 hover:border-gray-700"
            href="/"
          >
            <span className="justify-center">Learn More</span>
          </a>
        </div>
      </div>
    </div>
  )
}

/**
 * <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
 */

/**
 * {subscribed ? (
          <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
            You have subscribed!
          </h1>
        ) : (
 */
