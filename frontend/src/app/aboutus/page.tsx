import { Metadata } from 'next'

import AboutSectionOne from '../components/About/AboutSectionOne'
import AboutSectionTwo from '../components/About/AboutSectionTwo'
import Breadcrumb from '../components/About/Breadcrumb'
import Footer from '../components/footer'
import Header2 from '../components/header2'
import { HomeTopBar } from '../components/home-top-bar'

export const metadata: Metadata = {
  title: 'About Page | Free Next.js Template for Startup and SaaS',
  description: 'This is About Page for Startup Nextjs Template',
  // other metadata
}

const AboutPage = () => {
  return (
    <>
      <HomeTopBar />
      <Header2 />
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Footer />
    </>
  )
}

export default AboutPage
