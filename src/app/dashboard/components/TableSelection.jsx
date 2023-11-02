"use client";
import cx from "clsx";
import { useState } from "./mantine";
import {
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  rem,
  Space,
  Box,
} from "@mantine/core";
import classes from "../dashboard.module.css";
import { employeeList } from "@/utils/publicFunctions";

export function TableSelection() {
  const [selection, setSelection] = useState(["1"]);
  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === employeeList.length ? [] : data.map((item) => item.id)
    );

  const rows = employeeList.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <>
        <Table.Tr
          className={cx({ [classes.rowSelected]: selected })}
          bg="#ffff"
          py="32px"
          key={item.id}
        >
          <Table.Td>
            <Checkbox
              color="#3377FF"
              checked={selection.includes(item.id)}
              onChange={() => toggleRow(item.id)}
            />
          </Table.Td>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={26} src={item.avatar} radius={26} />
            </Group>
          </Table.Td>
          <Table.Td style={{ whiteSpace: "nowrap" }}>{item.firstName}</Table.Td>
          <Table.Td style={{ whiteSpace: "nowrap" }}>{item.lastName}</Table.Td>
          <Table.Td style={{ whiteSpace: "nowrap" }}>
            {item.employeeEmail}
          </Table.Td>
          <Table.Td style={{ whiteSpace: "nowrap" }}>
            {item.department}
          </Table.Td>
          <Table.Td style={{ whiteSpace: "nowrap" }}>{item.role}</Table.Td>
          <Table.Td style={{ whiteSpace: "nowrap" }}>
            {item.moreDetails}
          </Table.Td>
        </Table.Tr>
        <Space h={"20px"} />
      </>
    );
  });

  return (
    <ScrollArea mt="50px">
      <Table miw="200px" verticalSpacing="sm" withRowBorders={false}>
        <Table.Thead c="#2F2F2F">
          <Table.Tr>
            <Table.Th style={{ width: rem(40), whiteSpace: "nowrap" }}>
              <Checkbox
                color="#3377FF"
                onChange={toggleAll}
                checked={selection.length === employeeList.length}
                indeterminate={
                  selection.length > 0 &&
                  selection.length !== employeeList.length
                }
              />
            </Table.Th>
            <Table.Th></Table.Th>
            <Table.Th style={{ whiteSpace: "nowrap" }}>First Name</Table.Th>
            <Table.Th style={{ whiteSpace: "nowrap" }}>Last Name</Table.Th>
            <Table.Th style={{ whiteSpace: "nowrap" }}>Employee Email</Table.Th>
            <Table.Th style={{ whiteSpace: "nowrap" }}>Department</Table.Th>
            <Table.Th style={{ whiteSpace: "nowrap" }}>Role</Table.Th>
            <Table.Th style={{ whiteSpace: "nowrap" }}>More Details</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
