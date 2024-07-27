import Footer from "@/components/general/Footer";
import Navbar from "@/components/general/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className="relative overflow-hidden">{children}</div>
      <Footer />
    </main>
  );
}
