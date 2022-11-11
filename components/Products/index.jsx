/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
// import haldiramImg from '../../public/haldiram-product.png'
// import haldiramMoboImg from '../../public/haldiram-mobo-image.png'
import veiwAllArrow from '../../public/veiw-all-arrow.png'

// motion animation declaration
const animationText = {
  offscreen: { y: 50 },
  onscreen: {
    y: 0,
    transition: { delay: 0.2, duration: 2, type: 'spring', bounce: 0.5 },
  },
}

const animationXimage = {
  offscreen: { x: 50 },
  onscreen: {
    x: 0,
    transition: { delay: 0.2, duration: 3, type: 'spring', bounce: 0.5 },
  },
}

const animationXleft = {
  offscreen: { x: -100 },
  onscreen: {
    x: 0,
    transition: { delay: 0.2, duration: 3, type: 'spring', bounce: 0.5 },
  },
}
// motion animation declaration end

const Products = ({ data }) => (
  <div id="container-featureProduct">
    <div className="border-y-2 py-4 px-4  border-white uppercase">
      <motion.h4
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: false, amout: 1 }}
        //  animate={'onscreen'}
        variants={animationXleft}
        //  transition={{staggerChildren:0.5}}
        className="container m-auto"
      >
        FEATURED PROJECTS
      </motion.h4>
    </div>
    {data?.map((value, index) => {
      const previewImg = value?.attributes?.preview?.projectImage?.data
        ?.attributes?.url
        ? `${process.env.NEXT_PUBLIC_PROD_URL}${value?.attributes?.preview?.projectImage?.data?.attributes?.url}`
        : ''
      return (
        <div
          key={value.id}
          className="flex border-b-2  border-white uppercase relative group overflow-hidden md:overflow-visible"
        >
          <h3 className="min-w-[20%] text-center border-r-2">{index + 1}</h3>

          <motion.h2
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: false, amout: 0.5 }}
            //  animate={'onscreen'}
            variants={animationText}
            className="xl:min-w-[80%] min-w-[60%] xl:px-24 p-6 "
          >
            <a href="">{value?.attributes?.preview?.projectName || ''}</a>
          </motion.h2>
          <motion.div
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: false, amout: 1 }}
            //  animate={'onscreen'}
            variants={animationXimage}
            //  transition={{staggerChildren:0.5}}
            className="min-w-[20%] image-container xl:absolute xl:top-1/2 xl:right-14 xl:w-1/3 xl:h-72  xl:group-hover:block xl:hidden z-10"
          >
            <Image
              className="hidden md:block"
              src={previewImg}
              // placeholder="blur"
              // blurDataURL={previewImg}
              alt="gredient banner"
              width={512}
              height={325.72}
            />
            <Image
              className="md:hidden block"
              src={previewImg}
              // placeholder="blur"
              // blurDataURL={previewImg}
              alt="gredient banner"
              width={512}
              height={325.72}
            />
          </motion.div>
        </div>
      )
    })}

    <div className="view-all-arrow border-b-2  border-white uppercase relative group">
      <div className="grid justify-center xl:grid-cols-2 container m-auto px-8">
        <div className="xl:block hidden" />
        <div className="flex container items-center justify-end gap-6">
          <div>
            <Image
              className="w-[20px] md:w-[40px]"
              src={veiwAllArrow}
              placeholder="blur"
              width="40"
              height="40"
              alt="white arrow"
            />
          </div>
          <h4 className="  py-14 ">
            <a href="">view all</a>
          </h4>
          <div>
            <Image
              className="w-[20px] md:w-[40px]"
              src={veiwAllArrow}
              placeholder="blur"
              width="40"
              height="60"
              alt="white arrow"
            />
          </div>
          <div>
            <Image
              className="w-[20px] md:w-[40px]"
              src={veiwAllArrow}
              placeholder="blur"
              width="40"
              height="60"
              alt="white arrow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Products
