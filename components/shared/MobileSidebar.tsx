"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import {
  CoinsIcon,
  HomeIcon,
  Layers2,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const routes = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "workflows", label: "Workflows", icon: Layers2 },
  { href: "credentials", label: "Credentials", icon: ShieldCheckIcon },
  { href: "billing", label: "Belling", icon: CoinsIcon },
];

function MobileSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const activeRoute = routes.find(
    (route) =>
      (route.href.length > 0 && pathname.includes(route.href)) || routes[0]
  );
  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] space-x-4"
            side={"left"}
          >
            <div>LOGO</div>
            <div className="flex flex-col gap-1 mt-3">
              {routes.map((route) => (
                <Link
                  key={route.label}
                  href={route.href}
                  className={buttonVariants({
                    variant:
                      activeRoute?.href === route.href
                        ? "sidebarActiveItem"
                        : "sidebarItem",
                  })}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <route.icon />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default MobileSidebar;
