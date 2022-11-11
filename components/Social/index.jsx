import React from 'react'
import Image from 'next/image'
import SocialImg1 from '../../public/social-image-1.png'
import SocialImg2 from '../../public/social-image-2.png'
import SocialImg3 from '../../public/social-image-3.png'

const Social = () => (
  <div className="grid md:grid-cols-3">
    <div>
      <Image src={SocialImg1} placeholder="blur" alt="social image" />
    </div>
    <div>
      <Image src={SocialImg2} placeholder="blur" alt="social image" />
    </div>
    <div>
      <Image src={SocialImg3} placeholder="blur" alt="social image" />
    </div>
  </div>
)

export default Social
