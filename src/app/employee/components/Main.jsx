import { AppShell, AppShellMain } from "@mantine/core";
import React, { Suspense } from "react";
import Loading from "../../../components/Loading";

const Main = ({ children }) => {
  return (
    <AppShellMain style={{ backgroundColor: "#F8F9FA", zIndex: "1000" }}>
      <Suspense fallback={<Loading />}>
        <div>{children}</div>
      </Suspense>
    </AppShellMain>
  );
};

export default Main;
