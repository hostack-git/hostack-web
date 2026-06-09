import useBreakpoint from '../hooks/useBreakpoint'
import Nav from './Nav'
import Hero from './Hero'
import Problem from './Problem'
import HowItWorks from './HowItWorks'
import CaseStudy from './CaseStudy'
import WhatYouGet from './WhatYouGet'
import WhoItsFor from './WhoItsFor'
import FounderSection from './FounderSection'
import Pricing from './Pricing'
import Apply from './Apply'
import Footer from './Footer'

export default function LandingLayout() {
  const bp = useBreakpoint()

  return (
    <>
      <Nav bp={bp} />
      <main style={{ paddingTop: 56 }}>
        <Hero bp={bp} />
        <Problem bp={bp} />
        <HowItWorks bp={bp} />
        <CaseStudy bp={bp} />
        <WhatYouGet bp={bp} />
        <WhoItsFor bp={bp} />
        <FounderSection bp={bp} />
        <Pricing bp={bp} />
        <Apply bp={bp} />
      </main>
      <Footer bp={bp} />
    </>
  )
}
