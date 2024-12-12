"use client"
import {NavLink} from "@/src/shared/types";
import Link from "next/link";
import {UIButton} from "@/src/shared/ui";
import Logo from "@/public/icons/logo.svg"
import TelegramIcon from "@/public/icons/telegram.svg"
export const Header = () => {
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

  const btnHandler = () => {
    window.open("https://t.me/@FooFie213");
  }
  return <header className="h-[140px] w-full">
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
      <UIButton onClick={btnHandler}>
        <div className={"flex items-center gap-6"}>
          <p className={"text-white font-medium font-spaceGrotesk text-base"}>
            Contact us
          </p>
          <TelegramIcon className={"w-4 h-4 fill-white"}/>
        </div>
      </UIButton>
    </div>
  </header>
}