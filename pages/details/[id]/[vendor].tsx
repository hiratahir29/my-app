import { useRouter } from 'next/router'
import React from 'react'

const VendorPage = () => {
    const router = useRouter();

  const {id, vendor} = router.query
  return (
    <div>
      <h1>This is {vendor} page clicked by {id}</h1>
    </div>
  )
}

export default VendorPage
