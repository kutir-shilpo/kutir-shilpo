import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/component/core/footer/footer";
import AuthProvider from "@/providers/AuthProvider";
import NavBer from "@/component/core/navber/navber";
import Toaster from "@/component/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kutir Shilpo",
  // description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AuthProvider>
            <div className="flex bg-slate-100 flex-col min-h-screen">
              <NavBer />
              <div className="container">{children}</div>
              <div className="mt-auto">
                <Footer />
              </div>
            </div>
            <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
