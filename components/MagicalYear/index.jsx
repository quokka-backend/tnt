import React from 'react'
import Image from 'next/image'
import Atropos from 'atropos/react'
import MagicalCard1 from '../../public/magical-card-1.png'
import MagicalCardMobo1 from '../../public/magical-card-mobo-1.png'
import MagicalCard2 from '../../public/magical-card-2.png'
import MagicalCardMobo2 from '../../public/magical-card-mobo-2.png'
import MagicalCard3 from '../../public/magical-card-3.png'
import MagicalCard4 from '../../public/magical-card-4.png'
import MagicalCard5 from '../../public/magical-card-5.png'

const MagicalYear = () => (
  <div id="container-magical-year" className="overflow-hidden self-center">
    <div className="uppercase container-main mx-auto text-center relative">
      <div className="magical-title mx-auto">
        <span>5 Magical Years of TNT</span>
      </div>
      <Atropos
        activeOffset={40}
        shadowScale={1.05}
        // onEnter={() => console.log('Enter')}
        // onLeave={() => console.log('Leave')}
        // onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        <div className="card-stack flex md:absolute">
          <div>
            <Image
              data-atropos-offset="-5"
              className="hidden md:block"
              src={MagicalCard1}
              placeholder="blur"
              alt="card 1"
            />
            <Image
              data-atropos-offset="-5"
              className="block md:hidden  z-20"
              src={MagicalCardMobo1}
              placeholder="blur"
              alt="card 1"
            />
          </div>
          <div>
            <Image
              data-atropos-offset="-5"
              className="hidden md:block"
              src={MagicalCard2}
              placeholder="blur"
              alt="card 1"
            />
            <Image
              data-atropos-offset="-7"
              className="block md:hidden absolute left-[6rem] z-10"
              src={MagicalCardMobo2}
              placeholder="blur"
              alt="card 1"
            />
          </div>
          <div>
            <Image
              data-atropos-offset="-10"
              className="hidden md:block"
              src={MagicalCard3}
              placeholder="blur"
              alt="card 1"
            />
          </div>
          <div>
            <Image
              data-atropos-offset="5"
              className="hidden md:block"
              src={MagicalCard4}
              placeholder="blur"
              alt="card 1"
            />
          </div>
          <div>
            <Image
              data-atropos-offset="10"
              className="hidden md:block"
              src={MagicalCard5}
              placeholder="blur"
              alt="card 1"
            />
          </div>
        </div>
      </Atropos>
    </div>
  </div>
)

export default MagicalYear
