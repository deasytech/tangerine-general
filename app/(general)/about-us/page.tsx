import CoreValue from '@/components/general/CoreValue'
import { Button } from '@/components/ui/button'
import { CORE_VALUES } from '@/constants/general'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUsPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-center w-full mt-44">
        <div className="w-full space-y-3 flex-[2]">
          <h1 className="bold-48 text-orange-950">Who we are</h1>
          <p className="regular-18 text-orange-950 !leading-[165%]">At Tangerine General, we're more than just an insurance company – we're your committed ally on the path to a brighter future. With a focus on deep consumer insights and cutting-edge technology, we've tailored our products to meet the diverse needs of our customers.</p>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/about-us-banner.png" alt="About us" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className='relative max-container padding-container space-y-8 mt-16'>
        <div className='bg-orange-base flex items-center justify-center p-8 w-full rounded-3xl gap-8'>
          <div className='flex flex-col gap-4'>
            <p className='regular-14 !leading-7 !font-gilroy-medium text-white uppercase'>how it started</p>
            <p className='bold-36 text-white'>Our History</p>
            <div className="text-white regular-16 !leading-normal" dangerouslySetInnerHTML={{ __html: "<p>Tangerine General Insurance Limited is one of the first-generation insurance companies to set up in Nigeria seven decades ago with the name Law Union & Rock Insurance Limited. The company began operations in Nigeria in 1951 as a Chief Agency and in 1957, it acquired branch status and continued to operate as a branch of Royal International Insurance Holding a subsidiary of RSA Insurance Group Plc, United Kingdom, transacting all major classes of insurance businesses until June 17 1969 when it became incorporated locally in compliance with the Companies Act of 1968.</p><p>In an efforts to recapitalise the company and position it for better product offering and service delivery, Verod Capital Management acquired the company 100% as their General Underwriting Firm in a group of companies under Tangerine Financial.</p><p>The official change of name from Law Union & Rock Insurance limited to Tangerine General Insurance Limited came into effect on May 20, 2021</p>" }} />
          </div>
        </div>
        <div className='bg-orange-50 w-full grid grid-cols-2 md:grid-cols-4 rounded-xl p-4 gap-4'>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-orange-base'>228,000+</p>
            <p className='regular-16 text-generic-950'>Enrollees</p>
          </div>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-orange-base'>186+</p>
            <p className='regular-16 text-generic-950'>Staff strength</p>
          </div>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-orange-base'>9</p>
            <p className='regular-16 text-generic-950'>Locations across Nigeria</p>
          </div>
          <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-orange-base'>1500+</p>
            <p className='regular-16 text-generic-950'>Provider network</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <h2 className="bold-48 text-orange-base mb-8">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {CORE_VALUES.map((value) =>
            <CoreValue
              key={value.title}
              title={value.title}
              icon={value.icon}
              text={value.text}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="border border-orange-base w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase bg-orange-700 text-white px-3 py-1 w-fit rounded-full font-gilroy-semibold mt-10'>CSR</p>
            <div className="flex items-center gap-3">
              <h2 className="flex-1 bold-48 text-orange-base w-full">
                Our CSR Impact
              </h2>
              <Link href="/csr">
                <Button variant="secondary" size="icon"><ArrowRight size={16} /></Button>
              </Link>
            </div>
          </div>
          <div className="bg-orange-base w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase text-white bg-orange-700 px-3 py-1 w-fit rounded-full font-gilroy-semibold mt-10'>Leadership</p>
            <div className="flex items-center gap-3">
              <h2 className="bold-48 text-white w-full">
                Management team and Board
              </h2>
              <Link href="/leadership-team">
                <Button variant="darkorange" size="icon"><ArrowRight size={16} /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsPage