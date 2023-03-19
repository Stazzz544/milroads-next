import Navigation from "@/components/navigation/navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PhotoProvider } from "react-photo-view";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PhotoProvider>
        <Navigation />
        <Component {...pageProps} />
      </PhotoProvider>
    </>
  );
}
