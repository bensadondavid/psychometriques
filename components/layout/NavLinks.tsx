"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <SidebarMenuItem className="py-1">
      <SidebarMenuButton asChild isActive={isActive}>
        <Link
          href={href}
          onClick={() => {
            setOpenMobile(false);
          }}
        >
          {children}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
