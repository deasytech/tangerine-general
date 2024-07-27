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
          <BackWithBreadCrumbs more={{ label: "Fire Insurance", link: "/corporate-plans/fire-insurance" }} page="Fire and Special Perils" />
          <h1 className="bold-56 text-orange-900">Fire and Special Perils</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Fire and Special Perils insurance covers your house contents like household goods, personal effects, and other moveable possessions.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/fire-insurance-banner.png" alt="Fire and Special Perils" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Nature of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>This policy covers:</p><ul><li>Damage to buildings caused by fire</li><li>Loss or damage to the content caused by fire and the following perils (earthquake, subterranean fire, flood, storm, impact, tempest etc.)</li></ul>` }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<ul><li>Fire</li><li>Lighting</li><li>Explosion (gas explosions used for lighting or domestic purposes.) </li><li>Other perils such as earthquake storm, impact, Malicious damage, tempest, flood, bush fire, escape of water from tank apparatus or burst pipes, impact by any road vehicle or animal.</li></ul>`
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