"use client"

import { NAV_LINKS } from "@/constants/general";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNavbar from "@/components/general/MobileNavbar";
import { NavbarMenu } from "../NavbarMenu";

const Navbar = () => {
  const pathname = usePathname();
  const [ activeMenu, setActiveMenu ] = useState<string | null>(null);

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

  const handleMenuClick = (key: string) => {
    setActiveMenu((prevMenu) => (prevMenu === key ? null : key));
  };

  const handleSubMenuClick = () => {
    setActiveMenu(null);
  };

  return (
    <div className="w-full z-30 py-5 fixed top-0 left-0 right-0 bg-white shadow-md">
      <nav className="flexBetween max-container padding-container">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Tangerine General"
            width={127}
            height={40}
          />
        </Link>

        <NavbarMenu />

        <div className="lg:flexCenter hidden gap-4">
          <Link href="/get-quote">
            <Button variant="secondary" size="sm">Get Started</Button>
          </Link>
        </div>

        <MobileNavbar />
      </nav>
    </div>
  );
};

export default Navbar;
