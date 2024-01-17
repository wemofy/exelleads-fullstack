import React from 'react'


const FaqSection = ({ faq, index, toggleFAQ }) => {
  return (
   <>
   <div>
   <>
   <hr/>
  {/* FAQ */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
      Terms and Conditions

      </h2>
    </div>
    {/* End Title */}
    <div className="max-w-5xl mx-auto">
      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Services Offered:
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
          We, Exel Leads, specialize in providing lead generation services online, assisting businesses
in finding unlimited leads to grow their ventures. Our services includes leads generation through online with our
specific searches from different sources
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Client Responsibilities:
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
          Clients are expected to provide accurate information and cooperate in the lead
generation process by supplying necessary data or insights to optimize the service. Any delay or failure to provide
essential information may affect service delivery timelines.
3. Lead Quality and Guarantee:	
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Lead Quality and Guarantee:
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
          While we strive to provide high-quality leads, we cannot guarantee the
conversion of leads into paying customers. We commit to delivering leads that meet our quality standards, sourced
through legitimate means and validated to the best of our abilities.
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Data Confidentiality and Usage:
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
          All client information, data, and leads obtained during our services will be
handled with the utmost confidentiality. However, we reserve the right to use aggregated, anonymized data for
analytical or marketing purposes.

          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Service Modifications and Termination:
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
          We reserve the right to modify our services, terms, or pricing with
prior notice. Clients have the right to terminate services based on agreed-upon terms, subject to any applicable
cancellation fees.

          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Limitation of Liability:
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
          While we make every effort to provide accurate and reliable services, we shall not be
held liable for any direct or indirect damages, losses, or disruptions incurred by clients using our services
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  </div>

  <hr />
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
      Payment:


      </h2>
    </div>
    {/* End Title */}
    <div className="max-w-5xl mx-auto">
      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Payment Terms:
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
          Our payment terms are outlined as follows Specify payment terms such as upfront payments,
recurring billing, etc. Payments are due within 30 days of invoicing unless otherwise agreed upon.
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Pricing Structure
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
          Our pricing structure is based on subscription model, per-lead pricing
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Payment Methods:
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
          Accepted payment methods include UPI,Debit Cards, Credit Cards. All payments should be made in the designated currency.
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Refund Policy
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
          No Refunds are provided please contact us for more details on the given email id or whatsapp
number.

          </p>
        </div>
      
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End FAQ */}
</>


 
    </div>
   </>
  )
}

export default FaqSection