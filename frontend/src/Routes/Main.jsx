import React from 'react'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'

export const Main = () => {
  return (
    <div>
      <div>
        <Navbar />

      </div>
      <div style={{paddingTop: "80px"}}>
        <AllRoutes />

      </div>
    </div>
  )
}
