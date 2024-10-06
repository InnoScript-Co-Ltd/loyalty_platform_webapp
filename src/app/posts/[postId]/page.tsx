'use client'

import { useGetPostById } from '@/components/Requests/postRequest'
import { useParams } from 'next/navigation'
import React from 'react'

const PostDetail = () => {
  const param: {postId: string} = useParams();
  const { post} = useGetPostById(param.postId);
  return (
    <div>
        <p className='text-[20px] bold mb-2'>
            {post?.title}
        </p>
        <p>
            {post?.body}
        </p>
    </div>
  )
}

export default PostDetail