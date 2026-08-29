import { FileUp, House, ShieldCheck } from "lucide-react";

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
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Administration</p>
            <p className="truncate text-xs text-muted-foreground">
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
            <AvatarFallback className="bg-primary font-semibold text-primary-foreground">
              {user.name.slice(0, 1).toUpperCase() ||
                user.email.slice(0, 1).toUpperCase() ||
                "A"}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>
        <LogOutBtn />
      </SidebarFooter>
    </Sidebar>
  );
}
