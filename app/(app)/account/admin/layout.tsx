import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { isActiveAdmin } from "@/lib/auth/is-active-admin";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");

  if (!(await isActiveAdmin(session.user.id))) redirect("/account/home");

  return children;
}
