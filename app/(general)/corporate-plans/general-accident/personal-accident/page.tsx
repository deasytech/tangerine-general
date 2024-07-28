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
          <BackWithBreadCrumbs more={{ label: "General Accident", link: "/corporate-plans/general-accident" }} page="Personal Accident" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Personal Accident</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Personal accident insurance covers injuries from accidents by reimbursing your medical costs and also provides compensation in case of death or disability caused by an accident</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/accident-banner.png" alt="Personal Accident" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Benefits</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: `<p>The policy is a benefit policy aimed at alleviating the financial burden on the insured caused by accidents resulting in death, permanent or temporary disability, and medical treatment costs. Additionally, it offers coverage around the clock, always ensuring protection.</p><p>It can be purchased by a group of individuals such as employees sharing common employment, sports teams or athletic organizations, student groups or associations, non-profit organizations or charities, business partners or co-owners of a company, any other organized group of individuals with a common interest or affiliation.</p>` }} />
            </div>
          </div>
          <div className="w-full py-6 bg-white rounded-xl flex flex-col justify-between">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-24 text-orange-base">Scope of Cover</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{
                __html: `<p>Accidental damage caused by</p><ul><li>Death</li><li>Permanent Disablement</li><li>Temporary disablement</li><li>Medical cost/expenses</li></ul>`
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