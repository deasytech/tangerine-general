import ValuesCard from '@/components/cards/ValuesCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CareersPage = () => {
  return (
    <>
      <section className="relative w-full h-screen bg-cover bg-center" style={{
        backgroundImage: "url('/images/career-hero.png')",
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px',
        overflow: 'hidden',
      }}>
        <div className="h-full flex flex-col justify-start items-center mt-44 w-full gap-6">
          <p className='regular-14 font-gilroy-semibold text-generic-500 uppercase'>careers at tangerine</p>
          <h1 className="bold-32 lg:bold-56 items-center text-center text-orange-950 w-full md:w-1/3">
            Unlock opportunities. Express your Tang.
          </h1>
          <p className="regular-18 text-center text-generic-700 w-full p-4 md:p-0 md:w-1/3">
            We are looking for passionate individuals full of zest who want to be part of our mission to help people live financially secure lives. Are you interested in joining our impressive galaxy of Tang Stars? Keep scrolling to learn more about life at Tangerine and view open roles
          </p>
        </div>
      </section>

      <section className="relative max-container padding-container flexCenter gap-6 flex-col md:flex-row justify-between mt-24">
        <div className="w-full flex flex-col gap-4">
          <p className="regular-14 uppercase text-generic-500 font-gilroy-semibold">
            Life at Tangerine - why you should join us
          </p>
          <h2 className='bold-40 text-orange-base'>
            Our positive, enabling culture provides the perfect environment for you to thrive
          </h2>
          <p className="regular-14 text-generic-700 font-gilroy-medium">
            At Tangerine, our products and services are not the only source of our strength. Our culture, which we fondly refer to as the Tang Factor is a rich tapestry that contributes greatly to a positive experience for our employees, and to our overall success.
          </p>
          <p className="regular-14 text-generic-700 font-gilroy-medium">
            Our culture statement inspires and fuels us - “We are honest, transparent and keep to our commitments. We are a team of strong collaborators that are intentional in creating innovative solutions that add value to our stakeholders”. We believe it, and we live it every single day.
          </p>
          <p className="regular-14 text-generic-700 font-gilroy-medium">
            Our culture will provide you with fair and equal treatment, ongoing engagement and communication regarding the decisions impacting you, as well as the freedom to boldly voice your opinions and concerns. Join our dynamic environment where meaningful ideas are celebrated, creativity knows no bounds, and you can make an impact.
          </p>
        </div>
        <div className="w-full relative flex justify-end">
          <Image src="/images/life-at-tang.png" alt='Life at Tangerine' width={592} height={692} />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14 max-w-md">
          <h2 className="bold-40 text-orange-950 mb-4">
            Our Core Values
          </h2>
          <p className='regular-18 font-gilroy-medium text-generic-700'>
            Our Core Values are the colorful thread woven into the rich tapestry of our culture. They embody what we strongly believe in, our way of life, and guide how we behave and interact with our stakeholders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ValuesCard
            icon="/icons/lightbulb-on.svg"
            title="Creativity"
            description="We are unconventional in our approach to delivering innovative solutions that create value"
          />
          <ValuesCard
            icon="/icons/file-contract.svg"
            title="Accountability"
            description="We take responsibility for our words, actions and results."
          />
          <ValuesCard
            icon="/icons/headset.svg"
            title="Customer Focus"
            description="We are customer centric. Our focus is building outstanding customer experience and lasting relationships."
          />
          <ValuesCard
            icon="/icons/handshake-simple.svg"
            title="Integrity"
            description="We are honest, transparent and keep to our commitments."
          />
          <ValuesCard
            icon="/icons/trophy-star.svg"
            title="Excellence"
            description="We are intentional in consistently producing high-quality results, thereby exceeding the expectations of our stakeholders."
          />
        </div>
      </section>

      <section className="relative max-container padding-container flexCenter gap-6 flex-col md:flex-row justify-between mt-24">
        <div className="w-full flex flex-col gap-4">
          <p className="regular-14 uppercase text-generic-500 font-gilroy-semibold">
            Life at Tangerine - why you should join us
          </p>
          <h2 className='bold-40 text-orange-base'>
            What's in it for you
          </h2>
          <p className="regular-14 text-generic-700 font-gilroy-medium">
            We offer you an extraordinary career. When you join us, you will contribute meaningfully to the financial and physical well-being of the customers and communities we love and serve.
          </p>
          <p className="regular-14 text-generic-700 font-gilroy-medium">
            We are committed to helping you be all you can be in an innovative and rewarding environment. We will challenge you to be the best possible version of yourself - professionally, intellectually and financially.
          </p>
          <p className="regular-14 text-generic-700 font-gilroy-medium">
            Because we strongly believe that a fulfilling career is a two-way street, in return for your dedication and hard work, we will provide you with unique, amazing benefits that are impossible to resist.
          </p>
        </div>
        <div className="w-full relative flex justify-end">
          <Image src="/images/life-at-tang2.png" alt='Life at Tangerine' width={500} height={584} />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ValuesCard
            icon="/icons/lightbulb-on.svg"
            title="An Inspiring Brand"
            description="<p class='regular-12 mb-2'>As an employee of Tangerine, you will work with an inspiring brand encompassing solid organizations that have stood the test of time. All our entities have gotten stronger through multiple changes and will be around for many more years to come. As a Group, we are continuously innovating and pushing boundaries.</p> <p class='regular-12'>Although we are relentless in the pursuit of our goals, we also genuinely care about our communities. Join us for a chance to make positive social impact through our Recycling for Scholarships initiative.</p>"
          />
          <ValuesCard
            icon="/icons/amazing.svg"
            title="An Amazing Team"
            description="<p class='regular-12 mb-2'>When you join Tangerine, you will enter a galaxy of ingenious, talented Tang Stars who value your individuality and treat you with respect.</p><p class='regular-12'>We hire only the best, which means you will collaborate with intelligent colleagues and highly experienced leaders with a wealth of knowledge just waiting to be shared with you.</p>"
          />
          <ValuesCard
            icon="/icons/bolt.svg"
            title="Flexibility and work life balance"
            description="<p class='regular-12 mb-2'>At Tangerine we prioritize physical interactions because they promote collaboration, but we also understand the flexibility and autonomy that remote work offers. </p><p class='regular-12'>This is why we operate a hybrid work-model, which fosters a balanced approach that maximizes productivity, personal well-being and work-life balance.</p>"
          />
          <ValuesCard
            icon="/icons/coin.svg"
            title="Competitive salary and benefits"
            description="<p class='regular-12'>You deserve to be well rewarded for your hard work. As an employee of Tangerine, you will receive a competitive salary and attractive benefits that will help you live a financially secure life. This includes access to excellent health benefits. We pay on time too!</p>"
          />
          <ValuesCard
            icon="/icons/tree.svg"
            title="Generous leave benefits"
            description="<p class='regular-12'>A break to rewind and reset? Weekend trip to the Maldives? Time-off to spend with a new addition to your family? If it is important to you, we will help you make time for it. As a Tang Star, you will have easy access to the personal time you need to do the things that matter to you. Our comprehensive leave benefits include 25 paid annual leave days for all Full-Time employees across every Grade Level. Additionally, we offer various other leave options such as Examination/Study Leave, Compassionate Leave, Parental Leave, and more.</p>"
          />
          <ValuesCard
            icon="/icons/leaf.svg"
            title="Conducive workspaces"
            description="<p class='regular-12'>We know that you do your best work when you are comfortable, so we will provide you with conducive, safe workspaces that boost your productivity and inspire innovation.</p>"
          />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-orange-950 rounded-3xl" style={{
          backgroundImage: "url('/images/tang-building.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="h-full flex-col justify-center items-center md:items-start md:pl-20 gap-6 flex w-full md:w-1/2">
            <h3 className="bold-32 md:bold-48 text-white text-center md:text-start">Come Join our team at Tangerine</h3>
            <p className="regular-18 text-white text-center md:text-start">
              Working at Tangerine is more than just a job. Want to come along for the ride?
            </p>
            <Link href="/">
              <Button variant="secondary" size="lg" className="gap-2">
                See all Open Positions
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareersPage