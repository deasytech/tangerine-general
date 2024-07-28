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
          <BackWithBreadCrumbs more={{ label: "Motor Insurance", link: "/corporate-plans/motor-insurance" }} page="Third Party, Fire and Theft" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Third Party, Fire and Theft</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">This type of motor policy offers you additional protection in addition to the coverage provided by Third Party Motor Insurance. Your vehicle is also covered if it is damaged by fire, or if it is stolen.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/theft-banner.png" alt="Third Party, Fire and Theft" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<p>This policy in addition to providing cover for third party liabilities, provides protection to your own vehicles for loss or damage caused by either theft or fire.</p>`
              }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Scope of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<ul><li>Damage caused by Fire on the policyholder's vehicle.</li><li>Theft of the policyholder's vehicle</li><li>Covers accidental damages to third party property damage to the limit of 3m for private Vehicle and 5m for commercial Vehicle. Medical expenses: Death / Bodily Injury of the Third Party in the event of an accident</li></ul>`
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