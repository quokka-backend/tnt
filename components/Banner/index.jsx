/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react'
import Atropos from 'atropos/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import banner from '../../public/gredient-banner.png'
// import bannerMobo from '../../public/gredient-banner-mobo.png'
import arrowDown from '../../public/scroll-down-arrow.png'
// import Parallex from 'react-rellax'

const Banner = ({ data }) => {
  const bannerImage = data?.titleImage?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_PROD_URL}${data?.titleImage?.data?.attributes?.url}`
    : banner

  const animationXleft = {
    offscreen: { x: -100 },
    onscreen: {
      x: 0,
      transition: { delay: 0.2, duration: 3, type: 'spring', bounce: 0.5 },
    },
  }
  // motion animation declaration end

  return (
    <main>
      <div id="container-hero" className="overflow-hidden self-center">
        <div className="container-main ml-auto">
          <div id="panel" className="grid grid-cols-3 h-[28rem] xl:h-auto">
            <div className="title-wrapper col-span-1">
              <div className="title absolute w-[85%] xl:w-[65%] 2xl:w-[65%] panel-content z-10 h-[100%]">
                <motion.h1
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amout: 1 }}
                  //  animate={'onscreen'}
                  variants={animationXleft}
                  //  transition={{staggerChildren:0.5}}
                  id="parallex-text"
                >
                  {data?.tilteText || `STRATEGY LED DESIGN
                  STUDIO FOR BRANDS THAT BELIEVE IN, UNIQUE
                  BRAND EXPERIENCES.`}
                  {/* STRATEGY LED
                  <span>DESIGN </span>
                  STUDIO FOR BRANDS THAT BELIEVE IN, UNIQUE
                  <span> BRAND EXPERIENCES.</span> */}
                </motion.h1>
              </div>
            </div>
            <div
              id="panel-container"
              className="col-span-2 self-center mt-8 md:mt-0"
            >
              <Atropos
                activeOffset={40}
                shadowScale={1.05}
                // onEnter={() => console.log('Enter')}
                // onLeave={() => console.log('Leave')}
                // onRotate={(x, y) => console.log('Rotate', x, y)}
              >
                <Image
                  id="parallex-image"
                  data-atropos-offset="-5"
                  className="hidden md:block xl:w-[96%] min-w-[96%] ml-auto"
                  src={bannerImage}
                  // placeholder="blur"
                  // blurDataURL={bannerImage}
                  priority
                  width={826}
                  height={544}
                  alt="gredient banner"
                  layout="responsive"
                />
                <Image
                  className="block md:hidden xl:w-[96%] min-w-[96%] ml-auto"
                  src={bannerImage}
                  // placeholder="blur"
                  priority
                  width={826}
                  height={544}
                  alt="gredient banner"
                />
              </Atropos>
            </div>
            <div />
          </div>
          <div />
          <div className="arrow-down">
            <Image
              className="m-auto"
              src={arrowDown}
              placeholder="blur"
              alt="scroll down arrow"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Banner
