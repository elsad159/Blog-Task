import React from 'react'
import Rainbow from './ui-components/rainbow'
import Chart from './ui-components/Chart'
import Range from './ui-components/Range'

const Blogs = () => {
  return (
    <div style={{ "display": "flex", "alignItems": "center", justifyContent: "space-between" }}>
      <Rainbow />
      <Chart />
      <Range />
    </div>
  )
}

export default Blogs