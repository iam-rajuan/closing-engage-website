import { Outlet } from "react-router-dom";
import { PublicFooter, PublicHeader } from "@/components/marketing";

export function PublicLayout() {
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
