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
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-24 md:mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Aviation Insurance" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Aviation Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Aviation insurance provides coverage for aircraft, airlines, airports, and related liabilities against various risks associated with aviation operations. This type of insurance is designed to protect owners, operators, pilots, passengers, and third parties from financial losses resulting from accidents, damage, or other incidents involving aircraft.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/aviation2-banner.png" alt="Aviation Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-12 md:mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>This insurance policy provides coverage for aircraft owners or operators against accidental damage or loss of an aircraft while the aircraft whilst, in flight, taxiing (temporarily halted on the ground), on the ground, and/or moored (while afloat, for example, on water). This can also be extended to include war risks.</p><p>The policy is a total package that covers aircraft hull, hangars, war risks, spare parts, third party legal liability, passenger's liability, baggage, cargo or mail liability.</p>` }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Scope of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<ul><li>Aircraft Hull</li><li>War risks</li><li>Spare parts</li><li>Liabilities - (Passenger and Third Party)</li><li>Hull deductible</li><li>Personal Accident</li></ul>`
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