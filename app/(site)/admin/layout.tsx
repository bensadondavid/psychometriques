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
  if (user?.role !== "admin") redirect("/account/home");

  return (
    <SidebarProvider>
      <AdminSidebar user={session.user} />
      <div className="min-w-0 flex-1 bg-background/85">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur-md">
          <SidebarTrigger />
          <span className="h-5 w-px bg-border" />
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Administration académique</p>
        </header>
        {children}
      </div>
    </SidebarProvider>
  );
}
