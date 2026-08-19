import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero'
import Signals from '../components/sections/Signals'
import BenefitsStrip from '../components/sections/BenefitsStrip'
import Doctor from '../components/sections/Doctor'
import Process from '../components/sections/Process'
import Comfort from '../components/sections/Comfort'
import Reviews from '../components/sections/Reviews'
import Location from '../components/sections/Location'
import FinalCTA from '../components/sections/FinalCTA'
import PrivacyFooter from '../components/privacy/PrivacyFooter'
import BehaviorTracking from '../components/tracking/BehaviorTracking'

export default function Home() {
  return (
    <div className="landing-page">
      <BehaviorTracking />
      <Header />
      <main>
        <Hero />
        <Signals />
        <BenefitsStrip />
        <Doctor />
        <Process />
        <Comfort />
        <Reviews />
        <Location />
        <FinalCTA />
      </main>
      <PrivacyFooter />
    </div>
  )
}
