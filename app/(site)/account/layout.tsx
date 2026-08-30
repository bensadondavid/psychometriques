
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { getCurrentSession } from '@/lib/auth/get-current-session'
import { withQueryProfile } from '@/lib/database/query-profiler'


export default async function AppLayout({ children }: { children: React.ReactNode }) {
  return withQueryProfile('layout:/account', () => renderAppLayout(children))
}

async function renderAppLayout(children: React.ReactNode) {
  const session = await getCurrentSession()
  if (!session) redirect('/login')

  return (
      <SidebarProvider>
        <AppSidebar user={session.user} />
          <main className="min-w-0 flex-1 bg-background/85">
            <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur-md">
              <SidebarTrigger />
              <span className="h-5 w-px bg-border" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Espace de préparation</p>
            </header>
            {children}
          </main>
      </SidebarProvider>
  );
}
