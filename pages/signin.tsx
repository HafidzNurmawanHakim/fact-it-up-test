import { getCsrfToken, getProviders, useSession } from "next-auth/react";
import LoginComponent from "../modules/auth/component/LoginComponent";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, []);
  return <LoginComponent />;
}
