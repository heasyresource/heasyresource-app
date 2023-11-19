"use client";
import { DataTable } from "mantine-datatable";
import classes from "./leaveLayout.module.css";

import {
  ActionIcon,
  Flex,
  Menu,
  MenuTarget,
  MenuDropdown,
  MenuItem,
  Text,
  Button,
  Group,
  Stack,
  Textarea,
  Modal,
  Badge,
  Box,
  Image,
} from "@mantine/core";
import {
  IconCheck,
  IconX,
  IconDotsVertical,
  IconAlertCircleFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { convertStringDate } from "@/utils/publicFunctions";

const LeaveTable = ({
  leaves,
  paginate,
  pagination,
  gettingData,
  setItemID,
  handleApprove,
  handleReject,
  rejectForm,
  loading,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedApp, { open: openApp, close: closeApp }] = useDisclosure(false);
  const getDate = (timestamp) => {
    const datePortion = new Date(timestamp)?.toISOString().split("T")[0];
    return datePortion;
  };
  const getDaysDifference = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    const timeDifference = date2 - date1;

    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    return Math.round(daysDifference);
  };

  const openReject = (data) => {
    setItemID(data.id);
    open();
  };
  const openApprove = (data) => {
    setItemID(data.id);
    openApp();
  };
  return (
    <>
      {leaves?.length !== 0 ? (
        <DataTable
          style={{ background: "none", marginTop: "3rem" }}
          minHeight={"250px"}
          loaderType="dots"
          loaderColor="#3377FF"
          fetching={gettingData}
          withRowBorders={false}
          records={leaves}
          columns={[
            {
              accessor: "index",
              title: "S/N",
              textAlign: "center",

              render: (record) => leaves.indexOf(record) + 1,
            },
            {
              accessor: "createdAt",
              title: "Date",
              textAlign: "center",
              textTransform: "capitalize",
              noWrap: true,
              render: ({ createdAt }) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {convertStringDate(createdAt)}
                </Text>
              ),
            },
            {
              accessor: "user",
              title: "Employee Name",
              textAlign: "center",
              textTransform: "capitalize",
              noWrap: true,
              render: ({ user }) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {`${user.firstName} ${user.lastName}`}
                </Text>
              ),
            },
            {
              accessor: "leaveType",
              textAlign: "center",
              textTransform: "capitalize",
              noWrap: true,
              render: ({ leaveType }) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {leaveType.name}
                </Text>
              ),
            },
            {
              accessor: "",
              title: "Number of Days",
              textAlign: "center",
              textTransform: "capitalize",
              noWrap: true,
              render: (leaves) => (
                <Text tt="capitalize" style={{ fontSize: "15px" }}>
                  {`${getDaysDifference(leaves.startDate, leaves.endDate)} ${
                    getDaysDifference(leaves.startDate, leaves.endDate) > 1
                      ? "days"
                      : "day"
                  }`}
                </Text>
              ),
            },
            {
              accessor: "status",
              textAlign: "center",
              textTransform: "capitalize",
              noWrap: true,
              render: ({ status }) => (
                <>
                  {status === "Approved" && (
                    <Badge color="#14cf14">{status}</Badge>
                  )}
                  {status === "Pending" && <Badge color="grey">{status}</Badge>}
                  {status === "Rejected" && <Badge color="red">{status}</Badge>}
                </>
              ),
            },
            {
              accessor: "actions",
              title: "Actions",
              width: "135px",
              textAlign: "center",
              render: (leaves) => (
                <Flex justify="center" align="center">
                  {leaves.approvedBy === null && leaves.rejectedBy === null && (
                    <ActionIcon
                      variant="filled"
                      color="#84ADFF"
                      radius="lg"
                      onClick={() => {
                        openApprove(leaves);
                      }}
                    >
                      <IconCheck
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  )}
                  {leaves.approvedBy === null && leaves.rejectedBy === null && (
                    <ActionIcon
                      variant="filled"
                      color="#FF7A00"
                      radius="lg"
                      style={{ marginLeft: "10px" }}
                      onClick={() => {
                        openReject(leaves);
                      }}
                    >
                      <IconX
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  )}
                  <Menu shadow="md" width={200}>
                    <MenuTarget>
                      <ActionIcon variant="transparent" color="#838383">
                        <IconDotsVertical
                          style={{ width: "70%", height: "70%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    </MenuTarget>
                    <MenuDropdown>
                      <MenuItem
                        fz="xs"
                        component="a"
                        href={`/dashboard/employee/${leaves?.userId}/personal-detail`}
                      >
                        Employee Detailss
                      </MenuItem>

                      <MenuItem fz="xs">Leave Details</MenuItem>
                    </MenuDropdown>
                  </Menu>
                </Flex>
              ),
            },
          ]}
          totalRecords={pagination?.total}
          recordsPerPage={pagination?.perPage}
          page={pagination?.currentPage}
          onPageChange={(page) => paginate(page)}
        />
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            margin: "6rem 0",
          }}
        >
          <Stack justify="center" align="center">
            <Box style={{ width: "10rem", height: "auto" }}>
              <Image src={"/assets/svgs/empty.svg"} alt="empty" />
            </Box>
            <Text style={{ fontSize: "16px", color: "#616161" }}>
              No leaves yet!
            </Text>
          </Stack>
        </Box>
      )}

      <Modal
        title="Reject Leave"
        closeOnClickOutside={false}
        withCloseButton={false}
        centered
        opened={opened}
        onClose={close}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form
          onSubmit={rejectForm?.onSubmit((values) => {
            handleReject(values);
            close();
          })}
        >
          <Textarea
            label="Reason"
            classNames={{
              label: classes.label,
              error: classes.error,
              placeholder: classes.placeholder,
            }}
            {...rejectForm?.getInputProps("reasonForRejection")}
            disabled={loading}
            autosize={true}
            minRows={2}
          />
          <Group mt="1rem" justify="flex-end" align="center">
            <Button
              variant="outline"
              size="md"
              color="#A3A3A3"
              style={{ borderColor: "#A3A3A3" }}
              tt="capitalize"
              onClick={() => {
                close();
                rejectForm?.reset();
                setItemID("");
              }}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              style={{ backgroundColor: "#FF0000" }}
              tt="capitalize"
              type="submit"
            >
              reject
            </Button>
          </Group>
        </form>
      </Modal>
      <Modal
        closeOnClickOutside={false}
        withCloseButton={false}
        centered
        opened={openedApp}
        onClose={closeApp}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Stack py={"3rem"} justify="center" align="center">
          <ActionIcon variant="transparent" size="xl">
            <IconAlertCircleFilled
              style={{
                color: "#3377FF",
                fontSize: "20px",
                width: "100%",
                height: "100%",
              }}
              stroke={1.5}
            />
          </ActionIcon>
          <Text fw={600} style={{ fontSize: "25px", color: "#000000" }}>
            Confirm Approve
          </Text>

          <Text
            style={{ fontSize: "16px", color: "#1E1E1E", textAlign: "center" }}
          >
            Are you sure you want to approve this leave?
          </Text>
          <Group mt="1rem" justify="flex-end" align="center">
            <Button
              variant="outline"
              size="md"
              color="#A3A3A3"
              style={{ borderColor: "#A3A3A3" }}
              tt="capitalize"
              onClick={() => {
                closeApp();
                setItemID("");
              }}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              size="md"
              style={{ backgroundColor: "#3377FF" }}
              tt="capitalize"
              onClick={() => {
                handleApprove();
                closeApp();
              }}
            >
              approve
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};
export default LeaveTable;
