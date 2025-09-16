import Navbar from "@/components/layout/navbar";
import AppSidebar from "@/components/layout/app-sidebar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col items-start w-11/12 min-h-screen">
          <Navbar />
          <div className="flex flex-col items-center flex-1 w-full gap-20">
            <div className="flex flex-col flex-1 max-w-5xl gap-20 p-5">
              {children}
            </div>

            <footer className="flex items-center justify-center w-full gap-8 py-16 mx-auto text-xs text-center border-t">
              <p>
                Powered by{" "}
                <a
                  href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                  target="_blank"
                  className="font-bold hover:underline"
                  rel="noreferrer"
                >
                  Supabase
                </a>
              </p>
              <ThemeSwitcher />
            </footer>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
