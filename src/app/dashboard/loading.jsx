import { Flex, Loader } from '@mantine/core'
import React from 'react'

const Loading = () => {
  return (
    <Flex
       h='100dvh'
       justify='center'
       align='center'
       >
        <Loader color="blue" size="lg" type="dots" />
      </Flex>
  )
}

export default Loading