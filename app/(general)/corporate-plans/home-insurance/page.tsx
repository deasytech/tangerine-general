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
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Home Insurance" />
          <h1 className="bold-56 text-orange-900">Home Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Your home is more than just a place to live - it's where memories are made, families grow, and dreams take shape. However, unforeseen events like natural disasters, theft, or accidents can threaten the safety and security of your sanctuary</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/mortgage-banner.png" alt="Home Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-orange-50 flex gap-6 w-full items-start p-14 rounded-2xl">
          <Image src="/icons/tht/spark.svg" alt="Wellness" width={48} height={48} className="hidden md:flex" />
          <div className="regular-20 text-white space-y-4">
            <h5 className="text-orange-800 bold-32">Comprehensive home insurance </h5>
            <p className="text-generic-950">provides robust protection for your dwelling, ensuring that you're covered against a wide range of risks. From structural damage caused by fire, wind, or hail to theft of personal belongings, our policies are designed to safeguard your most valuable asset - your home.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-orange-base">Homeowner</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "You come home after a week-long family vacation and find that water leakage has damaged your kitchen appliances. How will you protect yourself from severe financial loss during such situations? Get homeowners insurance. It covers losses and damages to an individual's residence, furnishings, and other assets in the home." }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/home-insurance/homeowner">
                <Button variant="secondary" className="w-fit gap-2">
                  View details
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-orange-base">Householder</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "Householder insurance covers your house contents like household goods, personal effects, and other moveable possessions." }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/home-insurance/householder">
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