import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import CoreValue from '@/components/CoreValue'
import { CORPORATE_OFFERED, FAQ, CORPORATE_PLANS } from '@/constants/general'
import PlansCard from '@/components/cards/PlansCard'
import { Button } from '@/components/ui/button'
import MoreLinks from '@/components/general/MoreLinks'
import TangerineLifeBenefitBanner from '@/components/general/TangerineLifeBenefitBanner'
import FAQComponent from '@/components/FAQ'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-40">
        <div className="h-[540px] bg-cover bg-center" style={{
          backgroundImage: "url('/images/general/corporate-plan-banner.png')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="px-6 md:ml-28 h-full flex flex-col gap-6 justify-center items-start w-full max-w-lg">
            <h1 className="bold-32 lg:bold-48 items-center text-white">
              Corporate Plans
            </h1>
            <p className="text-lg font-gilroy-medium text-white">Our retail plans offer tailored solutions for diverse needs, including motor insurance, protection, mortgage, family, savings, and customizable coverage with the Tang Plans.</p>
            <Link href="/get-quote">
              <Button variant="secondary" size="lg" className="gap-2">Get a Quote <ArrowRight size={18} /></Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full max-w-sm space-y-4">
          <h5 className="regular-14 text-orange-base uppercase">our insurance benefits</h5>
          <h3 className="bold-48 text-orange-base">The benefits we offer you</h3>
          <p className="regular-16 text-generic-700">Our General insurance retail plans offer essential financial protection and peace of mind for individuals and families</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          {CORPORATE_OFFERED?.map((benefit) =>
            <CoreValue
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.text}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full md:w-1/2 space-y-4">
          <h5 className="regular-14 text-orange-base uppercase">plans</h5>
          <h3 className="bold-48 text-orange-base">Our Plans</h3>
          <p className="regular-16 text-gray-600 max-w-sm">You can enjoy even better protection with our optional services, tailored to your needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {CORPORATE_PLANS.map((plan) =>
            <PlansCard
              key={plan.title}
              link={plan.link}
              title={plan.title}
              text={plan.text}
            />
          )}
        </div>
      </section>

      <TangerineLifeBenefitBanner />

      <MoreLinks />

      <FAQComponent />
    </>
  )
}

export default Page