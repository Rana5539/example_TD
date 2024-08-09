"use client"
import { Button } from "@/components/ui/button"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Navbar() {
  return (
    <NavigationMenu className="m-auto mt-2 w-[100%]  ">
    <NavigationMenuList className=" space-x-2">
      
      
        <Link href="/" legacyBehavior passHref>
          
            <div className="overflow-hidden rounded-full w-[50px] h-[50px] mr-20">
              <Image
                src="/dhives.jpg"
                alt="Logo"
                width={50} // The size should match the wrapper's dimensions
                height={50}
                className="object-cover"
              />
            </div>
          
        </Link>
      

      <NavigationMenuItem>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Our Projects</NavigationMenuTrigger>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Connect</NavigationMenuTrigger>
      </NavigationMenuItem>
      
      <Link href="/contact" legacyBehavior passHref >
      <Button variant="outline" className="ml-20">Contact us</Button>
      </Link>
      
    </NavigationMenuList>

   
     
   
  </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default Navbar
