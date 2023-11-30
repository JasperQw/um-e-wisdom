"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";
export default function NavbarLogo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>UM-e-Wisdom</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap-3 p-3 w-[20rem]">
              <ListItem href="/book" title="Book">
                Browse all books available in the libraries.
              </ListItem>
              <ListItem href="/library" title="Libraries">
                All the available libraries in Universiti Malaya with their
                details.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
