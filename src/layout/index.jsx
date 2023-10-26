"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SecureUser({ children }) {
  const router = useRouter();
  const lastPathname = usePathname();

  const [isDataPresent, setIsDataPresent] = useState(true);

  useEffect(() => {
    if (isDataPresent) {
      const checkData = setInterval(() => {
        const checkStore =
          localStorage.getItem("user") && localStorage.getItem("access_token");

        if (!checkStore) {
          setIsDataPresent(false);

          localStorage.getItem("user") && localStorage.removeItem("user");
          localStorage.getItem("access_token") &&
            localStorage.removeItem("access_token");

          router.push(`/signin?redirect=${lastPathname}`);
        }
      }, 1000);

      return () => clearInterval(checkData);
    }
  }, [isDataPresent, router, lastPathname]);

  return isDataPresent ? children : <></>;
}
