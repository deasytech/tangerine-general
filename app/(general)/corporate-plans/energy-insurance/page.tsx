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
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Energy Insurance" />
          <h1 className="bold-56 text-orange-900">Energy Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Energy insurance is a type of insurance coverage designed to protect businesses operating in the energy sector from various risks associated with their operations. These risks can include property damage, business interruption, liability claims, environmental damage, and other hazards specific to the energy industry.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/energy-banner.png" alt="Energy Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "Energy Package Policy covers all risks of physical loss and destruction to the insured properties (including Legal liability arising thereof) to the properties of the insured or arising out of the insured's operations." }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Scope of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<ul><li>Property Damage - Provides all risks cover for physical and/or property damage to the insured's schedule of properties</li><li>Operators Extra Expense - Provides cover for costs associated with control of well, seepage and pollution, restoration/re-drill, care, custody and control, all resulting from a well-being out of control.</li><li>Third Party Liability - Protects the Insured from claims from third parties arising from the activities of the insured.</li><li>Loss of Production Income/Business Interruption - provides loss of income / business interruption insurance for costs associated with loss of oil/gas production and increased costs of working arising from accidental physical loss or  damage, or out of control wells during a defined recovery period.</li></ul>`
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