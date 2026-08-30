import Link from "next/link";
import { House, Settings } from "lucide-react";

import { AcademicMark } from "@/components/brand/academic-mark";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOutBtn } from "../ui/logOutBtn";
import { NavLink } from "./NavLinks";

type AppSidebarProps = {
  user: {
    name: string
    email: string
    image?: string | null
  }
}

export function AppSidebar({ user }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <Link href="/account/home" className="text-sidebar-foreground transition-opacity hover:opacity-80">
          <AcademicMark compact />
        </Link>
      </SidebarHeader>
      <SidebarContent className="pt-3">
        <div className="mx-3 mb-4 flex items-center gap-3 border-b border-sidebar-border px-1 pb-4">
          <Avatar className="size-9">
            <AvatarImage
              src={user.image ?? ""}
              alt={user.name ?? "User avatar"}
            />
            <AvatarFallback className="bg-sidebar-primary font-serif text-base text-sidebar-primary-foreground">
              {user.name?.slice(0, 1).toUpperCase() ||
                user.email?.slice(0, 1).toUpperCase() ||
                "U"}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-foreground">
              {user.name ?? "Utilisateur"}
            </p>
            <p className="truncate text-xs text-sidebar-foreground/55">
              {user.email ?? ""}
            </p>
          </div>
        </div>
        <SidebarMenu className="px-3">
          <NavLink href="/account/home"><House aria-hidden="true" /><span>Accueil</span></NavLink>
          <NavLink href="/account/parametres"><Settings aria-hidden="true" /><span>Paramètres</span></NavLink>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-3">
        <LogOutBtn />
      </SidebarFooter>
    </Sidebar>
  );
}
