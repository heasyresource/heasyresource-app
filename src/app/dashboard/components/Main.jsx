import { AppShell } from '@mantine/core'
import React, { Suspense } from 'react'
import Loading from '../loading'


const Main = ({ children }) => {
  return (
    <AppShell.Main style={{ backgroundColor: '#F8F9FA', zIndex: "1000" }}>
      <Suspense fallback={<Loading />}>
        <div>
          {children}
        </div>
      </Suspense>
    </AppShell.Main>
  )
}

export default Main