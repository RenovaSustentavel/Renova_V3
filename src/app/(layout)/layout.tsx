import MainNavbar from "@/app/(layout)/components/MainNavbar/MainNavbar";
import "@/app/globals.css";
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
