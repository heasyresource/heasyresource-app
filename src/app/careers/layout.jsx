import Loading from "@/components/Loading";
import { Box } from "@mantine/core";
import React, { Suspense } from "react";

const layout = ({ children }) => {
  return (
    <Box style={{ height: "100%" }}>
      <Suspense fallback={<Loading />}>
        <div style={{ height: "100%" }}>{children}</div>
      </Suspense>
    </Box>
  );
};

export default layout;
