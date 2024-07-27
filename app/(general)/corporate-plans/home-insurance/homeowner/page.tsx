import Link from 'next/link'
import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import MoreLinks from '@/components/general/MoreLinks'
import FAQComponent from '@/components/FAQ'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs more={{ label: "Home Insurance", link: "/corporate-plans/home-insurance" }} page="Homeowner" />
          <h1 className="bold-56 text-orange-900">Homeowner</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Protect Your Home Sweet Home with  Homeowner Insurance, take the first step towards securing your peace of mind.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/mortgage-banner.png" alt="Homeowner" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>Home Insurance is a comprehensive insurance that covers damage to a building occasioned by fire and and its allied perils such as lightning, explosion, flood, malicious damage etc).</p><p>It also provides cover for loss or damage to the contents, whilst contained in the buildings and caused by an Insured Peril such as furniture & fittings, jewelries, refrigerator and so on.</p>` }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Scope of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<ul><li>Covers the loss of rent or the cost of alternative accommodation in case of fire</li><li>Covers replacement of stolen items (based on inventory provided)</li><li>Legal Liability to the public</li><li>Death of the insured due to insured peril</li><li>Medical Expenses up to a limit</li></ul>`
              }} />
            </div>
          </div>
        </div>
      </section>

      <MoreLinks />

      <FAQComponent />
    </>
  )
}

export default Page