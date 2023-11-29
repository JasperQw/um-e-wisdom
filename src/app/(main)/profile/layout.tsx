import { Separator } from "@/components/ui/separator";
import Sidebar from "./(components)/Sidebar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-[4rem] pb-10 pt-5">
      <h1 className="text-[1.6rem] font-semibold">Profile</h1>
      <p className="font-[300]">Manage your account settings</p>
      <Separator className="my-8" />
      <div className="flex space-x-10">
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
