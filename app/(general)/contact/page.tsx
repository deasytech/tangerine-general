import ContactTabs from '@/components/ContactTabs'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <section className="relative max-container padding-container">
      <div className='max-container pt-40 pb-16'>
        <h1 className='bold-32 md:bold-56 text-orange-base mb-2'>Contact us</h1>
        <p className='regular-18 text-generic-700'>Get in touch with any of our business touch points.</p>
        <Link href="whatsapp:2349139330003" className="text-green-600"> WhatsApp: +2349139330003</Link>
      </div>

      <ContactTabs />

      <div className="mt-6 bg-orange-50 p-10 w-full md:w-[80%] space-y-3 rounded-3xl">
        <h3 className="text-orange-base text-2xl md:text-4xl font-gilroy-medium">Still Have Questions?</h3>
        <div className="flex gap-6 justify-between items-center text-sm md:text-base text-orange-base font-gilroy-light text-nowrap">
          <p>We're here to help</p>
          <p>For General Inquiries</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row text-base text-orange-base font-gilroy-light w-full">
          <div className="flex items-center gap-3 py-2 px-4 border border-orange-base rounded-full w-full">
            <Mail size={16} />
            <Link href="mailto:customerservice@tangerine.africa">customerservice@tangerine.africa</Link>
          </div>
          <div className="flex items-center gap-3 py-2 px-4 border border-orange-base rounded-full w-full">
            <Phone size={16} />
            <Link href="tel:+2349139330003">+234 913 933 0003</Link>
          </div>
          <div className="flex items-center gap-3 py-2 px-4 border border-orange-base rounded-full w-full">
            <Mail size={16} />
            <Link href="mailto:hello@tangerine.africa">hello@tangerine.africa</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page