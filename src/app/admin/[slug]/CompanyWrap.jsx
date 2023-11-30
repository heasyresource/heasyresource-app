"use client";
import useAdmin from "@/hooks/useAdmin";
import {
  Avatar,
  Badge,
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Select,
  Space,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "../../../components/AdminLayout/admin.module.css";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

const AcceptModal = dynamic(() => import("./ApproveModal"), { ssr: false });
const RejectModal = dynamic(() => import("./RejectModal"), { ssr: false });
const SuspendModal = dynamic(() => import("./SuspendModal"), { ssr: false });
const CompanyWrap = () => {
  const {
    companyInfo,
    handleAccept,
    handleReject,
    openAccept,
    openReject,
    closeAccept,
    closeReject,
    openedAccept,
    openedReject,
    loading,
    openedSuspend,
    openSuspend,
    closeSuspend,
    handleSuspend,
    form,
    countries,
    fields,
    companySize,
    back,
    gettingInfo,
  } = useAdmin();
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <AcceptModal
        loading={loading}
        opened={openedAccept}
        close={closeAccept}
        handleApproved={handleAccept}
      />
      <RejectModal
        loading={loading}
        opened={openedReject}
        close={closeReject}
        handleReject={handleReject}
      />
      <SuspendModal
        handleSuspend={handleSuspend}
        opened={openedSuspend}
        close={closeSuspend}
        loading={loading}
      />
      {gettingInfo ? (
        <Loading />
      ) : (
        <Container className={classes.infoContainer} size="100%">
          <div className={classes.inner}>
            <div className={classes.infoContent}>
              <div className={classes.headerContent}>
                <Group p={"25px"} justify="space-between">
                  <Group>
                    <Avatar
                      radius={"xl"}
                      style={{ borderRadius: "50%" }}
                      color="blue"
                      src={companyInfo.logoUrl || "/assets/images/cmpLogo.png"}
                    />
                    <Text c={"#555555"} fz={{ sm: "20px", base: "15px" }}>
                      {companyInfo.name}
                    </Text>
                  </Group>
                </Group>
              </div>
            </div>
            <Space h={30} />
            <Container size="100%">
              <Text px={20} fz={24} fw={700}>
                General Information
              </Text>
              <div className={classes.infoMainContent}>
                <Space h={36} />
                <div className={classes.generalInfo}>
                  <Grid justify="space-between" align="center">
                    <GridCol span={{ xs: 12, sm: 12, md: 6, lg: "content" }}>
                      <Avatar
                        size={"lg"}
                        radius={"xl"}
                        style={{ borderRadius: "50%" }}
                        color="blue"
                        src={
                          companyInfo.logoUrl || "/assets/images/cmpLogo.png"
                        }
                      />
                    </GridCol>
                    <GridCol span={{ xs: 12, sm: 12, md: 6, lg: "content" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text c="dimmed" size="sm" lh={1} mb={17}>
                          Company Name
                        </Text>
                        <Text fw={500} size="1.1rem" lh={1}>
                          {companyInfo.name}
                        </Text>
                      </div>
                    </GridCol>
                    <GridCol span={{ xs: 12, sm: 12, md: 6, lg: "content" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text c="dimmed" size="sm" lh={1} mb={17}>
                          Company Size
                        </Text>
                        <Text fw={500} size="1.1rem" lh={1}>
                          {companyInfo.size}
                        </Text>
                      </div>
                    </GridCol>
                    <GridCol span={{ xs: 12, sm: 12, md: 6, lg: "content" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text c="dimmed" size="sm" lh={1} mb={17}>
                          Industry
                        </Text>
                        <Text fw={500} size="1.1rem" lh={1}>
                          {companyInfo.industry}
                        </Text>
                      </div>
                    </GridCol>
                    <GridCol span={{ xs: 12, sm: 12, md: 6, lg: "content" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text c="dimmed" size="sm" lh={1} mb={17}>
                          Location
                        </Text>
                        <Text fw={500} size="1.1rem" lh={1}>
                          Lagos
                        </Text>
                      </div>
                    </GridCol>

                    <GridCol span={{ xs: 12, sm: 12, md: 6, lg: "content" }}>
                      {companyInfo.status === "Pending" ? (
                        <Group justify="flex-start" align="center" gap={"20px"}>
                          <Button
                            variant="filled"
                            size="sm"
                            color="#43D72B"
                            component="a"
                            tt="capitalize"
                            px="30px"
                            w={{ lg: "auto", md: "auto", sm: "auto" }}
                            className={classes.btn}
                            onClick={openAccept}
                            aria-label="approve"
                          >
                            Approve
                          </Button>
                          <Button
                            variant="filled"
                            size="sm"
                            color="#FF0000"
                            tt="capitalize"
                            px="30px"
                            w={{ lg: "auto", md: "auto", sm: "auto" }}
                            className={classes.btn}
                            onClick={openReject}
                            aria-label="reject"
                          >
                            Reject
                          </Button>
                        </Group>
                      ) : companyInfo.status === "Approved" ? (
                        <Group justify="flex-start" align="center" gap={"20px"}>
                          <Badge size="lg" color="#14cf14" variant="light">
                            {companyInfo.status}
                          </Badge>
                          <Button
                            variant="filled"
                            size="sm"
                            color="#ffb242"
                            tt="capitalize"
                            px="30px"
                            w={{ lg: "auto", md: "auto", sm: "auto" }}
                            className={classes.btn}
                            onClick={openSuspend}
                            aria-label="suspend"
                          >
                            Suspend
                          </Button>
                        </Group>
                      ) : companyInfo.status === "Suspended" ? (
                        <Group justify="flex-start" align="center" gap={"20px"}>
                          <Badge size="lg" color="#ffb242" variant="light">
                            {companyInfo.status}
                          </Badge>
                          <Button
                            variant="filled"
                            size="sm"
                            color="#43D72B"
                            component="a"
                            tt="capitalize"
                            px="30px"
                            w={{ lg: "auto", md: "auto", sm: "auto" }}
                            className={classes.btn}
                            onClick={openAccept}
                            aria-label="unsuspend"
                          >
                            unsuspend
                          </Button>
                        </Group>
                      ) : (
                        <Group justify="flex-start" align="center" gap={"20px"}>
                          <Badge size="lg" color="red" variant="light">
                            {companyInfo.status}
                          </Badge>
                          <Button
                            variant="filled"
                            size="sm"
                            color="#43D72B"
                            component="a"
                            tt="capitalize"
                            px="30px"
                            w={{ lg: "auto", md: "auto", sm: "auto" }}
                            className={classes.btn}
                            onClick={openAccept}
                            aria-label="approve"
                          >
                            Approve
                          </Button>
                        </Group>
                      )}
                    </GridCol>
                  </Grid>
                </div>
                <Space h={36} />
                <div className={classes.companyProfile}>
                  <Group justify="space-between">
                    <Text
                      tt={"capitalize"}
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                      }}
                    >
                      company Profile
                    </Text>
                    <Switch
                      labelPosition="left"
                      label="Edit"
                      classNames={{
                        label: classes.editLabel,
                      }}
                      checked={isEdit}
                      onChange={(e) => setIsEdit(e.currentTarget.checked)}
                    />
                  </Group>
                  <Space h={46} />

                  <form>
                    <Grid gutter={"lg"} justify="flex-start" mt={"lg"}>
                      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                        <TextInput
                          size="md"
                          withAsterisk
                          label="Company Name"
                          {...form.getInputProps("name")}
                          style={{ width: "100%" }}
                          classNames={{
                            label: classes.label,
                            error: classes.error,
                          }}
                          disabled
                        />
                      </GridCol>
                      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                        <TextInput
                          size="md"
                          withAsterisk
                          label="Subdomain"
                          {...form.getInputProps("subdomain")}
                          style={{ width: "100%" }}
                          classNames={{
                            label: classes.label,
                            error: classes.error,
                          }}
                          disabled
                        />
                      </GridCol>

                      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                        <TextInput
                          size="md"
                          {...form.getInputProps("emailDomain")}
                          label="Email Domain"
                          style={{ width: "100%" }}
                          classNames={{
                            label: classes.label,
                            error: classes.error,
                          }}
                          disabled={!isEdit}
                        />
                      </GridCol>
                      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                        <TextInput
                          size="md"
                          withAsterisk
                          label="Company Email"
                          {...form.getInputProps("email")}
                          style={{ width: "100%" }}
                          classNames={{
                            label: classes.label,

                            error: classes.error,
                          }}
                          disabled={!isEdit}
                        />
                      </GridCol>
                      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                        <TextInput
                          leftSectionWidth={50}
                          leftSection={"+234"}
                          size="md"
                          withAsterisk
                          label="Phone Number"
                          {...form.getInputProps("phoneNumber")}
                          style={{ width: "100%" }}
                          classNames={{
                            label: classes.label,

                            error: classes.error,
                          }}
                          disabled={!isEdit}
                          maxLength={11}
                          type="tel"
                        />
                      </GridCol>
                      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                        <TextInput
                          size="md"
                          withAsterisk
                          label="Company Website"
                          {...form.getInputProps("website")}
                          style={{ width: "100%" }}
                          classNames={{
                            label: classes.label,

                            error: classes.error,
                          }}
                          disabled={!isEdit}
                        />
                      </GridCol>
                      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                        <Select
                          allowDeselect={false}
                          data={fields}
                          size="md"
                          withAsterisk
                          label="Field/Industry"
                          style={{ width: "100%" }}
                          classNames={{
                            label: classes.label,

                            error: classes.error,
                          }}
                          {...form.getInputProps("industryId")}
                          disabled={!isEdit}
                        />
                      </GridCol>
                      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                        <Select
                          data={companySize}
                          allowDeselect={false}
                          label="Company Size"
                          {...form.getInputProps("companySizeId")}
                          withAsterisk
                          size="md"
                          classNames={{
                            label: classes.label,
                            error: classes.error,
                          }}
                          disabled={!isEdit}
                        />
                      </GridCol>
                      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                        <TextInput
                          size="md"
                          withAsterisk
                          label="Company Address"
                          {...form.getInputProps("address")}
                          style={{ width: "100%" }}
                          classNames={{
                            label: classes.label,
                            error: classes.error,
                          }}
                          disabled={!isEdit}
                        />
                      </GridCol>

                      <GridCol span={{ lg: 4, md: 6, sm: 12 }}>
                        <Select
                          data={countries}
                          label="Country"
                          size="md"
                          withAsterisk
                          {...form.getInputProps("countryId")}
                          classNames={{
                            label: classes.label,
                            error: classes.error,
                          }}
                          searchable
                          allowDeselect={false}
                          disabled={!isEdit}
                        />
                      </GridCol>
                    </Grid>
                    <Group justify="flex-end" mt="3.5rem" fz="16px">
                      <Button
                        variant="outline"
                        size="md"
                        color="#3377FF"
                        style={{ borderColor: "#3377FF" }}
                        tt="capitalize"
                        onClick={() => back()}
                        aria-label="back"
                      >
                        back
                      </Button>
                      <Button
                        size="md"
                        px={"30px"}
                        color="white"
                        bg="#3377ff"
                        type="submit"
                        disabled={!isEdit}
                        aria-label="save"
                      >
                        Save
                      </Button>
                    </Group>
                  </form>
                </div>
              </div>
            </Container>
          </div>
        </Container>
      )}
    </>
  );
};

export default CompanyWrap;
