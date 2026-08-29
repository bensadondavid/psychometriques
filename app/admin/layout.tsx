import { redirect } from "next/navigation";

import { AdminSidebar } from "@/components/layout/admin-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getCurrentSession } from "@/lib/auth/get-current-session";
import { prisma } from "@/lib/database/prisma";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentSession();
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  });
  if (user?.role !== "ADMIN") redirect("/account/home");

  return (
    <SidebarProvider>
      <AdminSidebar user={session.user} />
      <div className="min-w-0 flex-1">
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
}
