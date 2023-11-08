import { Box, Flex, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import classes from '@/styles/FormIntro.module.css'

const FormIntro = ({type, desc, title, mt, step}) => {
  return (
<Flex justify="space-between" align="flex-start" mt={mt}>
    <Stack justify="flex-start" align="flex-start" gap="5px">
        <Title order={2} className={classes.type}>{type}</Title>
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.desc}>{desc}</Text>
    </Stack>
    {
      step && 
    <Box ta="right">
      <Text c={"black"} tt="capitalize">{`step ${step} of 2`} </Text>
    </Box>
    }
</Flex>
  )
}

export default FormIntro