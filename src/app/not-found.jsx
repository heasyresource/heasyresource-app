import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";
import styles from "./not-found.module.css";
import Image from "next/image";
import NextImage from "next/image";
import { Button } from "@mantine/core";

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");
  const subdomain = getSubdomain(domain);
  const defaultSubdomain = ["www", "heasyresource"];
  let link = "/";
  if (subdomain && !defaultSubdomain.includes(subdomain)) {
    const getSubdomain = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/companies/subdomain/${subdomain}`
    );
    const getSubdomainData = await getSubdomain.json();

    if (
      !(
        getSubdomainData.results !== null &&
        getSubdomainData.results?.isActive === 1
      )
    ) {
      link = process.env.NEXTAUTH_URL;
    }
  }

  // const styles = {
  //   container: {
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     minHeight: "100vh", // This ensures the container takes at least the full height of the viewport
  //   },
  //   title: {
  //     fontSize: "40px",
  //     color: "#007BFF",
  //     margin: "0",
  //     padding: "0",
  //     color: "#3377FF",
  //   },
  //   // error: {
  //   //   fontSize: "200px",
  //   //   color: "rgb(223 223 223)",
  //   //   textAlign: "center",
  //   //   margin: "-60px",
  //   // },
  //   message: {
  //     fontSize: "2rem",
  //     color: "#333",
  //     textAlign: "center",
  //     marginTop: "20px", // Add margin to space out the message
  //   },
  //   // Media query for smaller screens
  //   "@media (max-width: 600px)": {
  //     title: {
  //       fontSize: "30px", // Adjust font size for smaller screens
  //     },
  //     error: {
  //       fontSize: "50px", // Adjust font size for smaller screens
  //       margin: "-30px", // Adjust margin for smaller screens
  //     },
  //   },
  // };

  return (
    <div className={styles.container}>
      <div>
        <Image
          component={NextImage}
          my={30}
          className={styles.image}
          src={"/assets/png/404.png"}
          alt="not found image"
        />
      </div>
      <div className={styles.content}>
        {/* <h1 className={styles.error}>404</h1> */}
        <h1 className={styles.title}>Page Not Found</h1>
        <a
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
          href={link}
        >
          <Button
            variant="contained"
            size="sm"
            style={{ backgroundColor: "#3377FF" }}
            component="a"
            href={link}
            tt="capitalize"
          >
            return home
          </Button>
        </a>
      </div>
    </div>
  );
}
