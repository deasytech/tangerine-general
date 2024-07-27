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
          <BackWithBreadCrumbs more={{ label: "General Accident", link: "/corporate-plans/general-accident" }} page="Goods-in-Transit" />
          <h1 className="bold-56 text-orange-900">Goods-in-Transit</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Goods in transit(GIT) Insurance provides coverage if any products belonging to you or a customer are stolen, lost, or destroyed while being transported from one location to another within Nigeria. It is important for all businesses that are involved in transporting goods or equipment to ensure that they are covered with goods in transit insurance.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/accident-banner.png" alt="Goods-in-Transit" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Nature of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>This policy provides coverage for goods owned by or under the responsibility of the insured against loss or damage by any accident or misfortune while in transit on land, rail, or inland waterways. It also covers goods during loading onto or unloading from conveyances, as well as during temporary storage in the regular course of transit within Nigeria.</p>` }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<p>Accidental damage caused by</p><ul><li>Fire</li><li>Accidental Damage caused by collision or overturning of the carrying vehicle(s)</li><li>Theft by violence or any attempt thereafter.</li></ul>`
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