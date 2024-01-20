import React from 'react'
import Footer from '../components/Footer/Footer'

const HowtoSearch = () => {
  return (
    <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 hottosearch">
  <div className="p-8 rounded shadow-xl sm:p-16">
    <div className="flex flex-col lg:flex-row">
      <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        How to Search?
          <br className="hidden md:block" />
          keyword Search ideas with location


          <span className="inline-block text-deep-purple-accent-400">
          
          </span>
        </h2>
      </div>
      <div className="lg:w-1/2">
        <p className="mb-4 text-base text-gray-700">
        Think of a keyword or buisness for the leads for your business and the target of the location in you mind and go ahead with following steps as suggested in Exel Leads (Features), and here are the some of the keywords and location which may help you to get the leads for the business


        </p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
         Get Started
        </a>
      </div>
    </div>
  </div>
</div>
<Footer/>

    </div>
  )
}

export default HowtoSearch