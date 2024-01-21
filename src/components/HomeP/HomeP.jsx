import React from 'react';
import HomePlans from '../HomePlans.jsx/HomePlans';
import FaqSection from '../FaqSection/FaqSection';
import { Link } from 'react-router-dom';
import HowtoSearch from '../../pages/HowtoSearch';

const HomeP = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Exelleads
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Empowering Businesses 

              <br className="hidden md:block" />
              
              <span className="inline-block text-deep-purple-accent-400">
              with Unlimited Leads!!
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            At Exel Leads, we are passionate about empowering businesses to thrive by providing unparalleled lead generation
solutions. With a steadfast commitment to excellence and innovation, we specialize in finding unlimited business
leads that drive growth and success.
            </p>
            <div className="flex items-center">
              <Link
                to="/auth/signup"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
             
            </div>
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

      <HomePlans />

      <FaqSection />

      <HowtoSearch/>

      {/* Footer */}

    </>
  );
};

export default HomeP;
