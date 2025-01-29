"use client";

import { Button } from "@/components/ui/button";
import { mainLayoutOptions } from "@/config/dataConfig";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarLoader } from "react-spinners";

function MainLayout({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useUser();
  const pathname = usePathname();

  return (
    <>
      {!isLoaded && <BarLoader width={"100%"} color="#006acc" />}
      {isLoaded && (
        <div className="flex flex-col h-screen md:flex-row">
          <aside className="hidden md:block w-64  bg-white dark:bg-slate-950">
            <nav className="mt-8">
              <ul className="flex flex-col gap-2">
                {mainLayoutOptions.map((option, index) => (
                  <Link key={index} href={option.href}>
                    <Button
                      variant={
                        pathname === option.href
                          ? "sidebarBtnActive"
                          : "sidebarBtn"
                      }
                      size={"sidebar"}
                    >
                      <option.icon />
                      {option.label}
                    </Button>
                  </Link>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="p-2 md:p-4 overflow-y-auto flex-1 flex flex-col">
            <header>
              <h2 className="tabHeading mb-3">
                {mainLayoutOptions.find(option => option.href === pathname)?.label}
              </h2>
            </header>
            {children}
          </main>
          <nav >
              <ul className="flex gap-2">
                {mainLayoutOptions.map((option, index) => (
                  <Link key={index} href={option.href}>
                    <Button
                      variant={
                        pathname === option.href
                          ? "sidebarBtnActive"
                          : "sidebarBtn"
                      }
                      size={"sidebar"}
                    >
                      <option.icon />
                      {option.label}
                    </Button>
                  </Link>
                ))}
              </ul>
            </nav>
        </div>
      )}
    </>
  );
}
export default MainLayout;
