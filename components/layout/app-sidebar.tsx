import Link from "next/link";
import { BookOpen, House, Settings } from "lucide-react";

import { AcademicMark } from "@/components/brand/academic-mark";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { getUserInitials } from "@/lib/user-initials";
import { Avatar, AvatarFallback } from "../ui/avatar";
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
        <SidebarMenu className="px-3">
          <NavLink href="/account/home"><House aria-hidden="true" /><span>Accueil</span></NavLink>
          <NavLink href="/account/programmes"><BookOpen aria-hidden="true" /><span>Mes programmes</span></NavLink>
          <NavLink href="/account/parametres"><Settings aria-hidden="true" /><span>Paramètres</span></NavLink>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-3">
        <div className="mb-3 flex items-center gap-3 border-b border-sidebar-border px-1 pb-3 pt-2">
          <Avatar className="size-9">
            <AvatarFallback className="bg-[#f5f0e7] font-serif text-base font-semibold text-[#45121d]">
              {getUserInitials(user.name)}
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
        <LogOutBtn />
      </SidebarFooter>
    </Sidebar>
  );
}
