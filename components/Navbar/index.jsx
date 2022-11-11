/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import logo from '../../public/neat-trick-logo.png'
import OpenBtn from '../../public/open-button.png'
import CloseBtn from '../../public/cross-button.png'
import ColorBar from '../../public/color-bar-slider.png'

// motion animation declaration
const animationText = {
    offscreen: { y: 50 },
    onscreen: {
        y: 0,
        transition: { delay: 0.2, duration: 2, type: 'spring', bounce: 0.5 },
    },
}
const animationXleft = {
    offscreen: { x: -400 },
    onscreen: {
        x: 0,
        transition: {
            delay: 0.1,
            duration: 0.5,
            // repeat: Infinity,
            // repeatType: 'mirror',
            ease: 'linear',
        },
    },
}

const Navbar = () => {
    const [slider, setSlider] = useState(true);
    return (
        <>

            {/* slider sidebar menu  */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amout: 0.5 }} //  animate={'onscreen'}
              variants={animationXleft}
              id="sideNav"
              className="navSlider w-full fixed bg-black z-50 h-full  items-center p-8 md:p-0"
              style={{ display: slider ? 'none' : 'block' }}
            >
                <div className="flex flex-col justify-between h-[100%]">
                    <div className="flex justify-between items-center">
                        <Image src={logo} placeholder="blur" width="200" height="200" alt="neat trick" />
                        <div className="pointer" />
                        <motion.button
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          whileTap={{
                                scale: 0.8,
                                rotate: -90,
                                borderRadius: '100%'
                            }}
                          type="button"
                          onClick={() => setSlider(!slider)}
                        >
                            <Image src={CloseBtn} placeholder="blur" width="30" height="30" alt="neat trick" />
                        </motion.button>

                    </div>

                    <div className="flex flex-col justify-start items-center">
                        <div className="menu-wrapper uppercase">
                            <div className=""><span><a>about</a></span></div>
                            <div><span><a>services</a></span></div>
                            <div><span><a>projects</a></span></div>
                            <div><span><a>case study</a></span></div>
                            <div><span><a>contact</a></span></div>
                        </div>

                    </div>
                    <div className="text-center">
                        <p>©2021 The Neat Trick®. All rights reserved.</p>
                        <Image src={ColorBar} placeholder="blur" alt="neat trick" />
                    </div>
                </div>

                {/* slider sidebar menu end  */}
            </motion.div>
            <header className="mx-auto sticky  top-0 w-full bg-black z-40">
                <section>
                    {/* navbar start  */}
                    <nav id="container-navbar bg-black" className="lg:border-b-2 lg:border-white">
                        <div className="flex items-center">
                            <div className="grid grid-cols-2 ml-auto w-[95%]">
                                <motion.div
                                  initial="offscreen"
                                  whileInView="onscreen"
                                  viewport={{ once: false, amout: 0.5 }}
                                    //  animate={'onscreen'}
                                  variants={animationText}
                                  className="flex items-center"
                                >
                                    <Image src={logo} placeholder="blur" width="200" height="200" alt="neat trick" />

                                </motion.div>
                                <div className="grid grid-cols-2 xl:grid-cols-7">
                                    <div
                                      className="hidden  border-l-2 xl:flex justify-center items-center border-white col-span-2"
                                    >
                                        <motion.a
                                          initial="offscreen"
                                          whileInView="onscreen"
                                          viewport={{ once: false, amout: 0.5 }}
                                            //  animate={'onscreen'}
                                          variants={animationText}
                                          href=""
                                        >
                                            <p>work</p>
                                        </motion.a>

                                    </div>
                                    <div className=" hidden xl:block border-l-2 col-span-2">
                                        <div
                                          className=" border-b-2 border-white h-1/2 flex justify-center items-center"
                                        >
                                            <motion.a
                                              initial="offscreen"
                                              whileInView="onscreen"
                                              viewport={{ once: false, amout: 0.5 }}
                                                //  animate={'onscreen'}
                                              variants={animationText}
                                              href=""
                                            >
                                                <p>about</p>
                                            </motion.a>

                                        </div>
                                        <motion.div
                                          initial="offscreen"
                                          whileInView="onscreen"
                                          viewport={{ once: false, amout: 0.5 }}
                                            //  animate={'onscreen'}
                                          variants={animationText}
                                          className="flex h-1/2 justify-center items-center"
                                        >
                                            <a href="">
                                                <p>services</p>
                                            </a>
                                        </motion.div>
                                    </div>
                                    <motion.div
                                      className="hidden border-l-2 xl:flex justify-center items-center border-white col-span-2"
                                    >
                                        <motion.a
                                          initial="offscreen"
                                          whileInView="onscreen"
                                          viewport={{ once: false, amout: 0.5 }}
                                            //  animate={'onscreen'}
                                          variants={animationText}
                                          href=""
                                        >
                                            <p>
                                                contact
                                            </p>
                                        </motion.a>
                                    </motion.div>
                                    <div className="lg:border-l-2 flex justify-center items-center lg:border-white">
                                        <motion.div
                                          initial="offscreen"
                                          whileInView="onscreen"
                                          viewport={{ once: false, amout: 0.5 }}
                                            //  animate={'onscreen'}
                                          variants={animationText}
                                          className="pointer"
                                        />
                                    </div>
                                    <div className=" md:hidden flex justify-center items-center">
                                        <motion.button
                                          whileHover={{ scale: 1.2, rotate: 90 }}
                                          whileTap={{
                                                scale: 0.8,
                                                rotate: -90,
                                                borderRadius: '100%'
                                            }}
                                          type="button"
                                          onClick={() => setSlider(!slider)}
                                        >
                                            <Image className="" src={OpenBtn} placeholder="blur" width="30" height="30" alt="neat trick" />
                                        </motion.button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </nav>
                    {/* navbar start end */}
                </section>
            </header>
        </>
    )
}

export default Navbar
