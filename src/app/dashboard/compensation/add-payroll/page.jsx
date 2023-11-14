import { Button, Card, CardSection, Group, Text } from "@mantine/core";
import React from "react";
import CompensationNav from "@/components/CompensationLayout/CompensationNav";
import PayrollInputField from "@/components/CompensationLayout/PayrollInputField";
import { IconFileUpload } from "@tabler/icons-react";

const AddPayroll = () => {
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffff",
          borderRadius: "15px",
          borderBottom: "1px solid #DDDDDD",
          minHeight: "390px",
          margin: "0px",
        }}
      >
        <CardSection
          pt="25px"
          pb="55px"
          style={{ borderBottom: "1px solid #DDDDDD" }}
        >
          <CompensationNav tabTitle={"Compensation"} />
        </CardSection>
        <Group px={40} py={45}>
            <Text fz={24} fw={700}>Add Payroll</Text>
            <Button
            variant="filled"
            color="rgba(126, 166, 244, 0.19)"
            rightSection={<IconFileUpload color="black" size={22} />}
            leftSection={<Text c={'black'} fw={700}>Import List</Text>}
            >
            </Button>
        </Group>
        <PayrollInputField />
      </Card>
    </>
  );
};

export default AddPayroll;
1