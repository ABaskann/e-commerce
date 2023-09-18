import React from 'react'
import { useParams } from 'react-router-dom'

function DetailLayout() {
    const {product_id} = useParams()
  return (
    <div><p>{product_id}</p></div>
  )
}

export default DetailLayout