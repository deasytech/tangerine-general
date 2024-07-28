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
          <BackWithBreadCrumbs more={{ label: "Agric Insurance", link: "/corporate-plans/agric-insurance" }} page="Area Yield Index Insurance" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Area Yield Index Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Area-yield index insurance is a type of agriculture insurance that protects farmers against natural disasters and biological perils that affect crop yields. The insurance is based on the average yield of an area, such as a local government, or state.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/area-yield-banner.png" alt="Area Yield Index Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: "This policy provides cover against drought, windstorm, excessive rainfall, flood, hail, uncontrollable pests and diseases which directly affects expected yield in a pre- mapped area of farmland (e.g. local government areas, states and geo-ecological zones)"
              }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Scope of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<ul><li>Yield Loss Protection: AYII compensates farmers for losses in yield due to various perils such as adverse weather conditions (drought, excessive rainfall, frost, etc.), pest infestation, diseases, and other factors beyond their control.</li><li>Index-Based Coverage: Instead of individual farm assessments, AYII uses an index to determine payouts. This index is usually based on historical yield data for the specific area covered. If the actual yield falls below a certain threshold determined by the index, farmers receive compensation.</li><li>Area Basis: AYII operates on an area basis rather than an individual farm basis. This means that all farmers within the specified area receive payouts if the index triggers a payment, regardless of whether they individually suffered losses or not.</li></ul>`
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