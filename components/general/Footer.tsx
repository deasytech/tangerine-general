"use client"

import { FOOTER_LINKS } from "@/constants/general";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const hiddenPaths = [
    "/make-claim",
    "/renew-policy",
    "/get-quote",
    "/buy-policy",
    "/get-started",
    "/get-started/corporate",
  ];

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  return (
    <>
      <div className="bg-orange-50 mt-24 pt-20">
        <div className="padding-container max-container">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full flex flex-col gap-4">
              <Image src="/images/logo.svg" alt="twitter logo" width={127} height={40} />
              <p className="regular-14 !font-gilroy-medium max-w-xs text-orange-base">Empowering people to live financially secure.</p>
              <div className='flex gap-4'>
                <Link href="https://www.linkedin.com/company/tangerine-africa/posts/?feedView=all" target="_bank">
                  <Image src="/icons/linkedin.svg" alt="linkedin logo" width={16} height={16} />
                </Link>
                <Link href="https://web.facebook.com/TangerineAfrica/?_rdc=1&_rdr" target="_blank">
                  <Image src="/icons/facebook.svg" alt="facebook logo" width={16} height={16} />
                </Link>
                <Link href="https://www.instagram.com/tangerineafrica?igsh=MWZ3amhybjJ3bXluZw==" target="_blank">
                  <Image src="/icons/instagram.svg" alt="instagram logo" width={16} height={16} />
                </Link>
                <Link href="https://x.com/tangerinafrica?s=21&t=tmfoilz0vsLV41wXFMExcQ" target="_blank">
                  <Image src="/icons/x-twitter.svg" alt="twitter logo" width={16} height={16} />
                </Link>
              </div>
              <p className="regular-24 text-orange-base mt-4">Still Have Questions?</p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-base text-orange-base font-gilroy-light">
                <p>We're here to help</p>
                <p>For General Inquiries</p>
                <div className="flex items-center gap-3 py-2 px-4 border w-fit border-orange-base rounded-full">
                  <Mail size={16} />
                  <p>wecare@tangerine.africa</p>
                </div>
                <div className="flex items-center gap-3 py-2 px-4 border w-fit border-orange-base rounded-full">
                  <Mail size={16} />
                  <p>hello@tangerine.africa</p>
                </div>
                <div className="flex items-center gap-3 py-2 px-4 border w-fit border-orange-base rounded-full">
                  <Phone size={16} />
                  <p>02-016309500</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {FOOTER_LINKS.map((columns: { title: string; links: { name: string; href: string }[] }, index: number) => (
                  <FooterColumn title={columns.title} key={index}>
                    <ul className="regular-12 !font-gilroy-light flex flex-col gap-2 text-gray-800">
                      {columns.links.map((link: { name: string; href: string }) => (
                        <Link href={link.href} key={link.name}>
                          {link.name}
                        </Link>
                      ))}
                    </ul>
                  </FooterColumn>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="padding-container max-container flex w-full flex-col gap-14 py-20">
          <div className="flex flex-col md:flex-row gap-10 p-10 bg-orange-700 rounded-3xl">
            <div className="w-full flex flex-col gap-6">
              <h3 className="bold-14 text-white uppercase">Contact</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-medium w-full">Head office</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">14, Hughes Avenue, Alagomeji, Yaba.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-medium w-full">Abuja</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">5, Dambata close, Area 7, Garki, FCT</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-medium w-full">Benin</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">1st Floor of Austin Lying Plaza, 99A, First East Circular Road, Opposite Uvbi Primary School, By St Joseph Catholic Church, Benin City.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-medium w-full">Ibadan</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">1st Floor, Heritage Mall, Cocoa House, Dugbe, Ibadan.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-medium w-full">Kaduna</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">Hasfsat Plaza, No, 4 Constitution Road Kaduna.</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-6">
              <h3 className="bold-14 text-white uppercase">Retail Business OUTLET</h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-medium w-full">Abeokuta</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">23C Segun Osoba Way, Okelewo Abeokuta</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-medium w-full">Akure</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">Ground floor, BOI building Alagbaka Akure</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white regular-12 !font-gilroy-medium w-full">Onitsha</p>
                  <p className="text-white regular-12 !font-gilroy-light w-full">C1 & C4 No. 65 New Market Road Onitsha.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="bold-14 md:bold-18 whitespace-nowrap uppercase text-orange-base">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
