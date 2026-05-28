"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    document.cookie =
      "ironmind_demo_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl bg-red-500/10 hover:bg-red-500/20 transition border border-red-500/20 text-red-300"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
}