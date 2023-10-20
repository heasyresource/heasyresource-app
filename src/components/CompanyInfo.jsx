import useCustomAuthHook from '@/hooks'
import { Button, Select, Stack, TextInput } from '@mantine/core'
import React from 'react'

const CompanyInfo = () => {
    const {companyInfoForm, handleCompanyInfoSubmit,} = useCustomAuthHook()
  return (
    <form
    onSubmit={companyInfoForm.onSubmit((values) =>
      handleCompanyInfoSubmit(values)
    )}
  >
    <Stack gap="1.5rem">
      <TextInput
        size="lg"
        placeholder="company name"
        type="text"
        {...companyInfoForm.getInputProps("name")}
        required
      />
      <TextInput
        size="lg"
        placeholder="company email"
        type="email"
        required
        {...companyInfoForm.getInputProps("email")}
      />
      <TextInput
        size="lg"
        placeholder="company website"
        type="url"
        required
        {...companyInfoForm.getInputProps("website")}
      />
      <Select
        size="lg"
        placeholder="Field/Industry"
        data={["React", "Angular", "Vue", "Svelte"]}
        searchable
        required
        {...companyInfoForm.getInputProps("field")}
      />
      <TextInput
        size="lg"
        placeholder="phone number"
        type="tel"
        required
        {...companyInfoForm.getInputProps("phoneNumber")}
      />
      <Button
        size="lg"
        variant="filled"
        tt="capitalize"
        fs="1rem"
        fw="bold"
        c={"white"}
        type="submit"
      >
        next
      </Button>
    </Stack>
  </form>
  )
}

export default CompanyInfo