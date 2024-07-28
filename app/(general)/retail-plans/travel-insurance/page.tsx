import Link from 'next/link'
import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import AvailableRidersCard from '@/components/general/cards/AvailableRidersCard'
import { TRAVEL_PLANS } from '@/constants/general'
import MoreLinks from '@/components/general/MoreLinks'
import { ArrowRight } from 'lucide-react'
import ClaimProcess from '@/components/ClaimProcess'
import FAQComponent from '@/components/FAQ'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-24 md:mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Travel Insurance" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Travel Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">This travel insurance plan is available for travelers aged 3 months to 80 years old. Coverage lasts for 92 days (approximately 3 months) with premiums determined by a separate rate schedule.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/travel-banner.png" alt="Travel Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {TRAVEL_PLANS.map((item: { title: string; description: string }) =>
            <AvailableRidersCard
              key={item.title}
              name={item.title}
              desc={item.description}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <h3 className="text-3xl md:text-5xl font-semibold text-orange-base mb-10">Other plans</h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 md:regular-32 text-orange-base">Motor Insurance - Comprehensive</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "Unparalleled protection for your vehicle. This comprehensive insurance plan offers the ultimate peace of mind for your car." }} />
            </div>
            <Link href="/retail-plans/motor-insurance-comprehensive">
              <Button variant="secondary" size="lg" className="w-fit gap-2">
                View details
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 md:regular-32 text-orange-base">Motor Insurance - Third Party</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "Protect yourself on the road. This basic motor insurance plan offers essential coverage for third-party liabilities." }} />
            </div>
            <Link href="/retail-plans/motor-insurance-third-party">
              <Button variant="secondary" size="lg" className="w-fit gap-2">
                View details
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 md:regular-32 text-orange-base">Fire Insurance</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "Our fire insurance policy shields your building from a range of destructive events, including fire, storms, lightning, vandalism, and overflowing tanks." }} />
            </div>
            <Link href="/retail-plans/fire-insurance">
              <Button variant="secondary" size="lg" className="w-fit gap-2">
                View details
                <ArrowRight size={18} />
              </Button>
            </Link>
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