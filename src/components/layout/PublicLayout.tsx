import { Outlet } from "react-router-dom";
import { FooterBandSection, PublicFooter, PublicHeader } from "@/components/marketing";

export function PublicLayout() {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <main className="pb-20">
        <Outlet />
      </main>
      <FooterBandSection />
      <PublicFooter />
    </div>
  );
}
