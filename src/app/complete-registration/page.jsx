import { Paper } from "@mantine/core";
import styles from "./completeRegistration.module.css";

import CompleteForm from "./CompleteForm";

export default function CompleteRegistration() {
  return (
    <div
      style={{ height: "100%", backgroundColor: "#F8F9FA", padding: "2rem 0" }}
    >
      <Paper shadow="xs" className={styles.container}>
        <CompleteForm></CompleteForm>
      </Paper>
    </div>
  );
}
