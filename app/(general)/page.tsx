import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MoreLinks from '@/components/general/MoreLinks'
import TangerineLifeBenefitBanner from '@/components/general/TangerineLifeBenefitBanner'
import LifeInsuranceCard from '@/components/general/cards/LifeInsuranceCard'
import { GENERAL_INSURANCE } from '@/constants/general'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const TangLifePage = () => {
  return (
    <>
      <section className="max-container padding-container mt-24 md:mt-32 relative">
        <Image src="/images/general-banner.png" width={1216} height={640} alt="hero banner" className="w-full h-auto" />
        <div className="max-container padding-container absolute inset-0 flex items-center justify-start">
          <div className="px-8">
            <h1 className="bold-32 lg:bold-56 mb-3 text-white font-gilroy-black">
              Cover all angles
            </h1>
            <p className="md:text-[28px] font-gilroy-medium text-white max-w-lg">
              General Insurance helps you cover the big things and little things with a broad range of products and services built for your business and personal life.
            </p>
          </div>
        </div>
      </section>

      <section className="max-container padding-container text-center mt-10 md:mt-20">
        <div className="h-full flex flex-col justify-start items-center w-full gap-6">
          <h2 className="bold-32 md:bold-48 text-orange-base w-full md:w-1/2">General Insurance solutions for all that matters</h2>
          <p className="regular-18 text-generic-700 w-full md:w-1/2">Tangerine General Insurance provides comprehensive, reliable, and innovative non-life insurance solutions that protect what matters most to your business and you, maximizing asset protection while minimizing liability exposure.</p><p className="regular-18 text-generic-700 w-full md:w-1/2">We offer a wide range of products designed to meet the diverse needs of businesses, individuals and families.</p>
        </div>
      </section>

      <section className="relative max-container padding-container mt-10 md:mt-20">
        <div className="mb-14 flex flex-col gap-4">
          <p className="regular-14 !font-gilroy-semibold text-orange-base uppercase py-2 px-4 bg-orange-50 w-fit rounded-xl">our plans</p>
          <h2 className="bold-32 md:bold-48 text-orange-base max-w-md">
            Choose a cover that's right for you.
          </h2>
          <p className="regular-18 !leading-[26px] max-w-md text-generic-500">With a variety of plans to choose from, get one that meets your present and future needs.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-orange-900 w-full p-12 flex flex-col gap-4 rounded-2xl">
            <p className='regular-14 uppercase text-white font-gilroy-semibold'>plans</p>
            <h2 className="bold-32 md:bold-48 text-white">
              Corporate Plans
            </h2>
            <p className='regular-18 !leading-[32px] text-white'>Our corporate plans offer tailored solutions for diverse needs, including marine, aviation, agric, fire, home, travel, motor, engineering, and general accident coverage.</p>
            <Link href="/corporate-plans">
              <Button variant="secondary" size="lg" className="gap-2">
                Explore plans
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          <div className="bg-orange-base w-full p-12 flex flex-col gap-4 rounded-2xl">
            <p className='regular-14 uppercase text-white font-gilroy-semibold'>plans</p>
            <h2 className="bold-32 md:bold-48 text-white">
              Retail Plans
            </h2>
            <p className='regular-18 !leading-[32px] text-white'>Our retail plans offer tailored solutions for diverse needs, including protection, education, family welfare, comprehensive benefits, savings, and customizable coverage with the Tang Flex Plan.</p>
            <Link href="/retail-plans">
              <Button variant="outline" size="lg" className="gap-2">
                Explore plans
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TangerineLifeBenefitBanner />

      <MoreLinks />

      <section className="relative max-container padding-container mt-24">
        <h3 className="bold-32 md:bold-56 text-orange-base w-full md:w-1/2 mb-10">Why choose Tangerine General Insurance?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {GENERAL_INSURANCE.map((item) =>
            <LifeInsuranceCard
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default TangLifePage