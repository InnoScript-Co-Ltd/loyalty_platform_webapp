import Link from 'next/link'
import { Props } from 'next/script'
import React from 'react'

const Navigation: React.FC<Props> = ({children}) => {
  return (
    <div>
        <div className='w-full p-5 flex flex-row'>
            <Link
            href={'/home'}
            >
                Home
            </Link>
        </div>
        {children}
    </div>
  )
}

export default Navigation