"use client"
import {NavLink} from "@/src/shared/types";
import Link from "next/link";
import Logo from "@/public/icons/logo.svg"
import TelegramIcon from "@/public/icons/telegram-footer.svg"
import InstagramIcon from "@/public/icons/instagram.svg"
import LinkedInIcon from "@/public/icons/linkedin.svg"
export const Footer = () => {
  const LINKS : NavLink[] = [
    {
      title : "About us",
      path : "#about-us"
    },
    {
      title : "Our projects",
      path : "#our-projects"
    },
    {
      title : "Services",
      path : "#services"
    },
    {
      title : "Partners",
      path : "#partners"
    },
    {
      title : "Get in touch",
      path : "#get-in-touch"
    },
  ]

  return <footer className="h-[213px] w-full border-t border-black border-opacity-20">
    <div className="container h-full flex justify-between items-center">
      <Link href={"/"} className={"flex h-full items-center gap-x-2.5"}>
        <Logo className={"w-[43.5px] h-[36px]"} />
        <h1 className={"font-unbounded font-semibold text-2xl text-black100"}>
          Wrap
        </h1>
      </Link>
      <nav className={"flex gap-[30px]"}>
        {LINKS.map((link, index) => {
          return <Link key={`header-link-${index}`} href={link.path}>
            <p className={"font-spaceGrotesk text-black100 text-lg hover:opacity-50 transition-all delay-75 ease-linear"}>
              {link.title}
            </p>
          </Link>
        })}
      </nav>
      <div className={"flex flex-col items-end gap-y-[5px] font-spaceGrotesk font-medium text-sm text-[#0F172A] text-opacity-70"}>
        <div className={"flex"}>
          <Link className={"p-4"} href={"https://linked.in"}>
            <LinkedInIcon className={"w-6 h-6 opacity-70 "} />
          </Link>
          <Link className={"p-4"} href={"https://linked.in"}>
            <InstagramIcon className={"w-6 h-6 opacity-70 "} />
          </Link>
          <Link className={"p-4"} href={"https://linked.in"}>
            <TelegramIcon className={"w-6 h-6 fill-[#020817] opacity-70"} />
          </Link>
        </div>
        <p>
          contact@wrap.com
        </p>
        <Link href={"tel:+77077333854"}>
          +7 (707) 733 3854
        </Link>
        <p>
          © 2024 TOO "Wrap"
        </p>
      </div>
    </div>
  </footer>
}