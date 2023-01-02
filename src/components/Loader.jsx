import React from 'react'
import {Spin} from 'antd'

const Loader = () => {
  return (
    <div>
        <Spin size="large" tip='Loading'/>
    </div>
  )
}

export default Loader