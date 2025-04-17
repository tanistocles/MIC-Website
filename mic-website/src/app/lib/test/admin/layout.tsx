import "./global.css";

export const metadata = {
  title: "Edit Contact Page",
  description: "Example application with forms adn sqlite to edit contact page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
