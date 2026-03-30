import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PublicFooter, PublicHeader } from "@/components/marketing";

export function PublicLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <PublicHeader />
      <main>
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
}
