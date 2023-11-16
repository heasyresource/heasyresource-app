import { ActionIcon, Group, ScrollArea, Table } from "@mantine/core";
import classes from "../dashboard.module.css";
import cx from "clsx";
import { useState } from "react";
import { IconPrinter } from "@tabler/icons-react";

const elements = [
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
  {
    grossSalary: "N906,345",
    amountPaid: "N806,456",
    date: "May 19, 2023",
    status: "successful",
  },
];

export default function PaymentTable() {
  const [scrolled, setScrolled] = useState(false);

  const rows = elements.map((element, i) => (
    <Table.Tr key={i}>
      <Table.Td fw={500}>{element.grossSalary}</Table.Td>
      <Table.Td fw={500}>{element.amountPaid}</Table.Td>
      <Table.Td fw={500}>{element.date}</Table.Td>
      <Table.Td c={"#43D72B"}>{element.status}</Table.Td>
      <Table.Td>
        <IconPrinter color="#84ADFF" />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea
      type="never"
      h={240}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table stickyHeader stickyheaderoffset={60}>
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
        >
          <Table.Tr className={classes.tableHeader}>
            <Table.Th c={"#838383"}>Gross Salary</Table.Th>
            <Table.Th c={"#838383"}>Amount Paid</Table.Th>
            <Table.Th c={"#838383"}>Date</Table.Th>
            <Table.Th c={"#838383"}>Status</Table.Th>
            <Table.Th c={"#838383"}>Print</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
        <Table.Caption>Scroll page to see sticky thead</Table.Caption>
      </Table>
    </ScrollArea>
  );
}
