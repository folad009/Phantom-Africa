import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-muted selection:bg-primary/25 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow w-full relative z-10">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
