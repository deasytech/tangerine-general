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
          <BackWithBreadCrumbs more={{ label: "Engineering Insurance", link: "/corporate-plans/engineering-insurance" }} page="EAR Insurance" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Erection All Risk (EAR) Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">We provide cover for any loss or damage to projects involving the erection or installation of a plant, machinery, and equipment. It guards against physical loss or damage to the contract works, building machinery, or construction equipment for the contractor or employer.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/engineering-banner.png" alt="Erection All Risk (EAR) Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Scope of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>The policy offers   comprehensive and adequate protection against loss or damage in respect of construction work, installation of machinery, construction plant and equipment and/ or construction machinery, as well as third party claims in respect of property damage or bodily injury arising in connection with the execution of a engineering project.</p>` }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<p>Erection All Risk provides 'all risk' cover unless the hazard is specifically excluded. It covers the risk of fire, lightning, explosion, flood, inundation, rain, snow, earthquake, theft, burglary, bad workmanship, lack of skill, negligence, human error</p>`
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