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
          <BackWithBreadCrumbs page="Engineering Insurance" />
          <h1 className="bold-56 text-orange-900">Engineering Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">provides comprehensive coverage for a wide range of engineering projects and ventures. Whether you're involved in construction, infrastructure development, manufacturing, or technology innovation, our policies are designed to protect you against the unique risks and challenges you face.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/engineering-banner.png" alt="Engineering Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-orange-50 flex gap-6 w-full items-start p-14 rounded-2xl">
          <Image src="/icons/tht/spark.svg" alt="Wellness" width={48} height={48} className="hidden md:flex" />
          <div className="regular-20 text-white space-y-4">
            <h5 className="text-orange-800 bold-32">Comprehensive engineering insurance</h5>
            <p className="text-generic-950">From construction sites to manufacturing facilities, unforeseen events can jeopardies your progress and profitability. That's where Engineering Insurance steps in - offering tailored coverage to safeguard your projects and ensure your success.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-orange-base">Contractors All Risk</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<p>We provide cover for all contractors, subcontractors, skilled tradespeople, and business owners involved in a project such as buildings, roads, bridges and docks.</p><p>Specifically, it covers damage to ongoing work, materials, temporary structures, and equipment on the site for things like fire, theft, vandalism, natural disasters, and accidental damage.</p>`
              }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/engineering-insurance/contractors-all-risk">
                <Button variant="secondary" className="w-fit gap-2">
                  View details
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-orange-base">Erection All Risk (EAR) Insurance</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>We provide cover for any loss or damage to projects involving the erection or installation of a plant, machinery, and equipment. It guards against physical loss or damage to the contract works, building machinery, or construction equipment for the contractor or employer.</p>` }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/engineering-insurance/erection-all-risk-ear-insurance">
                <Button variant="secondary" className="w-fit gap-2">
                  View details
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-orange-base">Plant All Risk</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>We provide comprehensive coverage against all risks associated with plant and machinery, damage caused by fire, theft, vandalism, accidental damage, and natural disasters such as floods. Plant and machineries such as earthmoving equipment, cranes, pumps, air compressors, generators, mobile compressors and small tools</p>` }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/engineering-insurance/plant-all-risk">
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