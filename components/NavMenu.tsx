"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { components } from "@/lib/service-data";

export function NavMenu() {
  const path = usePathname();
  console.log(path);

  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem
          className={` 
        ${
          path === "/"
            ? " border-b text-lg bg-accent border-[#344A80] text-[#344A80]  "
            : null
        }
         `}
        >
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem
          className={`
        ${
          path.startsWith("/services")
            ? " border-b text-lg bg-accent border-[#344A80] text-[#344A80]  "
            : null
        }
         `}
        >
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[400px] gap-3 p-4  md:w-[500px] md:grid-cols-2 lg:w-[700px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="hover:text-[#344A80]  "
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={` 
        ${
          path.startsWith('/careers')
            ? " border-b text-lg bg-accent border-[#344A80] text-[#344A80]  "
            : null
        }
         `}
        >
          <Link href="/careers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Join
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={` 
        ${
          path.startsWith("/blogs")
            ? " border-b text-lg bg-accent border-[#344A80] text-[#344A80]  "
            : null
        }
         `}
        >
          <Link href="/blogs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={` 
        ${
          path.startsWith("/about")
            ? " border-b text-lg bg-accent border-[#344A80] text-[#344A80]  "
            : null
        }
         `}
        >
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
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
            "block select-none space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg tracking-tight font-light  leading-none ">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-tight text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
