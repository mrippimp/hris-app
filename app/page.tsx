import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center flex-1 w-full gap-20">
        <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
          <div className="flex items-center justify-between w-full max-w-5xl p-3 px-5 text-sm">
            <div className="flex items-center gap-5 font-semibold">
              <Link href={"/"}>Next.js Supabase Starter</Link>
            </div>
            <AuthButton />
          </div>
        </nav>
        <div className="flex flex-col flex-1 max-w-5xl gap-20 p-5">
          <Hero />
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
  );
}
