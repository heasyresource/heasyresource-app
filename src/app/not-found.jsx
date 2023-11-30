import { headers } from "next/headers";
import { getSubdomain } from "@/utils/publicFunctions";
import styles from "./not-found.module.css";
import { Button, Image } from "@mantine/core";
import Link from "next/link";

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

  return (
    <div className={styles.container}>
      <div>
        <Image
          my={30}
          className={styles.image}
          src={"/assets/images/404.png"}
          alt="not found image"
        />
      </div>
      <div className={styles.content}>
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
          <Link href={link}>
            <Button
              variant="contained"
              size="sm"
              style={{ backgroundColor: "#3377FF" }}
              tt="capitalize"
              aria-label="return home"
            >
              return home
            </Button>
          </Link>
        </a>
      </div>
    </div>
  );
}
