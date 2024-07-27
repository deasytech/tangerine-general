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
          <BackWithBreadCrumbs more={{ label: "Marine Insurance", link: "/corporate-plans/marine-insurance" }} page="Cargo Insurance" />
          <h1 className="bold-56 text-orange-900">Cargo Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Our Marine cargo insurance is a type of property insurance that protects property while in transit against risks of the sea, air, rail, road, and inland waterways.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/marine-banner.png" alt="Cargo Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "This is primarily concerned with  international trade, involving the import or export of goods and commodities   between countries. We provide protection to you against the risks of loss or   damage of your goods during transportation via Sea, Air, we also extend to   cover Inland Transit of such goods Via Rail or land." }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Scope of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `This insurance covers, loss of or damage to the subject matter of insurance caused by;
                <ul><li>Fire or explosion</li>
              <li>Earthquake</li>
              <li>Lightning</li>
              <li>Theft</li>
              <li>Land conveyance overturned or derailed
              <li>Jettison
              <li>Piracy</ul>` }} />
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