// _app.js or _app.tsx
import "@/styles/globals.css"; // Assuming you have a global CSS file
import localFont from "next/font/local";

// Import the font
const Suisse = localFont({
  src: "./fonts/SuisseIntl-Regular.otf",
  variable: "--font-suisse"
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${Suisse.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
