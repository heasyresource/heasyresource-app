import {
  Badge,
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Paper,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import classes from "../../leave/leave.module.css";
import { IconMail, IconPrinter } from "@tabler/icons-react";
import EmployeePaySlipTable from "../../components/EmployeePaySlipTable";

const PaySlip = () => {
  return (
    <Container bg={"#f8f9fa"} className={classes.container} size="100%">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Stack gap={0}>
            <Paper style={{ borderRadius: "15px" }}>
              <Group p={"lg"} justify="space-between" align="center">
                <Text fw={700} fz={32} c={"#4D4D4D"}>
                  PaySlip
                </Text>
                <Group justify="space-between" align="center">
                  <Button
                    c={"black"}
                    variant="transparent"
                    fz={16}
                    fw={400}
                    rightSection={<IconPrinter color="#84ADFF" size={20} />}
                  >
                    Print
                  </Button>
                  <Button
                    c={"black"}
                    variant="transparent"
                    fz={16}
                    fw={400}
                    rightSection={<IconMail color="#84ADFF" size={20} />}
                  >
                    Email
                  </Button>
                  <Badge
                    fw={500}
                    fz={12}
                    tt={"capitalize"}
                    color={"blue"}
                    variant="light"
                    radius={"5px"}
                    w={292}
                    py={15}
                  >
                    Payroll Period: From 01/01/2023 to 01/15/2023
                  </Badge>
                </Group>
              </Group>
            </Paper>
            <Paper bg={'rgba(126, 166, 244, 0.06)'} style={{ borderRadius: "15px" }}>
              <Group p={20} justify="space-between">
                <Text c={"#838383"} fz={22} fw={700}>
                  Total Annual Pay
                </Text>
                <Text fz={28} fw={700}>1,500,789.00</Text>
              </Group>
            </Paper>
            <EmployeePaySlipTable />
          </Stack>
        </div>
      </div>
    </Container>
  );
};

export default PaySlip;
