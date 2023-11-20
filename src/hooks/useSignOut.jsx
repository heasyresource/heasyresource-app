import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const useSignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    const result = await signOut({ redirect: false, callbackUrl: "/signin" });
    router.push(result.url);
  };

  return {
    handleSignOut,
  };
};

export default useSignOut;
