import Link from 'next/link'
import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import MoreLinks from '@/components/general/MoreLinks'
import { ArrowRight, PlusCircle } from 'lucide-react'
import FAQComponent from '@/components/FAQ'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-24 md:mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Marine Insurance" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Marine Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">We understand that every maritime venture is unique, which is why we offer tailored insurance solutions that are customized to fit your specific needs and requirements.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/marine-banner.png" alt="Marine Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-orange-50 flex gap-6 w-full items-start p-8 rounded-2xl">
          <Image src="/icons/tht/spark.svg" alt="Wellness" width={48} height={48} className="hidden md:flex" />
          <div className="regular-20 text-white space-y-4">
            <h5 className="text-orange-800 bold-32">Comprehensive marine insurance</h5>
            <p className="text-generic-950">Whether you're a shipowner, freight forwarder, charterer, or marine contractor, our experienced team will work with you to create a policy that provides the right level of protection for your assets and liabilities.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-orange-base">Cargo Insurance</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "This policy covers loss of or damage to goods from the port of origin or warehouse to the destination port or warehouse by perils of maritime nature." }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/marine-insurance/cargo-insurance">
                <Button variant="secondary" className="w-fit gap-2">
                  View details
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-orange-base">Hull Insurance</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "Marine Hull insurance is an insurance that is specifically designed to cover physical damage to insured vessel or fleet such as ships, boats including their engines or machinery, caused by a peril of sea or other covered perils while the vessel is in transit over water." }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/marine-insurance/hull-insurance">
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