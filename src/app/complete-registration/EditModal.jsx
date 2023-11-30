import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput } from "@mantine/core";

export default function EditModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button onClick={open} aria-label="open-modal">
        Open modal
      </Button>
    </>
  );
}
