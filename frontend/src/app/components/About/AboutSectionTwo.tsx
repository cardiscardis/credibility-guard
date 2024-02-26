import Image from 'next/image'

import imageDark2 from 'public/images/about-image-2-dark.svg'
import aboutImage2 from 'public/images/about-image-2.svg'

const AboutSectionTwo = () => {
  return (
    <>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src={aboutImage2}
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src={imageDark2}
                  alt="about image"
                  fill
                  className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Game Theory
                  </h3>
                  <p className="text-body-color text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                    Credibility Guard leverages game theory to create a powerful weapon against fake
                    news. In this decentralized app on Aleph Zero, users engage in a strategic dance
                    of prediction and validation.
                  </p>
                </div>
                <div className="mb-9">
                  <p className="text-body-color text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                    The game begins with individuals submitting news they suspect to be fake,
                    triggering a prediction market. Credibility Guard, driven by game theory,
                    transforms the fight against fake news into a strategic and rewarding endeavor,
                    where every move contributes to a more trustworthy information ecosystem.
                  </p>
                </div>
                {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  The uploader
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  ...Entering the game by paying initial liquidity and a small fee, stands to profit as more users engage. This dynamic creates a compelling interplay of incentives, where honesty is not just encouraged but economically enforced.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bettors
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  ...Skilled in forecasting the future, reap rewards based on collective predictions. The game unfolds as participants actively contribute to a more truthful digital landscape, earning profits by aligning with reality.
                </p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Game Theory
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Credibility Guard leverages game theory to create a powerful weapon against fake news. In this decentralized app on Aleph Zero, users engage in a strategic dance of prediction and validation.

The game begins with individuals submitting news they suspect to be fake, triggering a prediction market.
Credibility Guard, driven by game theory, transforms the fight against fake news into a strategic and rewarding endeavor, where every move contributes to a more trustworthy information ecosystem.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bettors
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  ...Armed with market-adjusted rates, strategically place their stakes on the news authenticity. Simultaneously, voters, economically incentivized by staking platform tokens, cast their ballots, each move impacting the token value
                </p>
              </div> */}
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    The uploader
                  </h3>
                  <p className="text-body-color text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                    ...Entering the game by paying initial liquidity and a small fee, stands to
                    profit as more users engage. This dynamic creates a compelling interplay of
                    incentives, where honesty is not just encouraged but economically enforced.
                  </p>
                </div>
                <div className="mb-1 mt-4">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Bettors
                  </h3>
                  <p className="text-body-color text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                    ...Armed with market-adjusted rates, strategically place their stakes on the
                    news authenticity. Simultaneously, voters, economically incentivized by staking
                    platform tokens, cast their ballots, each move impacting the token value
                    ...Skilled in forecasting the future, reap rewards based on collective
                    predictions. The game unfolds as participants actively contribute to a more
                    truthful digital landscape, earning profits by aligning with reality.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src={aboutImage2}
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src={imageDark2}
                  alt="about image"
                  fill
                  className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSectionTwo
