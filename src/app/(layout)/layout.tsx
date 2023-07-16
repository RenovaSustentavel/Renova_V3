import "@/app/globals.css";
import MainNavbar from "@/components/MainNavbar/MainNavbar";
import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
  title: "Renova",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
