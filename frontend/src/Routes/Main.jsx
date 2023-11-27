import React from 'react'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'

export const Main = () => {
  return (
    <div>
      <div>
        <Navbar />

      </div>
      <div style={{marginTop: "100px"}}>
        <AllRoutes />

      </div>
    </div>
  )
}
