import React from 'react'
import Navbar from '../../../../components/Navbar'
import Banner from '../../../../components/Banner'
import Products from '../../../../components/Products'
import Belief from '../../../../components/Belief'
import PartialClient from '../../../../components/PartialClient'
import WhatWeDo from '../../../../components/WhatWeDo'
import MagicalYear from '../../../../components/MagicalYear'
import Social from '../../../../components/Social'
import Footer from '../../../../components/Footer'

const Home = ({ data, project }) => {
  const homeData = data?.data?.attributes?.landingHeader || {}
  const productData =
    project?.data?.filter((obj) => obj?.attributes?.featured) || []
  const beliefData = data?.data?.attributes?.OurBelief || {}
  const partialClients = project || []
  const partialClientTitle = data?.data?.attributes?.partialClientTitle || ''
  const services = data?.data?.attributes?.serviceLists || []
  const contactInfo = data?.data?.attributes?.ContactInfo || {}

  return (
    <>
      <Navbar />
      <Banner data={homeData} />
      <Products data={productData} />
      <Belief data={beliefData} />
      <PartialClient data={{ partialClientTitle, partialClients }} />
      <WhatWeDo data={services} />
      <MagicalYear />
      <Social />
      <Footer data={contactInfo} />
    </>
  )
}

export default Home
