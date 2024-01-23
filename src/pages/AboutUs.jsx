import React from 'react'
import Footer from '../components/Footer/Footer'

const AboutUs = () => {
  return (
    <div><div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-12 row-gap-8 lg:grid-cols-2">
      <div class="flex flex-col justify-center">
        <div class="max-w-xl mb-6">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            About us<br class="hidden md:block" />
            
            <span class="inline-block text-deep-purple-accent-400">Exelleads</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
          Welcome to ExelLeads – Your Premier Subscription-Based Platform for Lead Generation!

At ExelLeads, we understand the pulse of your business growth lies in the quality of leads you acquire. With a relentless commitment to delivering exceptional value, we have curated a cutting-edge subscription-based platform designed exclusively for lead generation, empowering businesses to soar to new heights.          </p>
        </div>
        <div class="grid gap-8 row-gap-8 sm:grid-cols-2">
          <div>
            <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5">
            Tailored Subscriptions:

            </h6>
            <p class="text-sm text-gray-900">
            We understand that every business is unique. That's why we offer a range of subscription plans, allowing you to choose the one that aligns perfectly with your goals and budget.            </p>
          </div>
          <div>
            <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5">
            Quality Assurance:
            </h6>
            <p class="text-sm text-gray-900">
            We prioritize the quality of leads over quantity. Our rigorous validation processes ensure that every lead you receive is not only relevant to your business but also more likely to convert, saving you time and resources.            </p>
          </div>
        </div>
      </div>
      <div>
        <img class="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="" />
      </div>
    
    </div>
   
  </div>
  <Footer/></div>
  )
}

export default AboutUs