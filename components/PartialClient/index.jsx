import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import HaldiramImg from '../../public/partial-haldiram-logo.png'
// import ToraniImg from '../../public/partial-torani-logo.png'
// import SheraImg from '../../public/partial-shera-logo.png'
// import BongchieImg from '../../public/partial-bongchie-logo.png'
// import PrepsImg from '../../public/partial-preps-logo.png'
// import UncleJackImg from '../../public/partial-uncleJack-logo.png'
// import PaceImg from '../../public/partial-pace-logo.png'
// import CentrioImg from '../../public/partial-centrio-logo.png'
// import DemoImg from '../../public/scroll-image-demo.png'

// motion animation declaration
const animationXleft = {
  offscreen: { x: -100 },
  onscreen: {
    x: 0,
    transition: { delay: 0.2, duration: 3, type: 'spring', bounce: 0.5 },
  },
}

const PartialClient = ({ data: { partialClientTitle, partialClients } }) => {
  const [demoImg, setDemoImg] = useState('')

  const getClientImg = (data) => {
    const clientImg = data?.attributes?.preview?.projectImage?.data?.attributes
      ?.url
      ? `${process.env.NEXT_PUBLIC_PROD_URL}${data?.attributes?.preview?.projectImage?.data?.attributes?.url}`
      : ''

    return clientImg
  }

  const changeDemoImg = (data) => {
    const img = getClientImg(data)
    console.log(img)
    setDemoImg(img)
  }

  useEffect(() => {
    changeDemoImg(partialClients?.data?.[0])
  }, [])

  return (
    <div id="container-PartialClient">
      <div className="">
        <div className="belief-title border-y-2 py-4 px-4  border-white uppercase">
          <motion.h4
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
            variants={animationXleft}
          >
            partial client list
          </motion.h4>
        </div>
      </div>
      <div className="partialClient-subtitle">
        <div className="text-wrapper">
          <p>
            {partialClientTitle ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'}
          </p>
        </div>
      </div>
      <div className="partial-client-list">
        <div className="grid md:m-auto gap-y-4 gap-x-4 grid-width md:grid-cols-5">
          <div className="md:col-start-3 relative md:row-start-1 md:col-end-6 md:row-end-5 border-2 border-white grid-display">
            <div className="marquee">
              <div className="track">
                <div className="content">
                  &nbsp;
                  {partialClients?.data?.map(
                    (val) => ` ${val?.attributes?.preview?.projectName} `
                  )}
                  {/* BURGRILL MYSORE CAFE TORANI KAPSONS SHERA CTRL Z
                  WICKTALE BURGRILL MYSORE CAFE TORANI KAPSONS SHERA CTRL Z
                  WICKTALE */}
                </div>
              </div>
            </div>
            <div className="marquee-left">
              <div className="track">
                <div className="content">
                  &nbsp;
                  {partialClients?.data?.map(
                    (val) => ` ${val?.attributes?.preview?.projectName} `
                  )}
                </div>
              </div>
            </div>
            <div className="marquee-right">
              <div className="track">
                <div className="content">
                  &nbsp;
                  {partialClients?.data?.map(
                    (val) => ` ${val?.attributes?.preview?.projectName} `
                  )}
                </div>
              </div>
            </div>
            <div className="marquee-bottom">
              <div className="track">
                <div className="content">
                  &nbsp;
                  {partialClients?.data?.map(
                    (val) => ` ${val?.attributes?.preview?.projectName} `
                  )}
                </div>
              </div>
            </div>
            <div className="h-full flex">
              <Image
                className="border-2 border-white m-auto"
                src={demoImg}
                // placeholder="blur"
                width={564}
                height={572}
                alt="haldiram logo"
              />
            </div>
          </div>

          {partialClients?.data?.map((val) => (
            <div
              key={val.id}
              className=" hidden grid-box md:flex border-2 border-white ml-auto cursor-pointer"
              onClick={() => changeDemoImg(val)}
            >
              <Image
                className="m-auto"
                src={getClientImg(val)}
                // placeholder="blur"
                width={92.32}
                height={49.99}
                alt="haldiram logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartialClient
