import { LocateIcon, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ } from "@/constants/general"
import Link from "next/link"

const FAQPage = () => {
  return (
    <>
      <section className="max-container padding-container relative mt-44">
        <h1 className="bold-56 text-orange-base !font-gilroy-semibold w-full md:w-1/2 mb-4">Frequently Asked Questions</h1>
        <p className="regular-18 text-orange-950 !font-gilroy-medium w-full md:w-1/2">Here are some of the frequently asked questions about our plans. We hope you find the answers helpful.</p>

        <div className="flex flex-col md:flex-row gap-10 mt-20">
          <div className="flex-[3]">
            <Accordion type="single" collapsible className="w-full">
              {FAQ?.map((item) =>
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="regular-24 text-orange-base !font-gilroy-semibold text-start">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-orange-950 font-gilroy-regular">{item.answer}</AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
          <div className="flex-1 bg-orange-50 p-8 rounded-2xl space-y-3 h-fit">
            <p className="bold-36 text-orange-base !font-gilroy-medium">Still Have Questions?</p>
            <p className="text-base text-orange-base font-gilroy-regular pb-2">We're here to help</p>
            <div className="flex flex-col gap-3">
              <Link href="phone:02-018883322">
                <Button variant="outline" className="gap-2 rounded-full bg-transparent">
                  <Phone size={16} />
                  02-018883322
                </Button>
              </Link>
              <Link href="mailto:generalcustomercare@tangerine.africa">
                <Button variant="outline" className="gap-2 rounded-full bg-transparent">
                  <Mail size={16} />
                  generalcustomercare@tangerine.africa
                </Button>
              </Link>
              <p className="text-base text-orange-base font-gilroy-regular pb-2">For General Inquiries</p>
              <Link href="mailto:hello@tangerine.africa">
                <Button variant="outline" className="gap-2 rounded-full bg-transparent">
                  <Mail size={16} />
                  hello@tangerine.africa
                </Button>
              </Link>
              <p className="text-base text-orange-base font-gilroy-regular pb-2">Location</p>
              <Link href="/">
                <Button variant="outline" className="gap-2 rounded-full bg-transparent">
                  <LocateIcon size={16} />
                  Locate Nearest Branch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQPage