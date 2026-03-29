import { Outlet } from "react-router-dom";
import { FooterBandSection, PublicFooter, PublicHeader } from "@/components/marketing";

export function PublicLayout() {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <main>
        <Outlet />
      </main>
      <FooterBandSection />
      <PublicFooter />
    </div>
  );
}
