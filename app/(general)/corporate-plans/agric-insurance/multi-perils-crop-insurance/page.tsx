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
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-24 md:mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs more={{ label: "Agric Insurance", link: "/corporate-plans/agric-insurance" }} page="Multi-Perils Crop Insurance" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Multi-Perils Crop Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Multi-peril crop insurance protects the farmers from losses in crop production, including lower yields, caused by natural calamities or events like disease (pest and insect damage), drought, flooding, fire, or destructive weather.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/multi-perils-banner.png" alt="Multi-Perils Crop Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<p>This policy provides cover against all natural disasters that effect the production of crop such as:</p><ul><li>Fire</li><li>Drought</li><li>Diseases and Pests</li><li>Flood</li><li>Windstorm</li><li>Lighting and Explosion</li></ul><p>Losses are assessed at the stage of loss, and this informs the amount payable.</p>`
              }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Scope of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `This basic food crops such as Maize, Rice, Cassava, Yam, Vegetable, Wheat, Sorghum, Millet, Groundnut etc.`
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