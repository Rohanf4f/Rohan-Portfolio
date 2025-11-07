import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Rohan Patil – Software Developer",
  description:
    "Rohan Patil is a Software Developer from Pune, Maharashtra, and a 2025 Computer Science Engineering graduate from Walchand College of Engineering, Sangli. He builds fast, clean, and responsive android apps using java , XML, Android Studio, MongoDB, Firebase.",
  keywords: [
    "Rohan",
    "Rohan Patil",
    "whorohanpatil",
    "Rohan Patil portfolio",
    "Rohan Patil developer",
    "Rohan Patil software developer",
    "Rohan Patil backend developer",
    "Rohan Patil ML researcher",
    "Rohan Patil AI researcher",
    "Rohan Patil India",
    "Rohan Patil Maharashtra",
    "Rohan Patil Pune",
    "Rohan Patil Walchand College of Engineering",
    "Rohan Patil Sangli",

  ],
  authors: [
    { name: "Rohan Patil" },
    { name: "Rohan Patil", url: "https://rohanpatil.in" },
  ],
  creator: "Rohan Patil",
  publisher: "Rohan Patil",
  category: "Technology",
  metadataBase: new URL("https://rohanpatil.in"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rohan Patil – Full Stack Developer | React, Node, MongoDB",
    description:
      "Explore the portfolio of Rohan Patil, a Full Stack Developer skilled in MERN stack, TypeScript, Java, and more. Based in Bihar, India – building modern web apps with React, Node.js, and MongoDB.",
    url: "https://rohanpatil.in",
    siteName: "Rohan Patil",
    images: [
      {
        url: "/rohanpatil/rohanpatil.png",
        width: 600,
        height: 600,
      },
      {
        url: "/rohanpatil/rohanpatil.png",
        width: 500,
        height: 600,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Patil – Full Stack Developer | React & Node.js",
    description:
      "Rohan Patil is a Full Stack Web Developer from Bihar, India. Skilled in JavaScript, React, Node.js, MongoDB, NestJS, and more. Visit portfolio to know more.",
    siteId: "",
    creator: "@whorohanpatil",
    creatorId: "@whorohanpatil",
    images: ["/rohanpatil/rohanpatil.png"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    // other: {
    //   me: ['my-email', 'my-link'],
    // },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 bg-small dark:bg-none bg-fixed bg-cover bg-center h-screen text-gray-800 dark:text-gray-200 transition-colors duration-300`}
      >
         <ThemeProvider>
          <Provider>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
