import "./globals.css";

export const metadata = {
  title: "1_animation",
  description: "Practicing web Animation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
  );
}
