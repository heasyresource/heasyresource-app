"use client";
import {
    Text,
    Button,
    PasswordInput,
    Stack,
    Popover,
    Progress,
    Loader,
} from "@mantine/core";
import classes from "./newPassword.module.css";
import { IconCheck, IconX } from "@tabler/icons-react";
import { getStrength, requirements } from "@/utils/publicFunctions";
import useResetPassword from "@/hooks/useResetPassword";

export default function NewPasswordForm() {
    const { form, handleFormSubmit, setPopoverOpened, popoverOpened, loading } =
        useResetPassword();
    const PasswordRequirement = ({ meets, label }) => {
        return (
            <Text
                c={meets ? "teal" : "red"}
                style={{ display: "flex", alignItems: "center" }}
                mt={7}
                size="sm"
            >
                {meets ? <IconCheck size={14} /> : <IconX size={14} />}{" "}
                <span className="ml-[15px]" ml={10}>
                    {label}
                </span>
            </Text>
        );
    };
    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement
            key={index}
            label={requirement.label}
            meets={requirement.re.test(form.values.password)}
        />
    ));
    const strength = getStrength(form.values.password);
    const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

    return (
        <form
            className="mt-[2rem]"
            onSubmit={form.onSubmit((values) => handleFormSubmit(values))}
        >
            <Stack gap="1rem">
                <Popover
                    opened={popoverOpened}
                    position="bottom"
                    width="target"
                    transition="pop"
                >
                    <Popover.Target>
                        <div
                            onFocusCapture={() => setPopoverOpened(true)}
                            onBlurCapture={() => setPopoverOpened(false)}
                        >
                            <PasswordInput
                                size="md"
                                required
                                label="Enter New Password"
                                {...form.getInputProps("password")}
                                disabled={loading}
                                classNames={{
                                    label: classes.label,
                                    error: classes.error,
                                }}
                            />
                        </div>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Progress
                            color={color}
                            value={strength}
                            size={7}
                            style={{ marginBottom: 10 }}
                        />
                        <PasswordRequirement
                            label="Includes at least 8 characters"
                            meets={form.values.password.length > 7}
                        />
                        {checks}
                    </Popover.Dropdown>
                </Popover>
                <PasswordInput
                    classNames={{ label: classes.label, error: classes.error }}
                    label="Confirm Password"
                    size="md"
                    required
                    disabled={loading}
                    {...form.getInputProps("confirmPassword")}
                />
                <Button
                    size="md"
                    variant="filled"
                    tt="capitalize"
                    fw="bold"
                    c={"white"}
                    type="submit"
                    bg="#3377FF"
                >
                    {loading ? (
                        <Loader type="dots" color="white" />
                    ) : (
                        "Update Password"
                    )}
                </Button>
            </Stack>
        </form>
    );
}
