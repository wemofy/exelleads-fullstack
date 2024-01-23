import React from 'react'
import Footer from '../components/Footer/Footer'

const ServicesPage = () => {
  return (
    <div>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="grid gap-10 lg:grid-cols-2">
    <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
      <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
        <svg class="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
          <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points=" 8,5 8,1 16,1 16,5" stroke-linejoin="round"></polyline>
          <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="9,15 1,15 1,5 23,5 23,15 15,15" stroke-linejoin="round"></polyline>
          <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="22,18 22,23 2,23 2,18" stroke-linejoin="round"></polyline>
          <rect x="9" y="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" width="6" height="4" stroke-linejoin="round"></rect>
        </svg>
      </div>
      <div class="max-w-xl mb-6">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Services<br class="hidden md:block" />
          
          <span class="inline-block text-deep-purple-accent-400">at Exelleads</span>
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
       <span className='text-2xl text black font-semibold'> Web and App Development</span><br/>
First impressions are everything
Let us help you make it a lasting one! Using the latest web design techniques, our team knows what elements need to be included to help increase traffic and promote growth in your business. It is important that your site is visually appealing, as well as easy to navigate through. We understand what it takes to make a lasting impression.

If you are looking to get noticed in the digital world, we can help you out. Consult with us, and we will be able to devise a plan that will get your company noticed. Our web design services are created to help you make a positive reputation for you, your business and brand. Customized to cater to your needs, we focus on truly connecting your customers with your brand.

Our team will design, revise and collaborate on any size project in a timely manner. We understand the need to grow your business and reach customers. That is why we are dedicated to consulting with you on your web design project, provide a time frame and efficiently communicate with you every step of the way.
    
        </p>
      </div>
      <div>
       
      </div>
    </div>
    <div class="flex items-center justify-center -mx-4 lg:pl-8">
      <div class="flex flex-col items-end px-3">
        <img
          class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <img class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
      </div>
      <div class="px-3">
        <img class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
      </div>
    </div>
  </div>
</div>
<Footer/>
       </div>
  )
}

export default ServicesPage