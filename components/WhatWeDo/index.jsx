/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BrandStrategyImg from '../../public/brand-strategy.png'
import veiwAllArrow from '../../public/veiw-all-arrow.png'

const WhatWeDo = ({ data }) => {
  const [serviceOnView, setServiceOnView] = useState({
    service: '',
    aboutService: '',
  })

  useEffect(() => {
    setServiceOnView(data[0])
  }, [])
  return (
    <div id="container-whatWeDo">
      <div className="">
        <div className="belief-title border-t-2 py-4 px-4  border-white uppercase">
          <h4 className="">WHAT WE DO!</h4>
        </div>
      </div>

      <div className="grid md:grid-cols-3">
        <div className="brand-strategy-image relative border-t-2 order-2 md:oder-1">
          <Image
            className="m-auto h-full"
            src={BrandStrategyImg}
            placeholder="blur"
            alt="haldiram logo"
          />
          <div className="brand-strategy-content text-center absolute">
            <span className="py-8">{serviceOnView?.service}</span>
            <p className="py-8 px-10">{serviceOnView?.aboutService}</p>
            <div className="flex about-us container items-center justify-center gap-6">
              <div>
                <Image
                  className="ml-auto"
                  src={veiwAllArrow}
                  placeholder="blur"
                  width="20"
                  height="20"
                  alt="logo"
                />
              </div>
              <h4
                className=" uppercase "
                x-intersect="$el.classNameList.add('fadeInUpL')"
              >
                <a href="">LEARN MORE</a>
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
        <div className="col-span-1 md:col-start-2 border-2 border-white md:col-end-4 order-1 md:order-2">
          <div className="grid grid-cols-2">
            <div className="py-2 col-start-1 border-b-2  col-end-3 text-center">
              <h5>SERVICES</h5>
            </div>
            {data?.map((val) => (
              <div
                key={val?.id || val?.service}
                className="service-box border-b-2 border-r-2 cursor-pointer"
                onClick={() => setServiceOnView(val)}
              >
                <span>{val?.service || ''}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="view-all-arrow border-b-2  border-white uppercase relative group">
        <div className="grid justify-center xl:grid-cols-2 container m-auto px-8">
          <div className="xl:block hidden" />
          <div className="flex container items-center justify-center gap-6">
            <div>
              <Image
                className=""
                src={veiwAllArrow}
                placeholder="blur"
                width="40"
                height="60"
                alt="white arrow"
              />
            </div>
            <h4 className="  py-20">
              <a href="">SERVICES</a>
            </h4>
            <div>
              <Image
                className=""
                src={veiwAllArrow}
                placeholder="blur"
                width="40"
                height="60"
                alt="white arrow"
              />
            </div>
            <div>
              <Image
                className=""
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
}

export default WhatWeDo
