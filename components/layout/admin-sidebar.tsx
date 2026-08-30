import { FileUp, House, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { AcademicMark } from "@/components/brand/academic-mark";
import { NavLink } from "@/components/layout/NavLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOutBtn } from "@/components/ui/logOutBtn";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";

type AdminSidebarProps = {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
};

export function AdminSidebar({ user }: AdminSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <Link href="/account/home" className="text-sidebar-foreground transition-opacity hover:opacity-80">
          <AcademicMark compact />
        </Link>
        <div className="mt-3 flex items-center gap-3 border-t border-sidebar-border pt-3">
          <div className="grid size-9 shrink-0 place-items-center rounded-full border border-sidebar-primary/50 text-sidebar-primary">
            <ShieldCheck className="size-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Administration</p>
            <p className="truncate text-xs text-sidebar-foreground/55">
              Banque de questions
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Questions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavLink href="/admin/questions/import">
                <FileUp aria-hidden="true" />
                <span>Importer les questions</span>
              </NavLink>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavLink href="/account/home">
                <House aria-hidden="true" />
                <span>Espace utilisateur</span>
              </NavLink>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-2 py-2">
          <Avatar className="size-9">
            <AvatarImage src={user.image ?? ""} alt={user.name} />
            <AvatarFallback className="bg-sidebar-primary font-serif text-sidebar-primary-foreground">
              {user.name.slice(0, 1).toUpperCase() ||
                user.email.slice(0, 1).toUpperCase() ||
                "A"}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <p className="truncate text-xs text-sidebar-foreground/55">
              {user.email}
            </p>
          </div>
        </div>
        <LogOutBtn />
      </SidebarFooter>
    </Sidebar>
  );
}
