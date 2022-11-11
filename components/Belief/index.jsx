/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import tntLogo from '../../public/tnt-logo.png'
import veiwAllArrow from '../../public/veiw-all-arrow.png'
import eyeImage from '../../public/eye-see.png'

// motion animation declaration
const animationText = {
  offscreen: { y: 50 },
  onscreen: {
    y: 0,
    transition: { delay: 0.2, duration: 2, type: 'spring', bounce: 0.5 },
  },
}
const animationXleft = {
  offscreen: { x: -100 },
  onscreen: {
    x: 0,
    transition: { delay: 0.2, duration: 3, type: 'spring', bounce: 0.5 },
  },
}

const Belief = ({ data }) => {
  const beliefImage = data?.beliefImage?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_PROD_URL}${data?.beliefImage?.data?.attributes?.url}`
    : eyeImage

  return (
    <div id="container-belief">
      <div className="">
        <div className="belief-title border-y-2 py-4 px-4  border-white uppercase">
          <motion.h4
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
            variants={animationXleft}
            className=""
          >
            our belief
          </motion.h4>
        </div>
        <div className="content-wrapper justify-center m-auto">
          <div className="xl:flex items-center justify-center eye-title uppercase gap-4 max-w-[70%] md:min-w-full mx-auto">
            <motion.h2
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
              variants={animationText}
              className="belief-title md:flex justify-center items-center"
            >
              {data?.title || 'what the eye cant see'}
              <Image
                className="inline md:block mb-2 ml-4"
                src={tntLogo}
                placeholder="blur"
                width="124"
                height="71"
                alt="logo"
              />
            </motion.h2>

            <div />
          </div>
          <div className="grid eye-content xl:grid-cols-5 gap-4 w-[50%] md:w-full mx-auto mb-[7.5rem] md:mb-[2.5rem]">
            <div className="hidden md:block" />
            <div className="hidden md:block" />
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
              variants={animationText}
              className="flex items-start"
            >
              <span>
                {data?.firstDescPara ||
                  'We play the strategic and creative aces up our sleeves to make your business win big. We thrive towards excellence; making your presence count, and assisting you in creating a long-lasting and impactful impression.'}
              </span>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
              variants={animationText}
              className="flex items-end "
            >
              <span>
                {data?.secondDescPara ||
                  'From product launches, to brand identity creation, we make sure your brand stands apart amidst the sea of sameness.'}
              </span>
            </motion.div>
            <div className="hidden md:block" />
          </div>
          <div className="grid xl:grid-cols-2 gap-12 md:pl-14 items-center">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
              variants={animationText}
            >
              <Image
                className="ml-auto pr-0 md:pr-28"
                src={beliefImage}
                // placeholder="blur"
                width={592}
                height={224}
                alt="logo"
              />
            </motion.div>
            <div>
              <div className="flex about-us container items-center justify-center gap-6">
                <div>
                  <Image
                    className="ml-auto"
                    src={veiwAllArrow}
                    placeholder="blur"
                    width="40"
                    height="60"
                    alt="logo"
                  />
                </div>
                <h4
                  className=" uppercase py-14 "
                  x-intersect="$el.classNameList.add('fadeInUpL')"
                >
                  <a href="">about us</a>
                </h4>
                <div>
                  <Image
                    src={veiwAllArrow}
                    placeholder="blur"
                    width="40"
                    height="60"
                    alt="logo"
                  />
                </div>
                <div>
                  <Image
                    src={veiwAllArrow}
                    placeholder="blur"
                    width="40"
                    height="60"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Belief
