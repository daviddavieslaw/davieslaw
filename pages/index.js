import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/about'
import EstatePlanningHomeComp from '../components/EstatePlanning'
import BusinessLawHomeComp from '../components/BusinessLaw'
import VeteransPlanningHomeComp from '../components/VeteransPlanning'
import ElderLawHomeComp from '../components/ElderLaw'
import VerticleDivider from '../components/VerticleDivider'

export default function Home() {
  return (
    <>

      <Layout >

        <Hero />

        <About />

        <VerticleDivider class="lg:top-[75px] top-[60px]" />

        <EstatePlanningHomeComp />

        <VerticleDivider class="top-20 lg:top-[88px]" />

        <BusinessLawHomeComp />

        <VerticleDivider class="top-20 lg:top-[108px]" />


        <ElderLawHomeComp />

        <VerticleDivider class="top-20 lg:top-[108px]" />


        <VeteransPlanningHomeComp />

      </Layout>
    </>
  )
}
