"use client";

import { FooterLinkType } from "@/app/types/footerlinks";
import { getDataPath } from "@/app/utils/paths";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Header/Logo";

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        SetFooterlink(data.FooterLinkData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="border-t-2 border-darkblue dark:border-primary">
      <div className="container py-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 items-center">
          {/* LEFT - LOGO */}
          <div className="flex justify-center sm:justify-start">
            <Logo />
          </div>
          
          {/* CENTER - SOCIALS */}
          <div className="flex justify-center items-center">
            <div className="flex gap-3">
              <Link href="/" onClick={(e) => e.preventDefault()}>
                <Icon
                  icon="tabler:brand-instagram"
                  width={32}
                  height={32}
                  className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-1 hover:text-primary dark:hover:text-primary duration-300"
                />
              </Link>
              <Link href="/" onClick={(e) => e.preventDefault()}>
                <Icon
                  icon="tabler:brand-dribbble"
                  width={32}
                  height={32}
                  className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-1 hover:text-primary dark:hover:text-primary duration-300"
                />
              </Link>
              <Link href="/" onClick={(e) => e.preventDefault()}>
                <Icon
                  icon="tabler:brand-twitter-filled"
                  width={32}
                  height={32}
                  className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-1 hover:text-primary dark:hover:text-primary duration-300"
                />
              </Link>
              <Link href="/" onClick={(e) => e.preventDefault()}>
                <Icon
                  icon="tabler:brand-youtube-filled"
                  width={32}
                  height={32}
                  className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-1 hover:text-primary dark:hover:text-primary duration-300"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT - CONTACT INFO */}
          <div className="flex flex-col justify-center items-center sm:items-start gap-3 py-4">
            <div className="flex gap-2 items-center justify-center sm:justify-start">
              <Icon
                icon={"tabler:map-pin"}
                width={14}
                height={14}
                className="text-lightgrey flex-shrink-0"
              />
              <p className="text-xs font-normal text-offwhite line-clamp-2 text-center sm:text-left">
                Okhla, New Delhi
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center sm:justify-start">
              <Icon
                icon={"tabler:phone"}
                width={16}
                height={16}
                className="text-lightgrey flex-shrink-0"
              />
              <Link
                href="tel:+918447510392"
              >
                <p className="text-xs font-normal text-offwhite hover:text-primary dark:hover:text-primary text-center sm:text-left">
                  +91 84475 10392
                </p>
              </Link>
            </div>

          </div>
        </div>
      </div>
      <div className="py-1">
        <p className="text-center text-xs">
          Copyright @2026 - All Rights Reserved {"  "}
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
