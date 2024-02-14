import React from 'react';
import HomePlans from '../HomePlans.jsx/HomePlans';
import FaqSection from '../FaqSection/FaqSection';
import { Link } from 'react-router-dom';
import HowtoSearch from '../../pages/HowtoSearch';
import { Footer } from 'flowbite-react';
import VideoSection from '../VideoSection/VideoSection';
import HomeSearch from '../HomeSearch/HomeSearch';
import Plan from '../plan/Plan';

const HomeP = () => {
  return (
    <>

<HomeSearch/>

            <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="flex flex-col justify-between lg:flex-row">
    <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
      <div className="max-w-xl mb-6">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Empowering Businesses 

          <br className="hidden md:block" />
          <span className="inline-block text-deep-purple-accent-400">
          with Unlimited Leads!!
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        At Exel Leads, we are passionate about empowering businesses to thrive by providing unparalleled lead generation
solutions. With a steadfast commitment to excellence and innovation, we specialize in finding unlimited business
leads that drive growth and success.
        </p>
      </div>
      <hr className="mb-6 border-gray-300" />
      <div className="flex">
        <a href="/" aria-label="Play Song" className="mr-3">
          <div className="flex items-center justify-center w-10 h-10 text-white transition duration-300 transform rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:scale-110">
            <svg className="w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
            </svg>
          </div>
        </a>
        <div className="flex flex-col">
          <div className="text-sm font-semibold">
            Get Quality leads 
          </div>
          <div className="text-xs text-gray-700">Exelleads</div>
        </div>
      </div>
    </div>
    <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
      <div className="mb-5 font-semibold">Create an account</div>
      <div className="flex justify-center w-full mb-3">
        <a
          href="/auth/signup"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          <div className="flex items-center">
            <div className="mr-3 font-semibold text-white">
              Sign Up Now
            </div>
           
          </div>
        </a>
      </div>
      <p className="max-w-md px-5 mb-1 text-xs text-gray-600 sm:text-sm md:mb-5">
      Empowering Businsess with Quality Leads!!! 
      </p>
      <div className="flex items-center w-full mb-5">
        <hr className="flex-1 border-gray-300" />
        <div className="px-3 text-xs text-gray-500 sm:text-sm">or</div>
        <hr className="flex-1 border-gray-300" />
      </div>
      <a
        href="/pricing"
        className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none"
      >
        See Our Pricing
      </a>
    </div>
  </div>
</div>

    
      <hr />

      <hr />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">144K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Downloads
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              12.9K
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Subscribers
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              48.3K
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              24.5K
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Cookies
            </p>
          </div>
        </div>
      </div>

      <hr />
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
      <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
       Exelleads
      </p>
    </div>
    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      <span class="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <defs>
            <pattern id="18302e52-9e2a-4c8e-9550-0cbb21b38e55" x="0" y="0" width=".135" height=".30">
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          <rect fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)" width="52" height="24"></rect>
        </svg>
        <span class="relative"></span>
      </span>
      Empowering Businesses with Unlimited Leads

    </h2>
    <p class="text-base text-gray-700 md:text-lg">
    </p>
  </div>
  <div class="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
    <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Our Mission:</h6>
        <p class="mb-3 text-sm text-gray-900">
        Our mission is clear: to be the catalyst for your business's expansion. We understand that a constant
stream of quality leads is the lifeblood of any successful enterprise. Hence, our focus is on delivering customized
and scalable lead generation strategies that propel your business forward.
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">What Sets Us Apart:</h6>
        <p class="mb-3 text-sm text-gray-900">
        At the core of our approach lies a dedication to harnessing cutting-edge technology coupled
with deep industry insights. Our team comprises experts well-versed in the nuances of lead generation, utilizing
state-of-the-art tools and methodologies to unearth potential leads across diverse industries.
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">How We Help You Grow:	</h6>
        <p class="mb-3 text-sm text-gray-900">
        We believe that the growth of your business is our success metric. By leveraging our
expertise in finding leads online, we provide you with access to an extensive pool of potential Our focus is not just
on quantity but on the quality and relevance of the leads we deliver.
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Get Started with Exel Leads:</h6>
        <p class="mb-3 text-sm text-gray-900">
        Are you ready to take your business to new heights? Partner with us and unlock a
world of unlimited business leads. Let's embark on this journey together towards sustainable growth and prosperity        </p>
      </div>
    </div>
  </div>
</div>

<hr/> 
<VideoSection/>


<Plan />

      <FaqSection />

    

      
    

    </>
  );
};

export default HomeP;
