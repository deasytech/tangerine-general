import Link from 'next/link'
import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import MoreLinks from '@/components/general/MoreLinks'
import FAQComponent from '@/components/FAQ'
import { ArrowRight, PlusCircle } from 'lucide-react'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-24 md:mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Fire Insurance" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Fire Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">we understand that your home or business is more than just a building - it's where memories are made, and dreams are realized. However, the threat of fire can turn those dreams into nightmares in an instant. That's why we're here to offer you peace of mind with our comprehensive fire insurance coverage.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/fire-insurance-banner.png" alt="Fire Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-orange-50 flex gap-6 w-full items-start p-8 rounded-2xl">
          <Image src="/icons/tht/spark.svg" alt="Wellness" width={48} height={48} className="hidden md:flex" />
          <div className="regular-20 text-white space-y-4">
            <h5 className="text-orange-800 bold-32">Comprehensive fire Insurance </h5>
            <p className="text-generic-950">Our policies go beyond mere protection against flames. We understand that each property and situation is unique, which is why we offer customizable coverage options. From covering the cost of repairs, Tangerine ensures that you're prepared for the unexpected.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 md:regular-32 text-orange-base">Fire and Special Perils</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>Our Fire and special perils insurance safeguards the insured against unforeseen eventualities caused by accidental fire, lightning, explosion/implosion, destruction, or damage caused by aerial devices, man-made perils in the form of riots, strikes, etc.</p>` }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/fire-insurance/fire-and-special-perils">
                <Button variant="secondary" className="w-fit gap-2">
                  View details
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 md:regular-32 text-orange-base">Burglary</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>Our burglary insurance policy is a type of policy that provides you with coverage for the financial loss or damage that you may suffer due to burglary, theft or attempted burglary into your house or business premises. At times the homes and business places of people are filled with valuables like art, jewelry, and expensive furniture, burglary insurance protects in the event of a theft.</p>` }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/fire-insurance/burglary">
                <Button variant="secondary" className="w-fit gap-2">
                  View details
                  <ArrowRight size={18} />
                </Button>
              </Link>
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