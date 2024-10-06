'use client'

import Marchantdetail from '@/components/components/MarchantComponent.tsx/Marchantdetail'
import { useParams } from 'next/navigation'
import React from 'react'

const MarchantDetail = () => {
    const param: {marchantId: string} = useParams();
  return (
    <div>
        {param.marchantId}
        <Marchantdetail />
    </div>
  )
}

export default MarchantDetail