import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session, "session");
  return (
    <div>
      <p>
        {" "}
        Hi {session && session?.user?.firstName}{" "}
        {session && session?.user?.lastName},
      </p>
    </div>
  );
};

export default page;
