import PlausibleProvider from "next-plausible";

export default async function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlausibleProvider domain="redshirtsports.xyz">
      <main className="loading mt-12 antialiased">{children}</main>
    </PlausibleProvider>
  );
}
