import "./globals.css";

export const metadata = {
  title: "Emil Maharramov",
  description: "Web & Mobile Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="google-site-verification" content="xjFHHFjRSjaMm5TKTtn1AnAbRsubf09Iv4VtwgUaw9o" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

