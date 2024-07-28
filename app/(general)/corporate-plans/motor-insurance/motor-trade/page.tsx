import Link from 'next/link'
import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import MoreLinks from '@/components/general/MoreLinks'
import FAQComponent from '@/components/FAQ'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-24 md:mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs more={{ label: "Motor Insurance", link: "/corporate-plans/motor-insurance" }} page="Motor Trade" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Motor Trade</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">It provides cover for vehicles in garages, showrooms, and parking lots and risk that happens to the vehicle whilst in transit, usually during a test drive and delivery to the prospective customer.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/motor-trade-banner.png" alt="Motor Trade" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<ul><li>Comprehensive Coverage: Motor trade insurance provides coverage for a wide range of risks specific to the automotive sector, including road risks, premises protection, liability claims, stock and vehicle coverage, and more. This comprehensive coverage helps businesses mitigate financial losses resulting from accidents, damage, theft, or other unforeseen incidents.</li><li>Legal Compliance: Many aspects of motor trade insurance, such as employers' liability and road risks coverage, are mandatory by law. Having the appropriate insurance in place ensures that businesses comply with legal requirements, avoiding potential fines, penalties, or legal consequences.</li><li>Financial Protection: Motor trade insurance safeguards businesses against significant financial losses associated with repairing or replacing vehicles, compensating third parties for injuries or damages, repairing or replacing damaged property, or defending against legal claims and lawsuits.</li></ul>`
              }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Scope of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<ul><li>Road Risks: Coverage for driving vehicles owned by the business or customers on public roads for trade purposes, including test drives and transportation. Premises Coverage: Protection for the business premises, including buildings, contents, tools, and equipment against risks such as fire, theft, vandalism, and damage.</li><li>Employers' Liability: Mandatory coverage for businesses with employees, providing financial protection against claims for injury or illness suffered by employees in the course of their work.</li><li>Public Liability: Coverage for third-party claims for bodily injury or property damage arising from the business's activities, such as accidents involving vehicles on the premises or during test drives.</li><li>Product Liability: Protection against claims for injury or damage caused by faulty vehicles or parts sold or supplied by the business.</li></ul>`
              }} />
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