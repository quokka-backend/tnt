/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import tntLogo from '../../public/tnt-logo.png'
import veiwAllArrow from '../../public/veiw-all-arrow.png'
import ColorBar from '../../public/color-bar.png'

// motion animation declaration
const animationText = {
  offscreen: { y: 50 },
  onscreen: {
    y: 0,
    transition: { delay: 0.2, duration: 2, type: 'spring', bounce: 0.5 },
  },
}
const Footer = ({ data }) => (
  <>
    <div id="container-footer">
      <div className="grid md:grid-cols-2 border-b-2">
        <div className="work-together-wrapper border-b-2 md:border-r-2 flex justify-center items-center">
          <div className="w-[90%] md:w-[70%]">
            <span>LET’S WORK TOGETHER</span>
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
              variants={animationText}
              id="sideNav"
            >
              GET IN TOUCH
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-start-1 col-end-3 flex justify-center items-center border-b-2">
            <div className="address-wrapper">
              <span className="uppercase">say hello!</span>
              <motion.p
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
                variants={animationText}
                id="sideNav"
                className="py-4"
              >
                {data?.contactAddress || ''}
              </motion.p>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
                variants={animationText}
              >
                <p className="underline">
                  {data?.contaclEmail || 'info@theneattrick.com'}
                </p>
                <p className="underline py-2">
                  {`+91 ${data?.contactNumber || ' 9910 5555 39'}`}
                </p>
              </motion.div>
            </div>
          </div>
          <div className="image-wrapper flex justify-center items-center border-r-2">
            <motion.div
              whileHover={{ scale: 1, rotate: 45 }}
              whileTap={{
                scale: 0.8,
                // rotate: -90,
                borderRadius: '100%',
              }}
            >
              <Image
                className=""
                src={tntLogo}
                placeholder="blur"
                priority
                width="auto"
                alt="eye logo"
              />
            </motion.div>
          </div>
          <div className="social-link-wrapper flex justify-center items-center">
            <div className="">
              <div className="flex about-us container items-center justify-center gap-6">
                <h4
                  className=" capitalize underline"
                  x-intersect="$el.classNameList.add('fadeInUpL')"
                >
                  <a href="">instgram</a>
                </h4>
                <div>
                  <Image
                    src={veiwAllArrow}
                    placeholder="blur"
                    width="20"
                    height="20"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="flex about-us container items-center justify-center gap-6">
                <h4
                  className="capitalize underline"
                  x-intersect="$el.classNameList.add('fadeInUpL')"
                >
                  <a href="">behance</a>
                </h4>
                <div>
                  <Image
                    src={veiwAllArrow}
                    placeholder="blur"
                    width="20"
                    height="20"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="flex about-us container items-center justify-center gap-6">
                <h4
                  className="capitalize underline"
                  x-intersect="$el.classNameList.add('fadeInUpL')"
                >
                  <a href="">linkedIn</a>
                </h4>
                <div>
                  <Image
                    src={veiwAllArrow}
                    placeholder="blur"
                    width="20"
                    height="20"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="flex about-us container items-center justify-center gap-6">
                <h4
                  className="capitalize underline"
                  x-intersect="$el.classNameList.add('fadeInUpL')"
                >
                  <a href="">pinterest</a>
                </h4>
                <div>
                  <Image
                    src={veiwAllArrow}
                    placeholder="blur"
                    width="20"
                    height="20"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-footer grid md:grid-cols-3 items-center">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
        variants={animationText}
        className="text-center order-3 md:order-1"
      >
        <p>©2021 The Neat Trick®. All rights reserved.</p>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
        variants={animationText}
        className="text-center order-1 md:order-2 mb-4 md:mb-0"
      >
        <span>Made extra neat, so it’s not all that tricky!</span>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
        variants={animationText}
        className="text-center order-2 md:order-3"
      >
        <p>Terms and Conditions | Privacy Policy</p>
      </motion.div>
    </div>
    <div className="image-wrapper">
      <div>
        <Image
          className="mx-auto"
          src={ColorBar}
          placeholder="blur"
          alt="logo"
        />
      </div>
    </div>
  </>
)

export default Footer
