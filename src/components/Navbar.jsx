"use client";
import { Burger, Container, Drawer, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import React from "react";

const links = [
  { link: "/company", label: "Company" },
  { link: "/resources", label: "Resources" },
  { link: "/pricing", label: "Pricing" },
  { link: "/contact", label: "Contact" },
];
const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className="px-[12px] py-[8px]"
      style={{
        textDecoration: "none",
        color: "#A3A3A3",
        padding: "8px 12px",
        fontSize: "15px",
      }}
    >
      {link.label}
    </Link>
  ));
  return (
    <>
      <header style={{ height: "60px" }}>
        <Container
          size="xl"
          className="h-full flex justify-between items-center"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 0",
          }}
        >
          <Image
            src={"/assets/svgs/HRlogo.svg"}
            style={{ width: "12rem" }}
            alt="hr-logo"
          />
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
      <Drawer opened={opened}>{/* Drawer content */}</Drawer>
    </>
  );
};

export default Navbar;
