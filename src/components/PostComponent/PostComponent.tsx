import React from 'react'
import { PostInterface } from '../../models/posts.model'
import Link from 'next/link'

const PostComponent = (props: PostInterface) => {
  return (
    <div className='w-full h-auto rounded-md border border-[#a5a5a5] p-5'>
        <p className='text-[20px] bold mb-2'>
            {props.title}
        </p>
        <p>
            {props.body}
        </p>
        <Link
        className='text-blue-700'
        href={`posts/${props.id}`}
        >
            View
        </Link>
    </div>
  )
}

export default PostComponent