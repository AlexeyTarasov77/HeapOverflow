import { Sidebar } from "./sidebar";

export function Layout({
  children,
  links,
}: {
  children: React.ReactNode;
  links: { name: string; href: string; iconURL: string }[];
}) {
  return (
    <>
      <main className="h-screen">
        <div className="flex h-full gap-5">
            <Sidebar links={links} />
            {children}
        </div>
      </main>
    </>
  );
}
