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
          <BackWithBreadCrumbs more={{ label: "Engineering Insurance", link: "/corporate-plans/engineering-insurance" }} page="Plant All Risk" />
          <h1 className="bold-56 text-orange-900">Plant All Risk</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">We provide comprehensive coverage against all risks associated with plant and machinery, damage caused by fire, theft, vandalism, accidental damage, and natural disasters such as floods. Plant and machineries such as earthmoving equipment, cranes, pumps, air compressors, generators, mobile compressors and small tools</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/engineering-banner.png" alt="Plant All Risk" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Nature of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>Provide cover against all risks of direct physical loss of or damage to the property insured from any external cause including impact damage to the plants and machinery.</p>` }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<p>Accidental damage or loss to machinery caused by</p><ul><li>Fire</li><li>Burglary, theft,</li><li>Faulty operation, fall and impact of foreign object, collision and natural perils- from cause outside the plant and machinery.</li></ul>`
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