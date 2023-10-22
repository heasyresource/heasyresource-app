import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function SecureUser({ children }) {
  const router = useRouter();

  const [isDataPresent, setIsDataPresent] = useState(true);

  useEffect(() => {
    if (isDataPresent) {
      const checkData = setInterval(() => {
        const checkStore =
          localStorage.getItem("user") &&
          localStorage.getItem("accessUserToken");

        if (!checkStore) {
          setIsDataPresent(false);

          const lastPathname = router.pathname;
          localStorage.getItem("user") && localStorage.removeItem("user");
          localStorage.getItem("accessUserToken") &&
            localStorage.removeItem("accessUserToken");

          router.push(`/signin?redirect=${lastPathname}`);
        }
      }, 1000);

      return () => clearInterval(checkData);
    }
  }, [isDataPresent, router]);

  return isDataPresent ? children : <></>;
}
