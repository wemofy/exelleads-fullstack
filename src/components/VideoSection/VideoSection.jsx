import React from 'react'
import homeImage from '../../assets/homeimage.png'

const VideoSection = () => {
  return (
    <div>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    
    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      <span class="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <defs>
            <pattern id="679d5905-e08c-4b91-a66c-84aefbb9d2f5" x="0" y="0" width=".135" height=".30">
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          <rect fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)" width="52" height="24"></rect>
        </svg>
        <span class="relative text-deep-purple-accent-400">Exel leads</span>
      </span><br/>
      How we work
    </h2>
    
  </div>
  <div class="mx-auto lg:max-w-2xl">
    <div class="relative transition-shadow duration-300 hover:shadow-xl">
    <iframe width="740" height="400" src="https://www.youtube.com/embed/3kmVahyGres?si=1ohg55E2ChAs_b__&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
    </div>
  </div>
</div>
    </div>
  )
}

export default VideoSection