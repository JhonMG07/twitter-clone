import type { AppProps } from "next/app";
/*
AppProps es una interfaz que define las propiedades que se
 pasan a un componente de aplicación en Next.js
*/
import { Toaster } from "react-hot-toast";
import {SessionProvider} from "next-auth/react";

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import EditModal from "@/components/modals/EditModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster/>
      <EditModal/>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
