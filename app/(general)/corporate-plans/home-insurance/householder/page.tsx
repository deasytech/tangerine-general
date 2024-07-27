import Link from 'next/link'
import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import MoreLinks from '@/components/general/MoreLinks'
import ClaimProcess from '@/components/ClaimProcess'
import FAQComponent from '@/components/FAQ'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs more={{ label: "Home Insurance", link: "/corporate-plans/home-insurance" }} page="Householder" />
          <h1 className="bold-56 text-orange-900">Householder</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Householder insurance covers your house contents like household goods, personal effects, and other moveable possessions.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/mortgage-banner.png" alt="Householder" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Nature of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>This is an all risk cover in respect of household items and goods held in trust in custody or control of the insured.</p>` }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<ul><li>Covers the loss of rent or the cost of alternative accommodation in case of fire</li><li>Covers replacement of stolen items (based on inventory provided)</li><li>Legal Liability to the public</li><li>Death of the insured due to insured peril</li><li>Medical Expenses up to a limit</li></ul>`
              }} />
            </div>
          </div>
        </div>
      </section>

      <ClaimProcess />

      <MoreLinks />

      <FAQComponent />
    </>
  )
}

export default Page