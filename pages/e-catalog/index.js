import dynamic from 'next/dynamic'
import React from 'react'
const  Ecat  = dynamic(import('components/A-Cat') ,{ssr:false})
function index() {
  return (
    <Ecat />
  )
}

export default index