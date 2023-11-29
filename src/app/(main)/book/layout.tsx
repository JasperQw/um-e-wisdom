export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className=" w-full h-full flex">{children}</main>;
}
