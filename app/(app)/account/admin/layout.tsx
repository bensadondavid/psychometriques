import { redirect } from "next/navigation";
import Link from "next/link";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { prisma } from "@/lib/database/prisma";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  });
  if (user?.role !== "admin") redirect("/account/home");

  return <>
    <nav aria-label="Administration" className="flex flex-wrap items-center gap-5 border-b bg-card px-6 py-3 text-sm">
      <span className="font-semibold text-primary">Administration</span>
      <Link href="/account/admin/catalogue" className="text-muted-foreground hover:text-foreground">Catalogue</Link>
      <Link href="/account/admin/questions/import" className="text-muted-foreground hover:text-foreground">Importer des questions</Link>
    </nav>
    {children}
  </>;
}
