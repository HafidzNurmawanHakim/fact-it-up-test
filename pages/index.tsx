import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { getSession, signOut, useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MasterLayout from "../app/layout/components/MasterLayout";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Anjay App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MasterLayout />
    </>
  );
}
