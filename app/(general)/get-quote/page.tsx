import { Suspense } from 'react'
import Image from 'next/image'
import GoBackButton from '@/components/GoBackButton'
import { GetQuoteForm } from '@/components/general/forms/buy-now-form'

const Page = () => {
  return (
    <section className='relative max-container padding-container mt-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-32">
        <Image
          src="/images/general/get-quote-banner.png"
          alt="network provider"
          width={520}
          height={708}
          className="w-full max-md:hidden"
        />

        <div className="flex flex-col w-full gap-6 mb-6">
          <div className="space-y-6 mb-4">
            <h3 className="text-orange-base text-3xl md:text-5xl font-normal font-gilroy-semibold leading-10">Get a quote</h3>
            <p className="regular-18 text-generic-800">Your time is valued. Fill out the form, and our consultants will tailor general insurance options for your team based on their needs.</p>
          </div>
          <Suspense fallback={<div>Loading quotation form...</div>}>
            <GetQuoteForm />
          </Suspense>
        </div>
      </div>
    </section >
  )
}

export default Page