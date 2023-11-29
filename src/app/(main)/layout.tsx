import NavBar from "./(components)/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full w-full">
      <NavBar />
      <div className="pt-[4rem] h-full w-full">{children}</div>
    </main>
  );
}
